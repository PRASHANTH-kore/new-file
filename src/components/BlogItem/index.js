import './index.css'
import React from 'react'

const BlogItem =props=>{
    const {details}=props
    const{title,userId,id}=details
    
    return(
        <>
        <div className="bg-container">
            <div className="sm-container">
                <h3>{title}</h3>
                <p>id:{id}</p>
                <p>User Id:{userId}</p>
            </div>
            
        </div>
        </>
    )
}
export default BlogItem