import { Link } from 'react-router-dom';

import './style.css'

function Schedule() {
    return (
        <div className='Schedule'>
            <Link to='/seats'>
                <p>Selecione o horário</p>
            </Link>
        </div>
    );
}

export default Schedule;