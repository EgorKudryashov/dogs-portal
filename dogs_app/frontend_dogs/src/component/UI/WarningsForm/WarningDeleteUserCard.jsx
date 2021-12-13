import React from 'react';

const WarningDeleteUserCard = ({setVisible,user, cardId}) => {

    const DeleteCard=()=>{
        console.log("Всех удалю")
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