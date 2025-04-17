import "./Footer.css";
import { Link } from 'react-router-dom';
function Footer(){
    return(
    
    <footer className="footer">

         <img src="/images/Logo .svg" alt="little lemon logo" />
   
        <nav className="footer-nav">
                <h1>Navigation</h1>
                <ul>
                 
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/">About</Link></li>
                    <li><Link to ="/">Menu</Link></li>
                    <li><Link to ="/booking">Reservations</Link></li>
                    <li><Link to ="/">Order Online</Link></li>
                    <li><Link to ="/">Login</Link></li>
                   
                    
                </ul>
        </nav>
        <div className="footer-contact">
            <h1>Contact</h1>
            <p>Email: husselenspy2004@mail.com</p>
            <p>Tel:691976550</p>
        </div>
        <div className="footer-social-media">
            <h1>Social media</h1>
            <aside>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/facebook-logo.webp" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                 <img src="./images/instagram-logo.jpeg" alt="Instagram" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src="./images/whatsapp-logo.jpeg" alt="Whatsapp" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                 <img src="./images/x-logo.jpeg" alt="X" />
            </a>
                
            </aside>

        </div>

    </footer>
    
    )
}
export default Footer;