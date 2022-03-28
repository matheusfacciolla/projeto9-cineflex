import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Footer from '../Footer';

import './style.css'

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
        <main >
            <h2>Selecione o horário</h2>
            <div className='schedules-wrap'>
                {
                    schedules.map((schedule) => {
                        const { id, weekday, date, showtimes } = schedule;
                        return (
                            <div className='date-schedule' key={id}>
                                <p>{weekday} - {date}</p>
                                <div className='schedules'>
                                    {
                                        showtimes.map((showtime) => {
                                            const { name, id } = showtime;
                                            return (
                                                <Link to={`/sessao/${id}`} key={id}>
                                                    <button className='schedule'>{name}</button>
                                                </Link>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
                <Footer filmId={filmId} />
            </div>
        </main>
    )
        :
        (<p>Carregando...</p>)
}

export default Schedule;