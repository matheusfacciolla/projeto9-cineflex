import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Footer from '../Footer';

import './style.css';

function Seats() {

    const { sessionId } = useParams();
    const [session, setSession] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        promise.then((response) => {
            console.log(response.data);
            setSession(response.data);
        });
        promise.catch(error => {
            console.log(error.response)
        });
    }, []);

    return session.seats ? (
        <main>
            <h2>Selecione o(s) assento(s)</h2>
            <div className='seats'>
                <SeatsMap seats={session.seats} />
            </div>
                <Inputs />
                <Footer filmId={session.movie.id} day={session.day.weekday} showTime={session.name} />
        </main>
    )
        :
        (<p>Carregando...</p>)
}

function SeatsMap({ seats }) {

    const [selected, setSelected] = useState(false);

    return (
        <>
            {
                seats.map((seat) => {
                    const { name, id, isAvailable } = seat;
                    if (isAvailable === true) {
                        if (selected === false) {
                            return <button className='seat-true' key={id} onClick={() => setSelected(true)}>{name}</button>
                        } else {
                            return <button className='seat-selected' key={id} onClick={() => setSelected(false)}>{name}</button>
                        }
                    } else {
                        return <button className='seat-false' key={id}>{name}</button>
                    }
                })
            }
        </>
    );
}

function Inputs() {

    return (
        <>
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

    <div className='infos'>
        <div className='name'>
            <p>Nome do comprador:</p>
            <input type='text' placeholder='Digite seu nome...' />
        </div>

        <div className='cpf'>
            <p>CPF do comprador:</p>
            <input type='text' placeholder='Digite seu CPF...' />
        </div>

        <div className='btn'>
            <Link to='/sucesso'><button className='btn-finish'>Reservar assento(s)</button></Link>
        </div>
    </div>
    </>
    );
}

export default Seats;