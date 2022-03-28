import { useState, useEffect } from 'react'
import axios from 'axios'

import styled from 'styled-components';

function Footer({ filmId, day, showTime }) {
    const [footer, setFooter] = useState({})

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmId}/showtimes`)
        promise.then(response => {
            setFooter(response.data)
        })
        promise.catch(error => {
            console.log(error.response)
        })
    }, [filmId])

    return (
        <Foot>
            <div className='footer-box'>
                <img className='footer-img' src={footer.posterURL} alt={footer.title} />
            </div>
            <div className="footer-date">
                <p>{footer.title}</p>
                {day ? <p>{day} - {showTime}</p> : <></>}
            </div>
        </Foot>
    );
}

const Foot = styled.div `
    width: 100%;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    border: 1px solid #9EADBA;
    margin: auto auto;

    .footer-box {
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 14px;
        margin-left: 10px;
    }
    
    .footer-img {
        width: 48px;
        height: 72px;
    }
    
    .footer-date {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        display: flex;
        flex-direction: column;
        color: #293845;
        margin-left: 14px;
    }
`;

export default Footer;