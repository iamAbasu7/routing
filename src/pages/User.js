import React,{useState}from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export const User = () => {
    const {userid} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    //http://localhost:3000/user?id=670&age=45&name=antar
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const handelName = (e) => {
        setName(e.target.value)
    }
    const handelAge = (e) =>{
        setAge(e.target.value);
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        setSearchParams({name: name, age:age});

    }
    return (
        <div>
            User Component <br />

            <form onSubmit={handelSubmit}>
                <input type="text" value={name} onChange={handelName}/>
                <input type="text" value={age} onChange={handelAge}/>
                <button type="submit">Find User</button>
            </form>
            
            

            {/* <h2>{searchParams.get("id")}</h2>
            <h2>{searchParams.get("age")}</h2>
            <h2>{searchParams.get("name")}</h2> */}
            {userid}
        </div>
    )
}
