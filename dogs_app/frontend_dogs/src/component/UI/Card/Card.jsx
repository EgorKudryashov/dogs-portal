import React from 'react';

const Card = ({img_path, title, text}) => {

    return (
        <div className="card border-dark mb-3 " style={{'maxWidth': '540px'}}>
            <div className="col-auto">
                <img src={img_path} className="img-fluid rounded-start" alt="*картинка*"/>
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