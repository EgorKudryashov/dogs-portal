import React from 'react';

const Card = ({title,text}) => {


    return (
        <div className="card mb-3" style={{'maxWidth': '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="место для картинки" className="img-fluid rounded-start" alt="*картинка*"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;