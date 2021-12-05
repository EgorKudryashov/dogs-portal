import React, { useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";


function Login(){
    return (<div> Привет </div>);
}
// const [name, setName] = useState("")
// const [password, setPassword] = useState("")
// const login = ()=>{
//     const data = {name: name, password: password}
//     axios.post("http://localhost:3001/users/login", data).then((response)=>{
//         if (response.data.error) {alert (response.data.error)}
//         else{
//             sessionStorage.setItem("accessToken", response.data)
//         }
//
//         //history.push('/')
//     });
// };
// let history = useHistory()
// return (
//     <div className="loginContainer">
//         <label> Name </label>
//         <input type="text"
//                onChange={(event)=>{setName(event.target.value)}}/>
//         <label> Password </label>
//         <input type="password"
//                onChange={(event)=>{setPassword(event.target.value)}}/>
//
//
//         <button onClick={login}> Login </button>
//     </div>
// )

export default Login;