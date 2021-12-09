import React, { useState, useContext } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./Login.css"
import { AuthContext } from "../../../helpers/authContext";

function Login(){
    const { setAuthState } = useContext(AuthContext)
    let history = useHistory()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const signup = ()=>{
        const data = {login: login, password: password}
        axios.post("http://localhost:4000/join/login", data).then((response)=>{
            if (response.data.error) {
                alert (response.data.error)
            }
            else{
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({
                    id: response.data.id,
                    role: response.data.role,
                    statusOfAuth: true
                })
                alert(response.data.message)
                history.push('/')
            }
        });
    };
    return (
        <div className="login">
            <label> Логин </label>
            <input type="text"
                   onChange={(event)=>{setLogin(event.target.value)}}/>
            <label> Пароль </label>
            <input type="password"
                   onChange={(event)=>{setPassword(event.target.value)}}/>
            <button onClick={signup}> Войти </button>
        </div>
    )
}


export default Login;