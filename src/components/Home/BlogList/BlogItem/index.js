import { Link } from "react-router-dom";
import "./styles.css";
import Chip from '../../../common/Chip'

const BlogItem = ({ blog:
  {id,description,title,createdAt,authorName,authorAvatar,category,cover} }) => {
  return (
    
    <div className="blogItem-wrap"> 

      <div className="imgbox front">
      <img  src={cover} alt="cover" className="blogItem-cover"/>
      </div>
      <div className="imgbox content">
      <Chip label={category}/>
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div className="wrap">
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          Read More
        </Link>
      </footer>
      </div>
    </div>
  )
}

export default BlogItem;