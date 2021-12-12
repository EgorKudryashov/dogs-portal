import React, { useState, useEffect } from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./component/UI/Navbar/navbar";
import PageRouter from "./component/PageRouter";
import { AuthContext } from './helpers/authContext';
import axios from "axios";
import {GetTokenAuth} from "./api/GET";


function App() {
    const [authState, setAuthState] = useState({
        id: 0,
        role: "VISITOR",
        statusOfAuth: false
    });

    // Проверка того, авторизован ли пользователь
    const AccessToken = async ()=>{
        await GetTokenAuth(authState, setAuthState);//get-Запрос на актуальность токена
    }
    useEffect(
       AccessToken,[]
    )

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
