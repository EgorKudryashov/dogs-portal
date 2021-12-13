import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import Like from "../LikeIcon/Like";

const UserCard = ({user, title, text, image}) => {

    const [like, setLike] = useState(false);

    return (
        <Card className="card border-dark mt-5" style={{ width: '650px', height: '450px', borderRadius: "20px", zIndex: "3" }}>
            <Card.Body className="row">
                <div className="col-md-6">
                    <Card.Img variant="top" src={`http://localhost:4000/${image}`}
                              className="img-thumbnail" alt="*картинка*"
                              style={{'width': '100%', 'height': '70%',"border-radius": "20px"}} />
                    <div className="text-end" style={{color: "gray"}}>
                        <Card.Title>Хозяин: {user}</Card.Title>
                    </div>
                    <Like like={like} setLike={setLike}/>
                </div>
                <div className="col-md-6">
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