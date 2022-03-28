import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Film from '../Film';
import Schedule from '../Schedule';
import Seats from '../Seats';
import FinishedOrder from '../FinishedOrder';

function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Film />} />
                    <Route path='/filme/:filmId' element={<Schedule />} />
                    <Route path='/sessao/:sessionId' element={<Seats />} />
                    <Route path='/sucesso' element={<FinishedOrder />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;