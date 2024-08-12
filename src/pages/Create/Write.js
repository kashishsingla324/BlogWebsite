
import React,{useState} from "react";
import {blogList} from '../../config/data'
import { Link } from 'react-router-dom';

import './write.css'

export default function Write() {
  const objectLength = blogList.length;
 const[note,setNote]=useState({
     cover:'./assets/images/fashion3.jpg',
     id:objectLength+1,
     title: "",
     description:"",
     authorName:"",
     category:"",
     subCategory:[],
     createdAt:'',
     authorAvatar:'./assets/images/anita.jpg'
 });

 


 const InputEvent = (event) => {

  const {name,value}=event.target;
  setNote((prevData,index) =>{
    return {
      ...prevData,
      [name] :value,
      
    };
  });
  console.log(note);
 };




 const addEvent = () =>{
      //  props.passNote(note);
    //   console.log(data);
      // console.log(note.img);
      blogList.push(note);
      setNote({
        cover:'',
        title: "",
        description:"",
        authorName:"",
        category:"",
        subCategory:[],
        createdAt:'',
        authorAvatar:'',
    })

    //   console.log(data);
} 

  



  
  return (
    <div className="write">
       <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
     <div className="write2">
     <img src='./assets/blog-write1.jpg'/>
     </div>
      <div className="write3">
      <form className="writeForm" onSubmit={(e)=>e.preventDefault()}>
      
      <div className="writeInput">
            <label for="titleofblog">Title - </label>
            <input
              className="input"
              id="titleofblog"
              type="text"
              name="title"
              value={note.title}
              autoFocus={true}
              onChange={InputEvent}
            />
        </div>
        <div className="image">
          <label htmlFor="fileInput" id="image">
            Insert Image
          </label>
          <input  className="input" id="fileInput" 
          name="cover" type="file" onChange={InputEvent} />
           </div>
        <div >
        <textarea
            className="writeTextArea"
            placeholder="Tell your story..."
            type="text"
            name="description"
            value={note.description}
            autoFocus={true}
            onChange={InputEvent}
          />
        </div>
        <div className="authorName">
            <label for="author">Published By</label>
            <input
             id="author"
             type="text"
             name="authorName"
            value={note.authorName}
            autoFocus={true}
            onChange={InputEvent}
          />
         </div>

         <div className="createdAt">
            <label for="dateofpublishing" id="date">Publishing Date</label>
            <input
            id="dateofpublishing"
            type="date"
            name="createdAt"
            value={note.createdAt}
            autoFocus={true}
            onChange={InputEvent}
          />
            </div>

            <div className="cat">
            <label for="category">Select Category</label>
             <select name="category" id="category" 
            value={note.category}
            autoFocus={true}
            onChange={InputEvent}>
            <option>LifeStyle</option>
            <option>Music</option>
            <option>Sports</option>
            <option>Fashion</option>
            <option>Tech</option>
            <option>Cinema</option>
        </select>
            </div>

            <div className="writeSubmit">
           <button  onClick={addEvent} >
                <Link style={{color:'white'}}to='/'>
               Publish
               </Link>
         </button>
          </div>
      
       
        
        
        
      </form>
      </div>
    </div>
  );
}