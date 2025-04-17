import "./Specials.css";
function Specials(){
    return(
        <section className="specials">
            <div className="specials-div-1">
                <h1>THIS WEEK SPECIALS ! </h1>
               <button>Online Menu</button>
                
            </div>
            <section className="specials-sec-1">
                <article className="specials-sec-article">
                    <div className="food-img">
                        <img src="./images/greek-salad.jpg" alt="greek salad"/>
                    </div>
                    <div>
                        <h3>Greek Salad</h3>
                        <p>12.99£</p>
                    </div>
                    <div>
                        <p>The famous greek salad of  crispy lettuce ,perpers, olives and your Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons </p>
                    </div>
                    <div className="order-line" >
                        <h3>Order a delivery</h3>
                        <img className="order" src="./images/shopping-cart-icon.jpeg" alt=" "/>
                    </div>
                </article>
                <article className="specials-sec-article">
                    <div className="food-img">
                        <img src="./images/bruchetta.svg" alt="bruchetta"/>
                    </div>
                    <div>
                        <h3>Greek Salad</h3>
                        <p>12.99£</p>
                    </div>
                    <div>
                        <p>The famous greek salad of  crispy lettuce ,perpers, olives and your Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons </p>
                    </div>
                    <div className="order-line" >
                        <h3>Order a delivery</h3>
                        <img className="order" src="./images/shopping-cart-icon.jpeg" alt=" "/>
                    </div>
                </article>
                <article className="specials-sec-article">
                    <div className="food-img">
                        <img src="./images/lemon-dessert.jpg" alt="lemon dessert"/>
                    </div>
                    <div>
                        <h3>Greek Salad</h3>
                        <p>12.99£</p>
                    </div>
                    <div>
                        <p>The famous greek salad of  crispy lettuce ,perpers, olives and your Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons </p>
                    </div>
                    <div className="order-line" >
                        <h3>Order a delivery</h3>
                        <img className="order" src="./images/shopping-cart-icon.jpeg" alt=""/>
                    </div>
                </article>
                
            </section>

        </section>
    )
}
export default Specials;