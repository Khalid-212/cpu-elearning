import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";
import heroImage from "../../assets/reading.png";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="mainLeft">
          <h1 className="heading">
            <span className="textBlue">CPU </span>
            Business and
            <br />
            <span className="textBlueBg">Information</span>
            <span className="textBlue">Technology College</span>
          </h1>
          <a href="./courses/courses.php">
            <div className="buttonHero">
              <button>Explore Courses</button>
            </div>
          </a>
        </div>
        <div className="mainRight">
          <img src={heroImage} alt="Reading" />
        </div>
      </main>
      <section className="section1">
        <div className="sectionTitle">
          <h2>
            Why You Should <br />
            Choose Us
          </h2>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium ad nostrum esse
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="cardNumber">01</div>
            <div className="cardTitle">Best Teachers</div>
            <div className="cardDescription">
              At our institution, we take pride in offering a roster of
              top-notch teachers, who are recognized for their excellence in
              teaching.
            </div>
          </div>

          <div className="card">
            <div className="cardNumber">02</div>
            <div className="cardTitle">Best Curriculum</div>
            <div className="cardDescription">
              We take pride in offering the best curriculum, carefully crafted
              to empower students.
            </div>
          </div>

          <div className="card">
            <div className="cardNumber">03</div>
            <div className="cardTitle">Certificate</div>
            <div className="cardDescription">
              We have acquired the necessary knowledge, skills, and competence
              in a specific field of study.
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <h2>
          Discover a variety of <br />
          Courses here
        </h2>
        <div className="courseCards">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div className="courseCard" key={index}>
                <div className="courseCardImage">
                  <img src="./assets/computer.jpg" alt="Course" />
                </div>
                <div className="courseCardBottom">
                  <div className="courseCardTitle">course title</div>
                  <div className="courseCardDescription">
                    We take pride in offering the best curriculum, carefully
                    crafted to empower students.
                  </div>
                  <div className="courseCardAuthor">
                    <span>Mr. John Doe</span>
                    <span>2000ETB</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <footer>
        <div className="info">phone: +251987654321</div>
        <div className="socials">
          <img
            className="icon"
            src="../assets/icons/facebook.png"
            alt="Facebook"
          />
          <img
            className="icon"
            src="../assets/icons/twitter.png"
            alt="Twitter"
          />
          <img
            className="icon"
            src="../assets/icons/youtube.png"
            alt="YouTube"
          />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
