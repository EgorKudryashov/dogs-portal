import React, {useContext, useEffect} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import Login from "../component/UI/Login/Login";
import Registration from "../component/UI/Registration/Registration";
import {AuthContext} from "../helpers/authContext";
import {useHistory} from "react-router-dom";

const JoinPage = () => {

    const { authState } = useContext(AuthContext);
    let history = useHistory();

    //Проверка пользователя на авторизированность
    const AccessUser =()=>{
        if (authState.statusOfAuth)
            history.push('/');
    }
    useEffect(
        AccessUser,[authState]
    )

    return (
        <div className='joinPage'>
            <Container className='forms'>
                <Row>
                    <Col> <Registration /> </Col>
                    <Col className='rightSide'> <Login /> </Col>
                </Row>
            </Container>
        </div>
    );
};

export default JoinPage;