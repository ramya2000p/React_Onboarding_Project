import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Post({post}) {
  const navigate = useNavigate()

  return (
        <Link to={'/'+ post.id}>
            <div className='bg-white p-2 m-5 cursor-pointer rounded-lg' onClick={navigate('/'+ post.id)}>
            <h3 className='font-bold'>{post.title}</h3>
            <p className='font-light pb-5'>{post.body}</p>
            <a className='text-popup block pb-3' href='/'>Read more</a>
        </div>
        </Link>  
  )
}

export default Post