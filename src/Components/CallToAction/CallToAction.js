import "./CallToAction.css"
function CallToAction(){
    return(
        <>
            <section className="hero-section">
                <div className="hero-section-descrip">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little lemon is a restaurant base in Chicago. Its strength are meals with lemons</p>
                    <button>Book a table</button>
                </div>
                <div className="hero-section-img">
                    <img src="./images/restaurant.jpg" alt="litte lemon"/>
                </div>

            </section>
        </>
    )
}export default CallToAction;