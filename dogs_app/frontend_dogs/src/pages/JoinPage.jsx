import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import Login from "../component/UI/Login/Login";
import Registration from "../component/UI/Registration/Registration";

const JoinPage = () => {
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