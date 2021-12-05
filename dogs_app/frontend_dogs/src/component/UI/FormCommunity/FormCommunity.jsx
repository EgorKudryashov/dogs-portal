import React from 'react';
import axios from "axios";

const FormCommunity = ({setVisible}) => {

    const CreateCard = async () =>{

        let title = document.getElementById("title").value;
        let text = document.getElementById("text").value;
        let picture = document.getElementById("picture").files[0];

<<<<<<< HEAD

        // то, что отправляется на сервер - это объект breedData
=======
// то, что отправляется на сервер - это объект breedData
>>>>>>> 5f3a365e5437152c37c529350e1dec8b439d292d
        const breedData = new FormData()
        breedData.append('breed_name', title)
        breedData.append('info', text)
        breedData.append('breed', picture)

        console.log(breedData)
        await axios.post('http://localhost:4000/public/create', breedData)
        setVisible(false);
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
<<<<<<< HEAD
                    onClick={CreateCard} formEncType={'multipart/form-data'}>
=======
                            onClick={CreateCard} formEncType={'multipart/form-data'}>
>>>>>>> 5f3a365e5437152c37c529350e1dec8b439d292d
                        Создать
                    </button>
                </div>
            </div>
        </div>
    )};

export default FormCommunity;