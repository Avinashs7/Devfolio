import React from "react";

function Testimonials() {
  return (
    <section className="colored-section" id="testimonials">
      <div
        id="testimonial-carousel"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid">
            <h2 className="testimonial-text">
              I have got one of the best employees from this website who are
              passionate about their work and taken my company to great heights.
            </h2>
            <img
              className="testimonial-image"
              src="https://a4kam.org/wp-content/uploads/2021/06/shutterstock_564197512-2048x1365.jpg"
              alt="profile"
            />
            <em>Ram samuel, RNSIT, India</em>
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">
              I have got one of the biggest oppourtunity to work with the best
              minds through this website.
            </h2>
            <img
              className="testimonial-image"
              src="https://wallpapercave.com/wp/wp2460367.jpg"
              alt="profile"
            />
            <em>Tom abhiram, RNSIT, India</em>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;