import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';

function Inputs(props) {

    const { statusResult, session } = props;

    const [dados, setDados] = useState({ ids: [], nome: "", cpf: "" })
    const navigate = useNavigate();

    function sendInfos(e) {
        e.preventDefault();
        if (statusResult.length > 0) {
            const obj = {
                ids: statusResult,
                nome: dados.nome,
                cpf: dados.cpf,
            }

            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", obj)
            promise.then(response => {
                navigate('/sucesso', { state: { session, obj } });
            });
            promise.catch(error => {
                alert("Deu algum erro...");
            })
        } else {
            alert("Selecione um assento!");
        }
    }

    return (
        <form onSubmit={sendInfos}>

            <InfosContainer>
                <div className='name'>
                    <label htmlFor='nome'>Nome do comprador:</label>
                    <input
                        type='text'
                        placeholder='Digite seu nome...'
                        name='nome'
                        id='nome'
                        value={dados.nome}
                        onChange={e => setDados({ ...dados, nome: e.target.value })}
                        required
                    />
                </div>

                <div className='cpf'>
                    <label htmlFor='cpf'>CPF do comprador:</label>
                    <input
                        type='number'
                        placeholder='Digite seu CPF...'
                        name='cpf'
                        id='cpf'
                        value={dados.cpf}
                        pattern="[0-9]{11}"
                        onChange={e => setDados({ ...dados, cpf: e.target.value })}
                        required
                    />
                </div>


                <div className='btn'>
                    <button type='submit' className='btn-finish'>Reservar assento(s)</button>
                </div>
            </InfosContainer>
        </form>
    );
}

const InfosContainer = styled.div `
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 24px;

    .cpf {
        margin-top: 10px;
    }

    input {
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 3px;
    }

    input::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        margin-left: 16px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .btn-finish {
        width: 225px;
        height: 42px;
        margin-top: 57px;
        margin-bottom: 30px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        cursor: pointer;
    }
`;

export default Inputs;