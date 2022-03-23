import { Link } from 'react-router-dom';

import './style.css'

function Film() {
    return (
        <div className='Film'>
            <Link to='/schedule'>
                <p>Selecione o filme</p>
            </Link>
        </div>
    );
}

export default Film;