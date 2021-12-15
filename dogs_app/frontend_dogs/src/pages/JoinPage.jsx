import React, {useContext, useEffect} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import Login from "../component/UI/Login/Login";
import Registration from "../component/UI/Registration/Registration";
import {AuthContext} from "../helpers/authContext";
import {useHistory} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const JoinPage = () => {
    const {loginWithPopup} = useAuth0()
    const router = useHistory();

    const SignIn = async ()=>{
        await loginWithPopup()
        router.push('/')
    }
    return (
        <div className='joinPage'>
            <button onClick={SignIn}> Присоединиться </button>
        </div>
    );
};

export default JoinPage;