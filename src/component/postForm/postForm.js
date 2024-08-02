'use client'
import { useState } from 'react';
import formStyles from './formStyle.js';
import axios from 'axios';
import { useRouter } from 'next/navigation.js';
export default function PostForm() {
    const router=useRouter();
    const [title,setTitle]=useState("")
    const [summary,setSummary]=useState("")
    const [content,setContent]=useState("")
    const [message,setMessage]=useState("")
    const [error,setError]=useState(false);
    const createPostHander = async (event) => {
        event.preventDefault();
        if(title === '' || summary === '' || content === ''){
            setError(true);
            setTimeout(()=>{
                setError(false);
            },5000)
        }else{
            axios.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify({title:title,summary:summary,content:content}))
            .then(res=>{
                router.push('/')
            })
            .catch(err=>{
                setMessage(err.message.toString());
                setError(true);
                setTimeout(()=>{
                    setError(false);
                },7000)
            })
        }
    }
    return (
        <section>
            <form onSubmit={createPostHander} className="container">
                <label htmlFor="title">title</label>
                <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" id='title'/>
                <label htmlFor="summary">summary</label>
                <input onChange={(e)=>setSummary(e.target.value)} value={summary} type="text" id='summary'/>
                <label htmlFor="content">content</label>
                <textarea onChange={(e)=>setContent(e.target.value)} value={content} name="content" id="content" rows="10"/>
                {
                    error && <span className='error'>please fill all fields</span>
                }
                {
                    (error && (message !== '')) && <span className='error'>{message}</span>
                }
                <button type='submit'>save</button>
            </form>
            <style jsx form>
                {formStyles}
            </style>
        </section>
    );
}