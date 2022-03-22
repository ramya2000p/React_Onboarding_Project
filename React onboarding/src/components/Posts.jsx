import React from 'react'
import Post from './Post'

function Posts({posts}) {
    
  return (
    <div className='px-20'>
      <div className='grid lg:grid-cols-3 drop-shadow-lg'>
        {posts.map((item, index) =>
          <Post key={index}
            post = {item}
          />
        )}
      </div>
    </div>
  )
}

export default Posts