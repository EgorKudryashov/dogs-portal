import React, {useState} from 'react';
import Card from "../component/UI/Card/Card";
import Loader from "../component/UI/Loader/Loader";

const MainPage = () => {

    const [activePage, setActivePage]=useState(false);

    const [information, setInformation]= useState({
        key: undefined,
        title: undefined,
        text: undefined
    })

    const getInfo = async ()=>{
        await setInformation([
            {
                key: "1",
                title: "Первая собака",
                text: "Важная информация о первой собаке"
            },
            {
                key: "2",
                title: "Вторая собака",
                text: "Важная информация о второй собаке"
            },
            {
                key: "3",
                title: "Третья собака",
                text: "Важная информация о третьей собаке"
            },
            {
                key: "4",
                title: "Четвертая собака",
                text: "Важная информация о четвертой собаке"
            },
            {
                key: "5",
                title: "Пятая собака",
                text: "Важная информация о пятой собаке"
            },
            {
                key: "6",
                title: "Шестая собака",
                text: "Важная информация о шестой собаке"
            },
            {
                key: "7",
                title: "Седьмая собака",
                text: "Важная информация о седьмой собаке"
            },
            {
                key: "8",
                title: "Восьмая собака",
                text: "Важная информация о восьмой собаке"
            },
            {
                key: "9",
                title: "Девятая собака",
                text: "Важная информация о девятой собаке"
            },
            {
                key: "10",
                title: "Десятая собака",
                text: "Важная информация о десятой собаке"
            },
        ]);
        setActivePage(true);
    }

    return (
        activePage
            ?
            <div className="container mt-5">
                <div className='row'>
                    {information.map((item)=>(
                        <div className='col-4' key={item.title}>
                            <Card
                                title={item.title}
                                text={item.text}
                            />
                        </div>
                    ))}
                </div>
            </div>
            :
            <div className="container mt-5 l-5">
                <button type="button" className="btn btn-info"
                        onClick={getInfo}>
                    КНОПКА
                </button>
                <Loader/>
            </div>
    );
};

export default MainPage;