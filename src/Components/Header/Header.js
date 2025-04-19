import "./Header.css";
import { Link } from 'react-router-dom';
function Header(){
    return(
        
        <header className='header'>
            <img src="/images/Logo .svg" alt="little lemon logo"/>
            <nav className='header-nav'>
                <ul>
               
                     <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/">About</Link></li>
                    <li><Link to ="/menu">Menu</Link></li>
                    <li><Link to ="/booking">Reservations</Link></li>
                    <li><Link to ="/">Order Online</Link></li>
                    <li><Link to ="/">Login</Link></li>
               
                    
                </ul>
            </nav>
        </header>
       
    )
}
export default Header;