import React from "react";
import './Experience.css';

const Experience = () => {
    return(
        <section id="Experience">
            <span className="ExperienceTitle">Education</span>

            <div className="timeline">
                <div className="container left-container">
                <i class="fa-solid fa-graduation-cap"></i>
                   <div className="text-box">
                        <h2>Bachelor of Engineering</h2>
                        <small>2019-2023</small>
                        <p>I completed my Engineering degree from Sapthagiry College of Engineering with a cgpa of 8.9, specializing in electronics and communication.</p>
                        <span className="left-container-arrow"></span>
                   </div>
                </div>
                <div className="container right-container">
                <i class="fa-solid fa-user-graduate"></i>
                   <div className="text-box">
                        <h2>Intermediate</h2>
                        <small>2017-2019</small>
                        <p>I did my Intermediate From D.A.V Public school, I obtained 61 percent when I finished my intermediate in science.</p>
                        <span className="right-container-arrow"></span>
                   </div>
                </div>
                <div className="container left-container">
                <i class="fa-solid fa-book"></i>
                   <div className="text-box">
                        <h2>Metriculation</h2>
                        <small>2016</small>
                        <p>I completed my Metriculation from Paramount Academy, I obtained 91 percent when I finished my Metriculation.</p>
                        <span className="left-container-arrow"></span>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;