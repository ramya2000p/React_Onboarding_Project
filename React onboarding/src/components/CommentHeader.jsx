import React from 'react'

function CommentHeader({title, length}) {
  return (
    <div>
      <h2 className='text-popup font-semibold text-2xl pb-5'>{title}  ({length})</h2>
    </div>
  )
}

export default CommentHeader