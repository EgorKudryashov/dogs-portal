import React, {useContext, useState} from 'react';
import {Button, Card} from "react-bootstrap";
import Like from "../LikeIcon/Like";
import {AuthContext} from "../../../helpers/authContext";

const UserCard = ({user, title, text, image, setDeleteCard, setUser, setId}) => {

    const { authState } = useContext(AuthContext);
    const userRole = ((authState.role==="ADMIN" || authState.role==="MODERATOR") ? true : false);

    return (
        <Card className="card border-dark mt-5" style={{ paddingLeft: '50px', paddingRight: '50px', height: '450px', borderRadius: "20px", zIndex: "3" }}>
            <Card.Body className="row">
                <div className="col-md-6" style={{'paddingTop': '2%'}}>
                    <Card.Img variant="top" src={`http://localhost:4000/${image}`}
                              className="img-thumbnail" alt="*картинка*"
                              style={{'width': '100%', 'height': '80%',"border-radius": "20px"}} />
                    <div className="text-end" style={{color: "gray"}}>
                        <Card.Title>Хозяин: {user}</Card.Title>
                    </div>
                </div>
                <div className="col-md-6">
                    {userRole
                        ?
                        <div style={{marginLeft: "90%", cursor: "pointer"}} onClick={()=>{setDeleteCard(true); setUser(user); setId(1)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="DarkRed"
                                 className="bi bi-x-circle" viewBox="0 0 20 20">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        :
                        <div/>
                    }
                    <div className="text-center">
                        <Card.Title>{title}</Card.Title>
                    </div>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default UserCard;