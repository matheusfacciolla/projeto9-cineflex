import { useState } from 'react';

function Seat({ id, isAvailable, statusResult, setStatusResult, name }) {

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

export default Seat;