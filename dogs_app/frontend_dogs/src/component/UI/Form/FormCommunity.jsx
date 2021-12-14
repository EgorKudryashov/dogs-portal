import React from 'react';
import {PostNewCard} from "../../../api/POST";

const FormCommunity = ({setVisible}) => {
    const CreateUserCard = async () =>{

        let title = document.getElementById("title").value;
        let content = document.getElementById("text").value;
        let picture = document.getElementById("picture").files[0];

// то, что отправляется на сервер - это объект cardData
        const cardData = new FormData()
        cardData.append('title', title)
        cardData.append('content', content)
        cardData.append('card', picture)


        //Тут надо всунуть запрос для создания карточки пользователя
        //Post-запрос на создание карточки
        await PostNewCard(cardData)

        setVisible(false);
        document.getElementById("title").value = "";
        document.getElementById("text").value = "";
        document.getElementById("picture").value = "";
    }

    return (
        <div>
            <div className="mb-3">
                <label className="form-label"> Заголовок карточки </label>
                <input type="text"
                       className="form-control"
                       id="title"
                       placeholder=""
                       autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label className="form-label"> Содержимое </label>
                <textarea className="form-control"
                          id="text"
                          rows="3"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Добавить изображение{'\n'}</label>
                <input type="file"
                       className="form-control"
                       id="picture"
                       name="card"
                />
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-danger" style={{borderRadius: 7}}
                            onClick={()=>setVisible(false)}>
                        Назад
                    </button>
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-success" style={{borderRadius: 7}}
                            onClick={CreateUserCard} formEncType={'multipart/form-data'}>
                        Создать
                    </button>
                </div>
            </div>
        </div>
    )};

export default FormCommunity;