import React, {useContext, useEffect} from 'react';
import './pages.css';
import HomeImage from '../images_app/homeimage.jpg';
import {useHistory} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from '../helpers/authContext';
import { GetUserByToken } from "../api/GET";


const MainPage = () => {
    const { authState, setAuthState} = useContext(AuthContext)
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

    const check = async ()=>{
        if (isAuthenticated && authState.statusOfAuth){
            console.log('Вы авторизованы')
        }else if (isAuthenticated) {
            console.log(user.name)
            const token = await getAccessTokenSilently()
            console.log(token)
            await GetUserByToken(setAuthState, token)
        }
    }
    useEffect(check, [])
    const router = useHistory();
    return (
        <div className='home'
            style={{backgroundImage: `url(${HomeImage})`}}>
            <div className='headerContainer'>
                <h1> В собаке собрано все лучшее, </h1>
                <h2> что может быть в человеке </h2>
                <p> Этьен Шарле </p>
            </div>
        </div>
    );
};

export default MainPage;