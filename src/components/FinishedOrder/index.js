import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import styled from 'styled-components';

function FinishedOrder() {

    const location = useLocation();

    function maskCPF(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    const {

        session: { movie: { title },
            day: { date },
            name }
        ,
        obj: { ids, nome, cpf },
    } = location.state;

    return (
        <OrderContainer>
            <h1>Pedido feito<br></br>com sucesso!</h1>
            <OrderWrap >
                <div className='film-session'>
                    <h2>Filme e sessão</h2>
                    <p>{title}</p>
                    <p>{date} - {name}</p>
                </div>
                <div className='ticket'>
                    <h2>Ingressos</h2>
                    {ids.map(id => <p key={id}>Assento {id}</p>)}
                </div>
                <div className='client'>
                    <h2>Comprador</h2>
                    <p>{nome}</p>
                    <p>{maskCPF(cpf)}</p>
                </div>
            </OrderWrap >
            <OrderBtn>
                <Link to='/' style={{ textDecoration: 'none' }}><button>Voltar pra Home</button></Link>
            </OrderBtn>
        </OrderContainer>
    );
}

const OrderContainer = styled.div `
    margin-top: 67px;
    height: 100%;

    h1 {
        Width: 374px;
        Height: 110px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.04em;
        color: #247A6B;
    }  
`;

const OrderWrap = styled.div `
    margin-left: 30px;

    .film-session {
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .ticket {
        margin-bottom: 40px;
    }
    
    .client {
        margin-bottom: 60px;
    }   

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;  
        color: #293845;
    }
`;

const OrderBtn = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        margin-top: 10px;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        cursor: pointer;
    }
`;

export default FinishedOrder;