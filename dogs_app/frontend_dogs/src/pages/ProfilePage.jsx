import React, {useContext, useEffect, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from '../helpers/authContext';
import {Image, Button, Row, Container, Col, Badge} from "react-bootstrap";
import {MdPets} from "react-icons/md";
import CommunityImage from "../images_app/community.jpg";
import {useParams} from "react-router-dom";
import {GetUserById, GetUserCards} from "../api/GET";


const ProfilePage = () => {
    let { id } = useParams();
    const { isAuthenticated } = useAuth0()
    const [userInfo, setUserInfo] = useState({})
    const getUserInfo = async ()=>{
        await GetUserById(setUserInfo, id)
    }
    useEffect(getUserInfo, [])
    if (!isAuthenticated) return (
        <div>
            <h1> упс, что-то пошло не так ... </h1>
        </div>
    )
    else {
        return (
            <div style={{backgroundImage: `url(${CommunityImage})`}}>
                <div className='userCard'>
                    <Container>
                        <Row></Row>
                        <Row>
                            <Col xs={2}></Col>
                            <Col>
                                <Image src={userInfo.avatar_path} width={'220px'}
                                       height={'220px'} roundedCircle/>
                            </Col>
                            <Col xs={7}>
                                <div className='text'>
                                    <h3> <Badge bg="warning">Имя</Badge> {userInfo.username}</h3>
                                    <h3> <Badge bg="warning">Email</Badge> {userInfo.login}</h3>
                                    <h3> <Badge bg="warning">Статус</Badge> {userInfo.role}</h3>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row></Row>
                    </Container>
                </div>
                <div className='list_of_cards'>
                    <Button variant="warning" style={{'height':'50px', 'width':'600px'}}>
                        <MdPets /> Показать карточки пользователя
                    </Button>
                </div>
            </div>
        );
    }
};

export default ProfilePage;