import "./CustomersSay.css";

function CustomersSay() {
  return (
    <section className="customers-say">
      <h1>Testimonials</h1>
      <section className="testimonials-container">
        <article className="testimonial-card">
          <h3>Rating</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="testimonial-user">
            <img src="./images/issei-san.jpeg" alt="User avatar" />
            <h3>Sophia.V</h3>
          </div>
          <p>It’s strange, I’m not able to book a table.</p>
        </article>
        <article className="testimonial-card">
          <h3>Rating</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="testimonial-user">
            <img src="./images/john-portrait.jpeg" alt="User avatar" />
            <h3>Sophia.V</h3>
          </div>
          <p>It’s strange, I’m not able to book a table.</p>
        </article>
        <article className="testimonial-card">
          <h3>Rating</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="testimonial-user">
            <img src="./images/james-portrait.jpeg" alt="User avatar" />
            <h3>Sophia.V</h3>
          </div>
          <p>It’s strange, I’m not able to book a table.</p>
        </article>
        <article className="testimonial-card">
          <h3>Rating</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="testimonial-user">
            <img src="./images/samuel-portrait.jpeg" alt="User avatar" />
            <h3>Sophia.V</h3>
          </div>
          <p>It’s strange, I’m not able to book a table.</p>
        </article>
      
      </section>
    </section>
  );
}
export default CustomersSay;
