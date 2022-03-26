import { useState, useEffect } from 'react'
import axios from 'axios'

import './style.css'

function Footer({filmId, day, showTime}) {
    const [footer, setFooter] = useState({})

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmId}/showtimes`)
        promise.then(response => {
            setFooter(response.data)
        })
        promise.catch(error => {
            console.log(error.response)
        })
    }, [])

    return (
        <div className='footer'>
            <div className='footer-box'>
                <img className='footer-img' src={footer.posterURL} alt={footer.title} />
            </div>
            <div className="footer-date">
                <p>{footer.title}</p>
                <p>{day} {showTime}</p>
            </div>
        </div>
    );
}

export default Footer;