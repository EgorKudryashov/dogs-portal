import React from 'react';

const Card = ({img_path, title, likes}) => {

    return (
        <div className="card border-dark mb-3 " style={{'width': '100%', 'height': '290px', "borderRadius": "20px"}}>
            <div  style={{'height':'70%'}}>
                <img src={`http://localhost:4000/${img_path}`}
                     className="img-thumbnail" alt="*картинка*"
                     style={{'width': '100%', 'height': '100%', "borderRadius": "20px 20px 0px 0px"}}/>
            </div>
            <div className="row g-0">
                <div className="col-auto">
                    <div className="card-body" style={{"zIndex": '3'}}>
                        <h5 className="card-title">{title}</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="Pink" viewBox="0 0 20 20"
                             className="bi bi-suit-heart-fill m-3" style={{position: "absolute"}} >
                            <path
                                d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                        </svg>
                        <p style={{color: "gray"}}> {likes} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;