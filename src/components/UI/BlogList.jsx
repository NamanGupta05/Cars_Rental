import React from 'react'
import { Col } from 'reactstrap'
import '../../style/blog-list.css' 
import { Link } from 'react-router-dom'
import blogData from '../../assests/data/blogData'
const BlogList = () => {
  return (
   <>
    {
      blogData.map((item)=>(
        <BlogItem key={item.id} item={item}/>
      ))
    }
   </>
  )
}

const BlogItem = ({item})=>{
  const {imgUrl,title,author,date,description,time} = item;
  return <Col lh='4' md='4' sm='6' className='mb-5'>
    <div className="blog_item">
      <img src={imgUrl} alt="" className='w-100'/>
      <div className="blog_info mt-2">
        <Link to={`/blog-details/${title}`} className='title_bar'>{title}</Link>
      <p className="section_description mt-3">
        {description.length > 120? description.substr(0,100) : description}
      </p>

      <Link to={`/blog-details/${title}`} className='read_more'>Read More</Link>
      <div className="blog_time pt-3 mt-3 d-flex align-items-center justify-content-between">
        <span className="blog_author">
          <i class='ri-user-line'></i> {author}
        </span>

        <div className="d-flex align-items-center gap-3">
          <span className="d-flex align-items-center gap-1 section_description">
          <i class='ri-calendar-line'></i> {date}
          </span>

          <span className="d-flex align-items-center gap-1 section_description">
          <i class='ri-time-line'></i> {time}
          </span>
        </div>
      </div>
      </div>
    </div>
  </Col>
}
export default BlogList