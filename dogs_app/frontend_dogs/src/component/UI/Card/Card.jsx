import React from 'react';

const Card = ({img_path, title, likes}) => {

    return (
        <div className="card border-dark mb-3 " style={{'width': '100%', 'height': '290px', "border-radius": "20px"}}>
            <div  style={{'height':'70%'}}>
                <img src={`http://localhost:4000/${img_path}`}
                     className="img-thumbnail" alt="*картинка*"
                     style={{'width': '100%', 'height': '100%', "border-radius": "20px 20px 0px 0px"}}/>
            </div>
            <div className="row g-0">
                <div className="col-auto">
                    <div className="card-body" style={{"z-index": '3'}}>
                        <h5 className="card-title">{title}</h5>
                        <p> {likes} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;