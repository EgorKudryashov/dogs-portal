import React, { useState, useEffect } from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./component/UI/Navbar/navbar";
import PageRouter from "./component/PageRouter";
import { AuthContext } from './helpers/authContext';
import axios from "axios";


function App() {
    const [authState, setAuthState] = useState({
        id: 0,
        role: "VISITOR",
        statusOfAuth: false
    });

    // Проверка того, авторизован ли пользователь
    useEffect(()=>{
        axios.get("http://localhost:4000/join/auth",{
            headers:{
                accessToken: localStorage.getItem('accessToken')
            }
        }).then((response)=>{
            if (response.data.error){
                setAuthState({...authState, statusOfAuth: false})
            }else{
                // если токен есть, то пользователь авторизован => можно хранить информацию о нем
                setAuthState({
                    id: response.data.id,
                    role: response.data.role,
                    statusOfAuth: true,
                })
            }
        })
    },[])

    return (
        <AuthContext.Provider value={{authState, setAuthState}}>
            <BrowserRouter>
                <Navbar/>
                <PageRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
  );
}

export default App;
