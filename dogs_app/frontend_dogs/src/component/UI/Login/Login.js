import React, { useState, useContext } from "react";
import "./Login.css"
import { AuthContext } from "../../../helpers/authContext";
import {PostLogin} from "../../../api/POST";

function Login(){
    const { setAuthState } = useContext(AuthContext)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const signUp = async ()=>{
        const data = {login: login, password: password}
        await PostLogin(data, setAuthState);//Post-запрос на вход на сайт, который допускает пользователя, если его данные верны
    };

    return (
        <div className="login">
            <label> Логин </label>
            <input type="text"
                   onChange={(event)=>{setLogin(event.target.value)}}/>
            <label> Пароль </label>
            <input type="password"
                   onChange={(event)=>{setPassword(event.target.value)}}/>
            <button onClick={signUp}> Войти </button>
        </div>
    )
}


export default Login;