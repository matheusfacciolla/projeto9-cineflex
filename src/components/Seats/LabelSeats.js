import styled from 'styled-components';

function LabelSeats() {

    return (
        <SubTitle>
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
        </SubTitle>
    );
}

const SubTitle = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 38px;
    width: 375px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }

    .seat-true {
        width: 25px;
        height: 25px;
        background: #C3CFD9;
        border: 1px solid #7B8B99;
        box-sizing: border-box;
        border-radius: 17px;
        border: none;
        text-align: center;
    }

    .seat-false {
        width: 25px;
        height: 25px;
        background: #FBE192;
        border: 1px solid #F7C52B;
        box-sizing: border-box;
        border-radius: 17px;
        border: none;
        text-align: center;
    }

    .seat-selected {
        width: 25px;
        height: 25px;
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
        box-sizing: border-box;
        border-radius: 17px;
        border: none;
        text-align: center;
    }
`;

export default LabelSeats;