import "./Header.css";
import { Link } from 'react-router-dom';
function Header(){
    return(
        
        <header className='header'>
            <img src="/images/Logo .svg" alt="little lemon logo"/>
            <nav className='header-nav'>
                <ul>
               
                     <li><Link to ="/home">Home</Link></li>
                    <li><Link to ="/home">About</Link></li>
                    <li><Link to ="/">Menu</Link></li>
                    <li><Link to ="/booking">Reservations</Link></li>
                    <li><Link to ="/">Order Online</Link></li>
                    <li><Link to ="/">Login</Link></li>
               
                    
                </ul>
            </nav>
        </header>
       
    )
}
export default Header;