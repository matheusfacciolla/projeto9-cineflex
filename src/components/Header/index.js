import { useLocation } from 'react-router-dom';

import GoBack from '../GoBack';

import './style.css'

function Header() {
    return (
        <div className='header'>
            {
                useLocation().pathname !== "/" ?
                    <>
                        <GoBack />
                        <h1>CINEFLEX</h1>
                    </>
                    :
                    <h1>CINEFLEX</h1>
            }
        </div>
    );
}

export default Header;