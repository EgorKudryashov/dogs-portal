import React, {useEffect, useState} from 'react';
import Card from "../component/UI/Card/Card";
import Loader from "../component/UI/Loader/Loader";
import Search from "../component/UI/Search/Search";
import Pagination from "../component/UI/Pagination/Pagination";

const MainPage = () => {

    const [activePage, setActivePage]=useState(false);

    const [information, setInformation]= useState({
        key: undefined,
        title: undefined,
        text: undefined
    })

    const [totalPages, setTotalPages]=useState(4);
    const [currentPage, setCurrentPage]=useState(1);
    function ChangePage (page) {
        setCurrentPage(page)
    }

    const getInfo = async ()=> {
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
        ]);
        setActivePage(true);
    }

    useEffect(getInfo,[])

    return (
        activePage
            ?
            <div>
                <Search/>
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
                    <Pagination
                        totalPages={totalPages}
                        page={currentPage}
                        changePage={ChangePage}
                    />
                </div>
            </div>
            :
            <div className="container mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                    <Loader/>
                    </div>
                </div>
            </div>
    );
};

export default MainPage;