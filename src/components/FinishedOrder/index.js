import { Link } from 'react-router-dom';

import './style.css'

function FinishedOrder() {
    return (
        <>
            <div className='FinishedOrder'>
                <p>Pedido feito com sucesso!</p>
            </div>
            <Link to='/'><button className='btn-finish'>Voltar pra Home</button></Link>
        </>
    );
}

export default FinishedOrder;