import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css'

function Film() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/`);

        promise.then((response) => {
            const { data } = response;
            console.log(data)
            setFilms(data);
        });
        promise.catch(error => {
            console.log(error.response)
        });
    }, []);

    return films.length > 0 ? (
        <main>
            <h2>Selecione o filme</h2>
            <div className='films'>
                {
                    films.map(film => {
                        const { posterURL, title, id } = film;
                        return (
                            <div className='film' key={id}>
                                <Link to={`/filme/${id}`}><img className='img-film' src={posterURL} alt={title} /></Link>
                            </div>
                        );
                    })
                }
            </div>
        </main>
    )
    :
    (<p>Carregando...</p>)
}

export default Film;