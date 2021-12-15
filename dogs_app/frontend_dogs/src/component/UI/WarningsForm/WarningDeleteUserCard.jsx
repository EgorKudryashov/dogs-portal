import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { DeleteUserCardById } from "../../../api/DELETE";

const WarningDeleteUserCard = ({setVisible, user, cardId}) => {
    const { getAccessTokenSilently } = useAuth0()

    const DeleteCard = async()=>{
        const token = await getAccessTokenSilently()
        await DeleteUserCardById(cardId, token)
        setVisible(false)
    }

    return (
        <div>
            <div className="mb-3">
                <label className="form-label"> Вы действительно хотите удалить карточку пользователя </label>
            </div>
                <label className="form-label"> {user}? </label>
            <div className="row mt-2">
                <div className="col">
                    <button type="button" className="btn btn-info" style={{borderRadius: 7}}
                            onClick={()=>setVisible(false)}>
                        Назад
                    </button>
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-danger" style={{borderRadius: 7}}
                            onClick={DeleteCard} formEncType={'multipart/form-data'}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WarningDeleteUserCard;