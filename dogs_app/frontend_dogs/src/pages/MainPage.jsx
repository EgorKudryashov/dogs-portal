import React from 'react';
import './pages.css';
import HomeImage from '../images_app/homeimage.jpg'
import {useHistory} from "react-router-dom";



const MainPage = () => {
    const router = useHistory();
    return (
        <div className='home'
            style={{backgroundImage: `url(${HomeImage})`}}>
            <div className='headerContainer'>
                <h1> В собаке собрано все лучшее, </h1>
                <h2> что может быть в человеке </h2>
                <p> Этьен Шарле </p>
                <button onClick={()=>{router.push('/registration')}}>Присоединиться</button>
            </div>
        </div>
    );
};

export default MainPage;