import { useLocation } from 'react-router-dom';

import GoBack from '../GoBack';

import styled from 'styled-components';

function Header() {
    return (
        <Head>
            {
                useLocation().pathname !== "/" ?
                    <>
                        <GoBack />
                        <h1>CINEFLEX</h1>
                    </>
                    :
                    <h1>CINEFLEX</h1>
            }
        </Head>
    );
}

const Head = styled.div `
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #C3CFD9;
    position: fixed;
    top: 0;
    left: 0;

    h1 {
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }
`;

export default Header;