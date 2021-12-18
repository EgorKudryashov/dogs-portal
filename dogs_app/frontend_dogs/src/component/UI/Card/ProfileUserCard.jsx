import React from 'react';
import {Card} from "react-bootstrap";

const ProfileUserCard = ({title, text, image}) => {

    return (
        <Card className="card border-dark mt-5" style={{ paddingLeft: '50px', paddingRight: '50px', height: '450px', borderRadius: "20px", zIndex: "3" }}>
            <Card.Body className="row">
                <div className="col-md-6" style={{'paddingTop': '2%'}}>
                    <Card.Img variant="top" src={`http://localhost:4000/${image}`}
                              className="img-thumbnail" alt="*картинка*"
                              style={{'width': '100%', 'height': '80%',"maxHeight":"410px","border-radius": "20px"}} />
                </div>
                <div className="col-md-6">
                    <div className="text-center">
                        <Card.Title>{title}</Card.Title>
                    </div>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProfileUserCard;