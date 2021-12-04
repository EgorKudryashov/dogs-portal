import React from 'react';

const Card = ({img_path, title, text}) => {

    return (
        <div className="card border-dark mb-3 " style={{'maxWidth': '640px', "border-radius": "20px"}}>
            <div className="col-auto">
                <img src={`http://localhost:4000/${img_path}`}
                     className="img-thumbnail" alt="*картинка*"
                     style={{"border-radius": "20px 20px 0px 0px",}}/>
            </div>
            <div className="row g-0">
                <div className="col-auto">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-text"><small className="text-muted">Last updated 2 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;