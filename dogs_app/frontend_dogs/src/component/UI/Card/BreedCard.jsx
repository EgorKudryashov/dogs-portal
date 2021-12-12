import React, {useEffect, useState} from 'react';
import Like from "../LikeIcon/Like";

import {PostNewLike} from "../../../api/POST";

const BreedCard = ({title, content, image, id, likesCount}) => {

    const [like,setLike]=useState(false)

    const likeBreed = ()=>{
        PostNewLike(id)
        // Поставить лайк или убрать лайк
    }

    return (
        <div className="card border-dark mt-5" style={{"width": "70%", "height":"500px", "marginLeft": "15%", "borderRadius": "20px"}}>
            <div className="card-body row">
                <div className="col-md-6">
                    <img src={`http://localhost:4000/${image}`}
                         className="img-thumbnail" alt="*картинка*"
                         style={{'width': '100%', 'height': '80%',"border-radius": "20px"}}
                    />
                    <div onClick={likeBreed}> <Like like={like} setLike={setLike}/> </div>
                    <label> {likesCount} </label>
                </div>
                <div className="col-md-6">
                    <div style={{"border":"20px","borderColor": "black","borderRadius": "20px", "background":"#FBC940"}}>
                        <h5 className="card-title text-center">{title}</h5>
                    </div>
                    <p className="card-text ">{content}</p>
                </div>
            </div>
        </div>
    );
};

export default BreedCard;