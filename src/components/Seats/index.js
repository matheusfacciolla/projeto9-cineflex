import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Seat from '../Seats/Seat'
import LabelSeats from './LabelSeats';
import Inputs from '../Seats/Inputs';
import Footer from '../Footer';

import styled from 'styled-components';

function Seats() {

    const { sessionId } = useParams();
    const [session, setSession] = useState({});
    const [seats, setSeats] = useState([]);
    const [statusResult, setStatusResult] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        promise.then((response) => {
            setSession(response.data);
            setSeats(response.data.seats)
        });
        promise.catch(error => {
            alert("Deu algum erro...");
        });
    }, [sessionId]);

    return session.seats ? (
        <MainContainer>
            <h2>Selecione o(s) assento(s)</h2>
            <SeatsContainer>
                {seats.map((seat) =>
                    <Seat
                        key={seat.id}
                        id={seat.id}
                        name={seat.name}
                        isAvailable={seat.isAvailable}
                        statusResult={statusResult}
                        setStatusResult={setStatusResult}
                    />)}
            </SeatsContainer>

            <LabelSeats />
            <Inputs id={seats.id}
                name={seats.id}
                statusResult={statusResult}
                session={session} />

            <Footer filmId={session.movie.id}
                day={session.day.weekday}
                showTime={session.name} />
        </MainContainer>
    )
        :
        (<p>Carregando...</p>)
}

const MainContainer = styled.main `
    width: 375px;
    height: 100%;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        width: 374px;
        height: 70px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`;

const SeatsContainer = styled.div `
    width: 335px;
    height: 203px;
    display: flex;
    flex-wrap: wrap; 
    align-items: center;

    button {
        width: 25px;
        height: 25px;
        margin-left: 7px;
        margin-top: 19px;
        cursor: pointer;
        text-align: center;
    }

    .seat-true {
        width: 25px;
        height: 25px;
        background: #C3CFD9;
        border: 1px solid #7B8B99;
        box-sizing: border-box;
        border-radius: 17px;
        border: none;
        text-align: center;
    }

    .seat-false {
        width: 25px;
        height: 25px;
        background: #FBE192;
        border: 1px solid #F7C52B;
        box-sizing: border-box;
        border-radius: 17px;
        border: none;
        text-align: center;
    }

    .seat-selected {
        width: 25px;
        height: 25px;
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
        box-sizing: border-box;
        border-radius: 17px;
        border: none;
        text-align: center;
    }
`;

export default Seats;