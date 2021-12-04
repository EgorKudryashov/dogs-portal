import React, {useState} from 'react';

const FormCommunity = ({setVisible}) => {

    const[card, setCard]=useState({
        title: undefined,
        text: undefined,
        picture: undefined
    })

    const CreateCard = async () =>{

        let title = document.getElementById("title").value;
        let text = document.getElementById("text").value;
        let picture = document.getElementById("picture").files[0];

        await setCard({title: title, text: text, picture: picture});
        //Здесь нужно сделать запрос для сохранения пользовательской карточки на сервере
        await console.log(card);
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
                    <button type="button" className="btn btn-success" style={{borderRadius: 7}}
                    onClick={CreateCard}>
                        Создать</button>
                </div>
            </div>
        </div>
    );
};

export default FormCommunity;