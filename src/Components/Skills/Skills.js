import React from "react";
import './Skills.css'
import JavaScript from '../../Assets/JavaScript.png'
import HtmlCss from '../../Assets/HtmlCss.png'
import JQuery from '../../Assets/jquery.png'
import dotnet from '../../Assets/dotnet.png'
import sql from '../../Assets/sql.jpg'
import react from '../../Assets/react.png'
import csarp from '../../Assets/csarp.png'
import webapi from '../../Assets/webapi.png'

const Skills = () => {
    return (
         <section id="Skills">
            <span className="SkillTitle">What I do</span>
            <span className="SkillPara">
               "Hello there! I'm Shivam Jaiswal, a passionate and seasoned full-stack web developer 
                with a flair for turning ideas into digital experiences. I've honed my skills in both front-end 
                and back-end technologies. On the front end, I specialize in creating sleek and intuitive 
                user interfaces that not only captivate users but also enhance their overall experience. 
                I have a keen eye for design principles and a commitment to ensuring that every pixel is in its perfect place.
                Delving into the back end, I thrive on the challenges of architecting robust and scalable solutions. 
                Whether it's crafting efficient databases, optimizing server performance, or seamlessly integrating APIs, 
                I relish the complexities that come with building the backbone of web applications.
            </span>
            <span className="SkillTitle">My Skills</span>
            <div className="SkillContainer">
                <div className="SkillBox dotnet-box">
                    <div className="img-container">
                       <img src={dotnet} alt="dotnet" id="dotnet"/>
                    </div>
                    <span><b>Dot Net Core</b></span>
                </div>
                <div className="SkillBox js-box">
                    <div className="img-container">
                       <img src={JavaScript} alt="dotnet" id="JavaScript"/>
                    </div>
                    <span><b>Java Script</b></span>
                </div>
                <div className="SkillBox Html-box">
                    <div className="img-container">
                       <img src={HtmlCss} alt="dotnet" id="HtmlCss"/>
                    </div>
                    <span><b>Html & Css</b></span>
                </div>
                <div className="SkillBox JQuery-box">
                    <div className="img-container">
                       <img src={JQuery} alt="dotnet" id="JQuery"/>
                    </div>
                    <span><b>JQuery</b></span>
                </div>
            </div>

            <div className="SkillContainer">
                <div className="SkillBox sql-box">
                    <div className="img-container">
                       <img src={sql} alt="dotnet" id="sql"/>
                    </div>
                    <span><b>SQl</b></span>
                </div>
                <div className="SkillBox csarp-box">
                    <div className="img-container">
                       <img src={csarp} alt="dotnet" id="csarp"/>
                    </div>
                    <span><b>C#</b></span>
                </div>
                <div className="SkillBox react-box">
                    <div className="img-container">
                       <img src={react} alt="dotnet" id="react"/>
                    </div>
                    <span><b>React</b></span>
                </div>
                <div className="SkillBox webapi-box">
                    <div className="img-container">
                       <img src={webapi} alt="dotnet" id="webapi"/>
                    </div>
                    <span><b>Web Api</b></span>
                </div>
            </div>
         </section>
    );
}

export default Skills