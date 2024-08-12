// import React from 'react';
import './styles.css';





// 

import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade,Zoom,Slide} from 'react-slideshow-image'
import { Link } from "react-router-dom";

const slideImages = [
  {
    url:'./assets/images/lifestylepic1.jpeg',
    title:'ORGANIC THERAPY',
    category:'Lifestyle',
    button:'Read More'
    
  },
  {
    url:'./assets/images/musicpic.png',
    title:'HEALING COMPANION',
    category:'Music',
    button:'Read More'
    
  },
  {
    url:'./assets/images/sportspic.jpg',
    title:'THE GAME CHANGERS',
    category:'Sports',
    button:'Read More'
  },
   {
    url:'./assets/images/fashion3.jpg',
    title:'THE FASHION FRENZY',
    category:'Fashion',
    button:'Read More'
  },
  {
    url:'./assets/images/techpic1.jpg',
    title:'NEW LAUNCHES',
    category:'Tech',
    button:'Read More'
  },
  {
    url:'./assets/images/cinemapic2.jpg',
    title:'AVATAR-2 RELEASED',
    category:'Cinema',
    button:'Read More'
  }
];

const divStyle = {
  display:'flex',
  alignItems : 'center',
  justifyContent:"center",
  height:"600px",
  backgroundSize:'Cover',
  borderRadius:"20px",
  marginBottom:"50px"
}

const spanStyle = {
 backgroundColor:"#ffffff",
 height:"30%",
 width:"30%",
 opacity:'0.7',
 textAlign:'center',
 justifyContent:'center',
 alignItems:'center',
 display:'flex',
 borderRadius:'5px'
}

const h1style = {
  color:"#01020b",
  fontFamily: 'Varela',
  textAlign:'center',
  fontSize:'35px'
}

const h3style = {
  textAlign:'center',
  color:"#01020b",
  fontSize:'20px',
  fontFamily:"cursive",
}


const linkstyle ={
  textAlign:'center',
  backgroundColor:"#01020b",
  color:"white"
}

const linksty={
  textAlign:'center'
}

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  // indicators: true,
  arrows: true
}


const Header = () => (
  <header className='home-header'>
    
    <div className="slide-container">
   
      <Fade  {...properties}>
        {slideImages.map((image,index)=>(
          <div key={index}>
              <div style={{...divStyle,backgroundImage:`url(${image.url})`}}>
                   <div style={spanStyle}>
                    <div >
                    <h1 style={h1style}>{image.title}</h1>
                    <h3 style={h3style}>{image.category}</h3>
                    <h1 style={linksty}><Link className="blogItem-link" style={linkstyle} to={`/blog/${index+1}`}>
          Read More
        </Link></h1>
                    </div>
                   </div>
              </div>
          </div>
        ))}
      </Fade>
    </div>
    
    
  </header>
);

export default Header;

