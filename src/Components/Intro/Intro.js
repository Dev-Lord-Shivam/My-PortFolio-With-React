import React from "react";
import './Intro.css'
import ProfilePic from '../../Assets/MeBW.png'
import { Link } from "react-scroll";
const Intro = () => {

    const downloadResume = async () => {
        try {
          // Path to the existing PDF file in the assets folder
          const pdfFilePath = require('../../Assets/Shivam_Jaiswal.pdf');
          
          // Fetch the file as a Blob
          const response = await fetch(pdfFilePath);
          const blob = await response.blob();
    
          // Create a temporary URL for the Blob
          const url = URL.createObjectURL(blob);
    
          // Create a link element and click it to trigger the download
          const a = document.createElement('a');
          a.href = url;
          a.download = 'your_existing_resume.pdf'; // Set the desired filename
          document.body.appendChild(a);
          a.click();
    
          // Clean up by removing the temporary link and URL
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error downloading resume:', error);
        }
      };

    return (
        <section id="Intro">
            <div className="IntroContent">
                <span className="hello">Hello,</span>
                <span className="IntroText">I'm<span className="IntroName"> Shivam</span> <br />Web Developer
                    <p className="IntroPara">I am a skilled Web Developer with experience in creative<br />visually appealing
                        and user friendly website</p>
                </span>
                <div className="BtnDiv">
                    <Link><button className="btn" onClick={() => {
                        document.getElementById('ContactMe').scrollIntoView({ behavior: 'smooth' })
                    }}><i class="fa-solid fa-briefcase"></i>Hire Me</button></Link>
                    <Link><button className="btn"><i class="fa-solid fa-print" onClick={downloadResume}></i>Download Resume</button></Link>
                </div>
            </div>
            <img src={ProfilePic} alt="Profile_Pic" className="Profile_Pic" />
        </section>
    )
}

export default Intro;