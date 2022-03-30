import './index.css'
import React from 'react'

const BlogItem =props=>{
    const {details}=props
    const{title,userId,}=details
    
    return(
        <>
        <div className="bg-container">
            <div className="sm-container">
                <p>{title}</p>
                <p>{userId}</p>
            </div>
            
        </div>
        </>
    )
}
export default BlogItem