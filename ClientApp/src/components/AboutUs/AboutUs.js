import React from 'react';
import "./AboutUs.css";

const AboutUs = () => {
    return(
        <div className='aboutUs-container'>
            <div className='aboutUs-header'>
                <h1 style={{"marginBottom":"0px"}}>About Us</h1>
                <div className='header-underline'></div>
            </div>
            <div className='aboutUs-page-body'>
                The <strong>Topeka Chess Club</strong> is a city-wide chess club that seeks
                to offer oppurtunites in chess to kids all around Topeka.
                <span className='br-big' />
                The chess club abides by 3 distinct pillars:
                <ul>
                    <li> Placeholder </li>
                    <li> Placeholder </li>
                    <li> Placeholder </li>
                </ul>
                <span className='br-big' />
                The club was founded by 3 highschoolers at WRHS in 2023 and has grown rapidly.
                We hope to inspire kids around Topeka to play chess and think critically.
                The TCC was created 
            </div>
        </div>
    )
};

export default AboutUs;
