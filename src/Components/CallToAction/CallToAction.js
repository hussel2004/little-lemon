import "./CallToAction.css"
import { Link } from "react-router-dom";
function CallToAction(){
    return(
        <>
            <section className="hero-section">
                <div className="hero-section-descrip">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little lemon is a restaurant base in Chicago. Its strength are meals with lemons</p>
                    <Link to="/booking"><button>Book a table</button></Link>
                </div>
                <div className="hero-section-img">
                    <img src="./images/restaurant.jpg" alt="litte lemon"/>
                </div>

            </section>
        </>
    )
}export default CallToAction;