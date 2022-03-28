import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';

function Film() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/`);

        promise.then((response) => {
            const { data } = response;
            setFilms(data);
        });
        promise.catch(error => {
            alert("Deu algum erro...");
        });
    }, []);

    return films.length > 0 ? (
        <Content>
            <h2>Selecione o filme</h2>
            <Films>
                {
                    films.map(film => {
                        const { posterURL, title, id } = film;
                        return (
                            <FilmContainer key={id}>
                                <Link to={`/filme/${id}`}><img className='img-film' src={posterURL} alt={title} /></Link>
                            </FilmContainer>
                        );
                    })
                }
            </Films>
        </Content>
    )
        :
        (<p>Carregando...</p>)
}

const Content = styled.main `
    display: flex;
    flex-direction: column;
    margin-top: 67px;

    h2 {
        width: 375px;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        background: white;
    }
`;

const Films = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: white;
`;

const FilmContainer = styled.div `
    width: 145px;
    height: 209px; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    img {
        width: 129px;
        height: 193px;
    }
`; 

export default Film;