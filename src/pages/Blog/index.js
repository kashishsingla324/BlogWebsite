import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';


const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <>
       
        <div className='blog-wrap'>
          <header>
          
            <h1 className='blog-h1'>{blog.title}</h1>
            
          </header>
          <div className='blogcover'>
          <img src={blog.cover} alt='cover' />
          </div>
          <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i} className='chips'>
                  <Chip label={category} />
                </div>
              ))}
            </div>
         
          
        </div>
        <div className='blog-wrap2'>
        <div className='blog-div'>
        <p className='blog-desc'>{blog.description}</p>
        </div>
        </div>
        <div className='blog-footer'>
          <div>
          <p  className='footerp'>Author - {blog.authorName}</p>
          <p className='blog-date'>Published Date - {blog.createdAt}</p>
          
          </div>
          <div className='footerimg'>
            <img src={blog.authorAvatar}/>
          </div>
          </div>
        </>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;