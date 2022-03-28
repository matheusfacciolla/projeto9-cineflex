import { useState } from 'react';

function Seat({ id, isAvailable, statusResult, setStatusResult, name }) {

    const [selected, setSelected] = useState(false);

    if (isAvailable === true) {
        if (selected === false) {
            return <button className='seat-true' key={id} onClick={() => {
                setSelected(true);
                setStatusResult([...statusResult, id])
            }
            }>{name}</button>

        } else {
            return <button className='seat-selected' key={id} onClick={() => {
                setSelected(false)
                setStatusResult(statusResult.splice(statusResult.indexOf(id), 1))
                setStatusResult([...statusResult]);
            }
            }>{name}</button>
        }
    } else {
        return <button className='seat-false' key={id} onClick={() => alert("Esse assento não está disponível")}>{name}</button>
    }
}

export default Seat;