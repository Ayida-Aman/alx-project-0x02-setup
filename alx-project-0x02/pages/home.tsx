import Card from '@/components/common/Card'
import React, { useState } from 'react'
import { CardProps } from '@/interfaces'
import PostModal from '@/components/common/PostModal'
function Home() {
    const [showModal, setShowModal] = useState(false)
    const [posts, setPosts] = useState([
    { title: 'Qonjit', content: 'yehone qen yegebash yehonal ahun baygebashm zem belsh beka code argi engdi gobez' },
  ])
    const handleAddPost = (newPost: CardProps) => {
        setPosts((prev)=>[...prev, newPost])
    }
  return (
    <>
        <button onClick={()=>setShowModal(true)}>Add Post</button>
        {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
      {showModal && (
        <PostModal onClose={() => setShowModal(false)} onSubmit={handleAddPost} />
      )}


    </>
  )
}

export default Home