import { Link } from 'react-router-dom';

import './style.css'

function Seats() {
    return (
        <div className='Seats'>
            <Link to='/finishedOrder'>
                <p>Selecione o(s) assento(s)</p>
            </Link>
        </div>
    );
}

export default Seats;