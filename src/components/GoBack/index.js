import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css'

function GoBack() {
    const navigate = useNavigate();

    return (
        <div className="btn-goBack">
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}

export default GoBack;