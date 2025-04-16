import {  Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from "./BookingPage";
function Main(){
    return(
           
           <Routes> 
               <Route path="/" element={<HomePage />}></Route>
                <Route path="booking1ZZ" element={<BookingPage />}></Route>
            </Routes>
        
       
    )
}
export default Main;