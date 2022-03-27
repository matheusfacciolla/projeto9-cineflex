import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import './style.css'

function FinishedOrder() {

    const location = useLocation();
    const {
      session: {
        movie: { title },
        day: { date },
        name,
      },
     dados: { ids, nome, cpf },
    } = location.state;

    return (
        <div className='order-wrap'>
            <h1>Pedido feito<br></br>com sucesso!</h1>
            <div className='FinishedOrder'>
                <div className='film-session'>
                    <h2>Filme e sessão</h2>
                    <p>{title}</p>
                    <p>{date} - {name}</p>
                </div>
                <div className='ticket'>
                    <h2>Ingressos</h2>
                    {ids.map(id => <p>Assento {id}</p>)}
                </div>
                <div className='client'>
                    <h2>Comprador</h2>
                    <p>{nome}</p>
                    <p>{cpf}</p>
                </div>
                <Link to='/'><button className='btn-finish'>Voltar pra Home</button></Link>
            </div>
        </div>
    );
}

export default FinishedOrder;