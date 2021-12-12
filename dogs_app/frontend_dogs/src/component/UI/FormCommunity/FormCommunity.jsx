import React, {useState} from 'react';
import {PostNewBreed} from "../../../api/POST";

const FormCommunity = ({setVisible}) => {
    const CreateCard = async () =>{

        let title = document.getElementById("title").value;
        let text = document.getElementById("text").value;
        let picture = document.getElementById("picture").files[0];

// то, что отправляется на сервер - это объект breedData
        const breedData = new FormData()
        breedData.append('breed_name', title)
        breedData.append('info', text)
        breedData.append('breed', picture)

        console.log(breedData)
        PostNewBreed(breedData);
        //Post-запрос на создание карточки
        setVisible(false);
        document.getElementById("title").value = "";
        document.getElementById("text").value = "";
        document.getElementById("picture").value = "";
    }

    return (
        <div>
            <div className="mb-3">
                <label className="form-label"> Название породы </label>
                <input type="text"
                       className="form-control"
                       id="title"
                       placeholder=""
                       autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label className="form-label"> Описание </label>
                <textarea className="form-control"
                          id="text"
                          rows="3"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Добавить изображение{'\n'}</label>
                <input type="file"
                       className="form-control"
                       id="picture"
                       name="breed"
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
                            onClick={CreateCard} formEncType={'multipart/form-data'}>
                        Создать
                    </button>
                </div>
            </div>
        </div>
    )};

export default FormCommunity;