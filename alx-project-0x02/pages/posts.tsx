import PostCard from '@/components/common/PostCard'
import Header from '@/components/layout/Header'
import { PostProps } from '@/interfaces'
import React, { useEffect, useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState<PostProps[]>([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((res)=>res.json())
        .then((data)=>{
            const formattedPosts = data.map((post:any)=>({
                title: post.title,
                content: post.body,
                userId: post.userId,
            }))
            setPosts(formattedPosts)
        })
    }, [])
  return (
    <div>
        <Header/>
        <h1>Posts</h1>
        {posts.map((post, index)=>(
            <PostCard
                key={index}
                title={post.title}
                content = {post.content}
                userId={post.userId}
            />
        ))}
    </div>
  )
}

export default Posts