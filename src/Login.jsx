
import { useEffect, useState } from "react";
import "./LoginStyle.css";
import axios from "axios";
import { json } from "react-router-dom";
const Login = () => {

    const [getData, setGetData] = useState(
        {
            userName: '',
            email: '',
            password: ''
        }
    )
    useEffect(() => {

    }, [])

    const handleChange = (e) => {

        console.log(e.target.name, e.target.value, "*****");
        setGetData((getData) => {
            return {
                ...getData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        console.log("getData", getData);
        let config = {
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(getData)
        };
        await axios.get('http://localhost:5000/login/login').then((res) => {
            console.log("ressss", res);
        }).catch((err) => {
            console.log("**",err);
        })
    }
    return (
        <>
            <center> <h1> Student Login Form </h1></center>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className="userName">
                        <label>Username : </label>
                        <input type="text" placeholder="Enter Username" name="userName" onChange={handleChange} style={{ padding: '10px' }} required />
                    </div>
                    <div className="userName">
                        <label>Gmail : </label>
                        <input type="email" placeholder="Enter Username" name="email" onChange={handleChange} style={{ padding: '10px', marginLeft: '29px' }} required />
                    </div>
                    <div className="password">
                        <label>Password : </label>
                        <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} style={{ padding: '10px' }} required />
                    </div>
                    <div className="submitBtn">
                        <button type="submit" style={{ padding: '10px', display: 'table', margin: '0 auto', width: '70%' }}>Login</button><br />
                        <input type="checkbox" checked="checked" /> Remember me
                        <button type="button" > Cancel</button>
                    </div>
                    {/* Forgot <a href="#"> password? </a> */}
                </div>
            </form>


        </>

    )
}


export default Login

let styles = {
    container: {
        padding: '25px',
        backgroundColor: 'lightblue'
    },
    cancelbtn: {
        width: 'aut',
        padding: '10px 18px',
        margin: '10px 5px'
    },
    // button:hover{   
    //     opacity: 0.7;   
    // }     
}
