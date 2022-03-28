import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Footer from '../Footer';

import styled from 'styled-components';

function Schedule() {

    const { filmId } = useParams();
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmId}/showtimes`);

        promise.then((response) => {
            setSchedules(response.data.days);
        });
        promise.catch(error => {
            alert("Deu algum erro...");
        });
    }, [filmId]);

    return schedules.length > 0 ? (
        <MainContent >
            <h2>Selecione o horário</h2>
            <SchedulesWrap>
                {
                    schedules.map((schedule) => {
                        const { id, weekday, date, showtimes } = schedule;
                        return (
                            <ScheduleDate key={id}>
                                <p>{weekday} - {date}</p>
                               
                                    {
                                        showtimes.map((showtime) => {
                                            const { name, id } = showtime;
                                            return (
                                                <Link to={`/sessao/${id}`} key={id}>
                                                    <Schedules>{name}</Schedules>
                                                </Link>
                                            );
                                        })
                                    }
                                
                            </ScheduleDate>
                        );
                    })
                }
                <Footer filmId={filmId} />
            </SchedulesWrap>
        </MainContent>
    )
        :
        (<p>Carregando...</p>)
}

const MainContent = styled.main `
    margin-top: 67px;
    display: flex;
    flex-direction: column;

    h2 {
        width: 374px;
        height: 110px;
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

const SchedulesWrap = styled.div `
    width: 375px;
    height: 100%;
    background: white;
    margin-bottom: 117px;
`;

const ScheduleDate = styled.div `
    margin-left: 23px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
`;

const Schedules = styled.button `
    width: 83px;
    height: 43px;
    margin-right: 8px;
    margin-top: 22px;
    margin-bottom: 22px;
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;
    border: none;
    cursor: pointer;
`;

export default Schedule;