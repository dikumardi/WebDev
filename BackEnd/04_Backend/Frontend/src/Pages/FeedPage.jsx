import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FeedPage = () => {
    const [posts, setPosts] = useState([{
        _id:"1",
        image:"https://ik.imagekit.io/ndf85zqwe/image_T_m9tOQKN.jpg",
        caption:"Code_caption"
    }])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
           setPosts(res.data.posts)
        })
    },[])
    
  return (
    <section className='feed-section'>
    
    {
        posts.length > 0 ? (

            posts.map((post) => (
                 <div key={post._id} className='post-card'>
                <img src={post.image} alt="" />
                <h3>{post.caption}</h3>
                </div>
            ))


        ): (<h1>No Posts available</h1>)
        
    }
    
    </section>
  )
}

export default FeedPage 