import React,{useState} from 'react'
import { Link, } from 'react-router-dom';
import {style} from "../App.css"

import { blogsData } from '../data'
export const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);
    const truncateString = (str,num) =>{
        if(str.length > num){
            return str.slice(0,num) + "..."
        }else{
            return str
        }
    }
    console.log(blogs) 
    return (
        <div>
            <h1>Blogs</h1>
            <section>
                {blogs.map((blog)=>{
                    const {id,title,body} = blog
                    return(
                        <article key={id}>
                            <h3>{title}</h3>
                            <p>{truncateString(body,30)}</p>
                            <Link to={title} state={{id,title,body}}>Learn More</Link>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}
