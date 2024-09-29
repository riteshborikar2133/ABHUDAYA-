import React from "react";
import Navbar from "../../Components/Navbar";
import "./Home.css"
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="left-content">
          <h2>
            Free <span>scholarship</span> for every bright student
          </h2>
          <p>
            Get free scholarships for every level of education that every
            student who achievement for a bright future you can get it from
            school.
          </p>
          <form className="email-form">
            <input type="email" placeholder="Enter email address" required />
            <button type="submit">Submission</button>
          </form>
        </div>
        <div className="right-content">
          <img src="/images/girl.png" alt="Graduated Student" width={300}/>
          {/* <div className="student-help">
            <p>
              <strong>5000+</strong> Student Help
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
}
