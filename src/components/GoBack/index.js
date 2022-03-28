import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

function GoBack() {
    const navigate = useNavigate();

    return (
        <GoBackButton>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </GoBackButton>
    );
}

const GoBackButton = styled.div `
    position: fixed;
    z-index: 2;
    left: 0;

    button {
        width: 86px;
        height: 30px;
        margin-left: 10px;
        border: none;
        border-radius: 3px;
        background-color: #E8833A;
        font-family: 'Roboto';
        color:white;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;

export default GoBack;