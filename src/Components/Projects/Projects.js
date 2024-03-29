import React,{ useState, useEffect } from "react";
import './Projects.css';
import TalentPace from '../../Assets/TP_img_old.png';
import DPTFontPage from '../../Assets/Dashboard.png';
import Batches from '../../Assets/Batches.png';
import RouteCard from '../../Assets/RouteCard.png';
import PPC from '../../Assets/PPC.png'
import DeviceMapping from '../../Assets/DeviceMapping.png'
import VisitorPass from '../../Assets/VisitorPass.png'

import DigiDash from '../../Assets/DigitabBookDash.png'
import DigiMenu from '../../Assets/DigiMenu.png'
import DigiPage from '../../Assets/DigiPage.png'

const Projects = () => {

    const projectImages = [DPTFontPage, Batches, RouteCard];
    const peoplecount = [PPC, DeviceMapping, VisitorPass];
    const DigitabBook = [DigiDash, DigiMenu, DigiPage];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [PPCImageIndex, CurrentImageIndex] = useState(0);
    const [DigiImageIndex, ImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            CurrentImageIndex((prevIndex) => (prevIndex + 1) % peoplecount.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            ImageIndex((prevIndex) => (prevIndex + 1) % DigitabBook.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="Projects">
            <span className="ExperienceTitle">Experience</span>
            <div className="ExperiecnceContainer">
                <div className="ExpirenceBar">
                    <img src={TalentPace} alt="TalentPace" className="TPLogo" />
                    <div className="ExperienceDesc">
                        <h2>Full stack Web Developer</h2>
                        <p>
                            Developed and maintained scalable web applications using .NET Core, ASP.NET MVC, and Web API, ensuring high performance and responsiveness.
                            Collaborated with UX/UI designers to implement responsive and user-friendly front-end interfaces, utilizing modern JavaScript frameworks such as React.
                        </p>
                    </div>
                </div>
            </div>
            <span className="ExperienceTitle">Projects</span>
            <div className="ProjectContainer">
                <div className="ProjectCards">
                      <div className="ProjectPic DPT">
                          <img className="projimg" src={projectImages[currentImageIndex]} alt={`Project ${currentImageIndex + 1}`} />
                      </div>
                      <div className="ProjectDesc">
                            <h3>DPT Automation</h3>
                            <p>Web application can access and modify the route card, data filling and route card generation based on QR scanning through mobile application</p>
                      </div>
                </div>
                <div className="ProjectCards">
                      <div className="ProjectPic PeopleCount">
                          <img className="projimg" src={peoplecount[PPCImageIndex]} alt={`Project ${PPCImageIndex + 1}`} />
                      </div>
                      <div className="ProjectDesc">
                            <h3>Automated Access Control</h3>
                            <p>A biomatric-based people counting technique that indicates the number of employees in each department and area</p>
                      </div>
                </div>
                <div className="ProjectCards">
                      <div className="ProjectPic DigitalBook">
                          <img className="projimg" src={DigitabBook[DigiImageIndex]} alt={`Project ${DigiImageIndex + 1}`} />
                      </div>
                      <div className="ProjectDesc">
                            <h3>Digital Book</h3>
                            <p>Enabling Paperless office through records digitization of entire operations like shift planning, attendance management, Cylinder Inspection, QC reports etc.</p>
                      </div>
                </div>
            </div>
        </section>
        
    )
}



export default Projects;