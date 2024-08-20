import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [formData,setFormData] = useState({name:"",email:"",password:""});
    const navi = useNavigate();
    function handleChange (e) {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
        console.log(formData);
    }
    async function handlesubmit(e){
        e.preventDefault();
        await axios.post('http://localhost:4000/api/v1/auth/signup',formData)
        .then((res)=>{
            console.log(res.data);
            window.localStorage.setItem('user',JSON.stringify(res.data))
            navi('/')
        })
        .catch((error)=>{
            console.log(error);

        });
    }

    return (
        <form onSubmit={handlesubmit}>
            <h1>Sign up</h1>
            <h3>Create new user</h3>
            <input type="text" name="name" id="" onChange={handleChange} placeholder="Name"/>
            <input type="email" name="email" id="" onChange={handleChange} placeholder="email" />
            <input type="text" name="password" id="" onChange={handleChange} placeholder="passwd"/>
            <input type="submit"/>
        </form>
    );
}
