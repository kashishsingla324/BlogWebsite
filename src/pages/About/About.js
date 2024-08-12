import React from 'react'
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub,faFacebook } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
   <>
   <div className='main-div'> 
     <div className='about-wrap2'>
       <h1> LifeStyle Blender </h1>
       <img src='./assets/images/lifestyle blender.png'></img>
     </div>
     <div className='about-wrap'> 
        <p className='blog-desc '>
            LifeStyle Blender is a Blog Website which compromises of different categories blogs 
            like Fashion, Lifestyle , cricket, technology etc. This website is made by 
            Kashish Singla and Kamaljeet Kaur 3rd year Student of Chitkara University.
            This Website is made up using Basics of React js. 
            <ul>
                <h1>Functions-</h1>
                <li>
                    <b>Rendering Different Pages - </b>
                    You can go to any pages of Your choice or we can say we can route to different pages using navbar.
                    Navbar helps to you to redirect you to your fav page within a sec.
                </li>
                <li>
                    <b>Read Blog of Your Choice - </b>
                    Using our Website you can Read any Blog of Your Choice. It compromises of Blog 
                    Based on Fashion, Lifestyle, Cricket, Cinema, Technology and music.
                </li>
                <li>
                    <b>
                        Publish The Blog of Your Own - </b>
                    By navigating on write Button You can write Your own blog . 
                    You can write any blog of your choice and publish here.
                </li>
                <li>
                    <b> Provides Search Functionality - </b>
                    By using serach functionality you can serach different blogs on the basis of categories.
                    all you have to do is just type the category name and click on go button and it will provide
                    you the list of respective category blogs.
                </li>
            </ul>
            <ul>
                <h1>Goals-</h1>
                <li>
                    <b>Enhance user Experience - </b>
                    The primary goal of this project is to improve 
                    the overall user experience by creating an intuitive,
                    visual appealing and effective blog website
                </li>
                <li>
                    <b>Implement Dynamic Rendering - </b>
                    Implement Dynamic Rendering techniques for Blog cards and pages
                    to engage users and showcase Blog more Effectively.
                </li>
                <li>
                    <b>Integrate Search Blog Functionality - </b>
                    Integrate Search Blog Functionality hich can help users to search 
                    the blog on the basis of different categories.
                </li>
            </ul>
        </p>
     </div>
     <div className='about-wrap'>
        <h1 className='h1'>
            Contact Us
        </h1>
        <div className='links'>
        
        <a href="https://twitter.com/sparklingkash1"><FontAwesomeIcon icon={faTwitter}  style={{color: "rgb(9, 9, 20);",fontSize:"45px"}} size='2xl' /></a>
        <a href="https://www.instagram.com/kashishsingla_/"><FontAwesomeIcon icon={faInstagram}  style={{color: "rgb(9, 9, 20);",fontSize:"45px"}} size='2xl' /></a>
        <a href="mailto:kashishsingla324@gmail.com">
        <FontAwesomeIcon icon={faEnvelope}  style={{color: "rgb(9, 9, 20);",fontSize:"45px"}} size='2xl' />
        </a>
        <a href="tel:6283314296">
        <FontAwesomeIcon icon={faPhone}  style={{color: "rgb(9, 9, 20);",fontSize:"45px"}} size='2xl' />
        </a>
       <a>
       <FontAwesomeIcon icon={faGithub}  style={{color: "rgb(9, 9, 20);",fontSize:"45px"}} size='2xl' />
       </a>
        <a>
        <FontAwesomeIcon icon={faFacebook}  style={{color: "rgb(9, 9, 20);",fontSize:"45px"}} size='2xl' /> 
        </a>
        
        </div>

     </div>
   </div>
   </>

  )
}

export default About;