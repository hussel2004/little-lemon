
import Header from "./Components/Header";

import Main from './Components/Main';
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
         <Main/>
         <Footer/>
     
      </BrowserRouter>
        
    </>
    
   
  );
}

export default App;
