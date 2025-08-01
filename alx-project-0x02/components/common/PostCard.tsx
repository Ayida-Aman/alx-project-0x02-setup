import React from 'react'
import { PostProps } from '@/interfaces'
function PostCard({title, content, userId} : PostProps) {
  return (
    <>
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>UserId: {userId}</p>
        </div>
    </>
  )
}

export default PostCard