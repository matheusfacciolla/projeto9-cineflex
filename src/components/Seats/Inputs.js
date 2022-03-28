import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

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

            <div className='infos'>
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
                        type='text'
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
            </div>
        </form>
    );
}

export default Inputs;