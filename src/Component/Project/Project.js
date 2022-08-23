import React from 'react'
import './Project.css'
import Twitter from './twitter.png'
import Facebook from './facebook.png'
import Insta from './instagram.png'
import Youtube from './youtube.png'
const Project = () => {
  return (
    <div className="project">
        <div className="projectBarr"></div>
        <div className="project-icons">
        <img src={Twitter} className="project-icon-bar"/>
        <img src={Facebook} className="project-icon-bar ml-4"/>
        <img src={Insta} className="project-icon-bar ml-4"/>
        <img src={Youtube} className="project-icon-bar ml-4"/>
        </div>
        <div className="project-title">Have any project in mind?</div>
        <button className='project-button'>MAKE INQUIRY</button>
    </div>
  )
}

export default Project