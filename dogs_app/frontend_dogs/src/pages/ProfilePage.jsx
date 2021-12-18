import React, {useEffect, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Image, Button, Row, Container, Col, Badge} from "react-bootstrap";
import {MdPets} from "react-icons/md";
import CommunityImage from "../images_app/community.jpg";
import {useParams} from "react-router-dom";
import {GetUserById, GetUserCards} from "../api/GET";
import ProfileUserCard from "../component/UI/Card/ProfileUserCard";
import {Scrolling} from "../component/UI/scrolling";


const ProfilePage = () => {

    let { id } = useParams();
    const {getAccessTokenSilently} = useAuth0()

    const { isAuthenticated } = useAuth0()
    const [userInfo, setUserInfo] = useState({})
    const getUserInfo = async ()=>{
        await GetUserById(setUserInfo, id)
    }

    //Карточки
    const [activeShowUserCards, setActiveShowUserCards]=useState(false)
    const [userCards, setUserCards] = useState();

    //Скроллинг
    const [currentPage, setCurrentPage]=useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [fetching, setFetching] =useState(true);
    const limit = 2;

    const ChangePage=(page)=>{
        setCurrentPage(page)
    }

    Scrolling(fetching, setFetching, currentPage, totalPages, ChangePage)
    //////////////////////////////

    const ShowUserCards = async ()=>{
        setActiveShowUserCards(false);
        const token = await getAccessTokenSilently()
        await GetUserCards(setUserCards, id, token, setTotalPages, limit)
        setActiveShowUserCards(true);
        console.log(totalPages)
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
                    <Button
                        variant="warning" style={{'height':'50px', 'width':'600px'}}
                        onClick={ShowUserCards}>
                        <MdPets /> Показать карточки пользователя
                    </Button>
                    { activeShowUserCards
                        ?
                        <div className="container mt-4">
                            <div className="row justify-content-md-center">
                                <div className="col-auto">
                                    {userCards.map((item, index=0)=>(
                                        index<((currentPage)*limit)
                                            ?
                                            <div key={++index} className='breed'>
                                                <ProfileUserCard
                                                    title={item.title}
                                                    text={item.content}
                                                    image={item.image}
                                                />
                                            </div>
                                            :
                                            <div/>
                                    ))}
                                </div>
                            </div>
                        </div>
                        :
                        <div/>
                    }
                </div>
            </div>
        );
    }
};

export default ProfilePage;