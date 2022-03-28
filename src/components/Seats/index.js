import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Seat from '../Seats/Seat'
import Inputs from '../Seats/Inputs';
import Footer from '../Footer';

import './style.css';

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
        <main>
            <h2>Selecione o(s) assento(s)</h2>
            <div className='seats'>
                {seats.map((seat) =>
                    <Seat
                        key={seat.id}
                        id={seat.id}
                        name={seat.name}
                        isAvailable={seat.isAvailable}
                        statusResult={statusResult}
                        setStatusResult={setStatusResult}
                    />)}
            </div>

            <LabelSeats />
            <Inputs id={seats.id}
                name={seats.id}
                statusResult={statusResult}
                session={session} />

            <Footer filmId={session.movie.id}
                day={session.day.weekday}
                showTime={session.name} />
        </main>
    )
        :
        (<p>Carregando...</p>)
}

function LabelSeats() {

    return (
        <div className='legenda'>
            <div>
                <button className='seat-selected'></button>
                <p>Selecionado</p>
            </div>
            <div>
                <button className='seat-true'></button>
                <p>Disponível</p>
            </div>
            <div>
                <button className='seat-false'></button>
                <p>Indisponível</p>
            </div>
        </div>
    );
}

export default Seats;