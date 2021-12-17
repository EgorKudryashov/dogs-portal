import React, {useContext, useEffect} from 'react';
import {Carousel} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import slideOne from '../images_app/slide1.jpg';
import slideTwo from '../images_app/slide2.jpg';
import slideThree from '../images_app/slide3.jpg';

const JoinPage = () => {
    const {loginWithPopup} = useAuth0()
    const router = useHistory();

    const SignIn = async ()=>{
        await loginWithPopup()
        router.push('/')
    }
    return (
        <div className='joinPage'>
            <Carousel>
                <Carousel.Item interval={1000} style = {{'height':'590px'}}>
                    <img
                        className="d-block w-100"
                        src={slideTwo}
                        alt="Second slide"
                    />
                    <Carousel.Caption id="slide2">
                        <h1>Dogs Portal</h1>
                        <p>Узнайте больше о разных породах</p>
                        <button onClick={SignIn}> Присоединиться </button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000} style = {{'height':'590px'}}>
                    <img
                        className="d-block w-100"
                        src={slideThree}
                        alt="Third slide"
                    />
                    <Carousel.Caption id="slide3">
                        <h1>Dogs Portal</h1>
                        <p>Расскажите о своих питомцах</p>
                        <button onClick={SignIn}> Присоединиться </button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000} style = {{'height':'590px'}}>
                    <img
                        className="d-block w-100"
                        src={slideOne}
                        alt="First slide"
                    />
                    <Carousel.Caption id="slide1" >
                        <h1> Dogs portal </h1>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default JoinPage;