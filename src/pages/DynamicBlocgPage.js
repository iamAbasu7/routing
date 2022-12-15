import React,{useState,useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { blogsData } from '../data'


export const DynamicBlocgPage = () => {
    const {title} = useParams();
    const location = useLocation();
    console.log(location)
    // const [bodyData,setBodyData] = useState("");
    // useEffect(() => {
    //    const blogData = blogsData.filter((blog)=> blog.title === title);
    //    setBodyData(blogData[0].body)
    // }, []);
    return (
        <div>
            <h1>{title}</h1>
            <p>{location.state.body}</p>
            {/* <p>{bodyData}</p> */}

            {/* <p>{bodyData.slice(0,30)}</p> */}
            
        </div>
    )
}
