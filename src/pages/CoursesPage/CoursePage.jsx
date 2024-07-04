import React, { useState } from "react";
import "./CoursePage.css";
import Header from "../../components/Header/Header";
import searchIcon from "../../assets/icons/search.png";
import CourseCard from "../../components/CourseCard/CourseCard";
import computer from "../../assets/computer.jpg";

const CoursePage = () => {
  const [selectedTab, setSelectedTab] = useState("cs");

  function handleClick(tab) {
    return () => {
      setSelectedTab(tab);
    };
  }
  console.log(selectedTab);
  return (
    <div className="coursePage">
      <Header />
      <div className="courseFilter">
        <div className="tabs">
          <div className="tab" onClick={handleClick("cs")}>
            Computer Science
          </div>
          <div className="tab" onClick={handleClick("ac")}>
            Accounting
          </div>
          <div className="tab" onClick={handleClick("mk")}>
            Marketing
          </div>
          <div className="tab" onClick={handleClick("mn")}>
            Managment
          </div>
        </div>
        <div className="search">
          <input type="text" name="" />
          <img src={searchIcon} alt="" />
        </div>
      </div>
      {selectedTab === "cs" ? (
        <div className="courseCards">
          <CourseCard
            title="Introcuction to computer science"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eaque? Reprehenderit ipsum id pariatur obcaecati quo culpa repellendus, provident iure excepturi dolorem, ut rerum tenetur qui explicabo placeat ad molestias."
            img={computer}
          />
          <CourseCard
            title="Introcuction to Database programming"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eaque? Reprehenderit ipsum id pariatur obcaecati quo culpa repellendus, provident iure excepturi dolorem, ut rerum tenetur qui explicabo placeat ad molestias."
            img={computer}
          />
          <CourseCard
            title="Algorithm analysis"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eaque? Reprehenderit ipsum id pariatur obcaecati quo culpa repellendus, provident iure excepturi dolorem, ut rerum tenetur qui explicabo placeat ad molestias."
            img={computer}
          />
        </div>
      ) : selectedTab === "mk" ? (
        <div className="courseCards">
          <CourseCard
            title="Introduction to Marketing"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eaque? Reprehenderit ipsum id pariatur obcaecati quo culpa repellendus, provident iure excepturi dolorem, ut rerum tenetur qui explicabo placeat ad molestias."
            img={computer}
          />
        </div>
      ) : selectedTab === "ac" ? (
        <div className="courseCards">
          <CourseCard
            title="Introduciion to Accounting"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eaque? Reprehenderit ipsum id pariatur obcaecati quo culpa repellendus, provident iure excepturi dolorem, ut rerum tenetur qui explicabo placeat ad molestias."
            img={computer}
          />
        </div>
      ) : selectedTab === "mn" ? (
        <div className="courseCards">
          <CourseCard
            title="Introduction to marketing"
            description="cs description"
            img={computer}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CoursePage;
