import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Footer from '../Footer';

import './style.css';

function Seats() {

    const { sessionId } = useParams();
    const [session, setSession] = useState({});
    const [seats, setSeats] = useState([]);
    const [statusResult, setStatusResult] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        promise.then((response) => {
            console.log(response.data);
            setSession(response.data);
            setSeats(response.data.seats)
        });
        promise.catch(error => {
            console.log(error.response)
        });
    }, [sessionId]);

    return session.seats ? (
        <main>
            <h2>Selecione o(s) assento(s)</h2>
            <div className='seats'>
                {seats.map((seat) =>
                    <Seat
                        key={seat.id}
                        id={seat.id}
                        name={seat.id}
                        isAvailable={seat.isAvailable}    
                        statusResult={statusResult}
                        setStatusResult={setStatusResult}
                    />)}
            </div>

            <LabelSeats />
            <Inputs id={seats.id}
                    name={seats.id} 
                    statusResult={statusResult}
                    session={session}/>

            <Footer filmId={session.movie.id}
                    day={session.day.weekday}
                    showTime={session.name} />
        </main>
    )
        :
        (<p>Carregando...</p>)
}

function Seat({ id, name, isAvailable,  statusResult, setStatusResult }) {

    const [selected, setSelected] = useState(false);

    if (isAvailable === true) {
        if (selected === false) {
            return <button className='seat-true' key={id} onClick={() => {
                setSelected(true);
                setStatusResult([...statusResult, name])
            }
            }>{name}</button>

        } else {
            return <button className='seat-selected' key={id} onClick={() => {
                setSelected(false)
                setStatusResult(statusResult.splice(statusResult.indexOf(name), 1))
                setStatusResult([...statusResult]);
            }
            }>{name}</button>
        }
    } else {
        return <button className='seat-false' key={id} onClick={() => alert("assento indisponivel!")}>{name}</button>
    }
}

function LabelSeats() {

    return (
        <div className='legenda'>
            <div>
                <button className='seat-selected'></button>
                <p>Selecionado</p>
            </div>
            <div>
                <button className='seat-true'></button>
                <p>Disponível</p>
            </div>
            <div>
                <button className='seat-false'></button>
                <p>Indisponível</p>
            </div>
        </div>
    );
}

function Inputs(statusResult, session) {

    const [dados, setDados] = useState({ids: [], nome: "", cpf: ""})
    const navigate = useNavigate();

    console.log("status",statusResult)


    function sendInfos(e) {
        e.preventDefault();
        console.log("statusresult", statusResult)
        console.log("dados", dados)

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: [statusResult.statusResult],
            nome: dados.nome,
            cpf: dados.cpf,
          })
        promise.then(response => {
            
            console.log("sucesso",response)
            navigate('/sucesso', { state: { session, dados }});
        });
        promise.catch(error => {
            console.log(error)
            alert("Deu algum erro...");
            console.log("dados", dados)
        })
    }

    return (
        <form onSubmit={sendInfos}>

            <div className='infos'>
                <div className='name'>
                    <label for='nome'>Nome do comprador:</label>
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
                    <label for='cpf'>CPF do comprador:</label>
                    <input
                        type='text'
                        placeholder='Digite seu CPF...'
                        name='cpf'
                        id='cpf'
                        value={dados.cpf}
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

export default Seats;