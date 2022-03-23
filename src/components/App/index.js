import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Film from '../Film';
import Schedule from '../Schedule';
import Seats from '../Seats';
import FinishedOrder from '../FinishedOrder';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Film />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/seats' element={<Seats />} />
                <Route path='/finishedOrder' element={<FinishedOrder />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;