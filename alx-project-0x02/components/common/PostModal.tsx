import React, { useState } from 'react'
import { PostModalProps } from '@/interfaces'
function PostModal({onClose, onSubmit}: PostModalProps) {
    const [title, setTitle]= useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({title, content})
        setTitle('')
        setContent('')
        onClose()
    }
  return (
    <>
        <div>
            <h1>Add post form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='Title' 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea
                 placeholder='content'
                 value={content}
                 onChange={(e)=>setContent(e.target.value)}
                />
                <div>
                    <button type='button' onClick={onClose}>Close</button>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default PostModal