import React, {useContext, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import Card from "../component/UI/Card/Card";
import Loader from "../component/UI/Loader/Loader";
import Search from "../component/UI/Search/Search";
import Pagination from "../component/UI/Pagination/Pagination";
import {GetAllBreeds} from "../api/GET";
import ModalWindow from "../component/UI/ModalWindow/ModalWindow";
import {AuthContext} from "../helpers/authContext";
import FormPublic from "../component/UI/Form/FormPublic";


const PublicPage = () => {

    const { authState } = useContext(AuthContext);
    const userRole = ((authState.role==="ADMIN" || authState.role==="MANAGER") ? true : false);

    const [activePage, setActivePage]=useState(false);

    const [information, setInformation]= useState([])
    const [activeAddCard, setActiveAddCard] = useState(false);

    //Информация для пагинации
    const [totalPages, setTotalPages]=useState(1);
    const limit = 8;
    const [currentPage, setCurrentPage]=useState(1);

    function ChangePage (page) {
        setCurrentPage(page)
    }


    const getInfo = async ()=> {
        await GetAllBreeds(setInformation, setTotalPages, limit);//Запрос на получение всех пород
        setActivePage(true);
    }
    useEffect(getInfo,[totalPages])

    let history = useHistory()

    return (
        activePage
            ?
            <div>
                <Search/>
                <div className="container mt-5">

                    <div className='row'>
                        {information.map((item, index=0)=>(
                            ((currentPage-1)*limit)<=index && index<((currentPage)*limit)
                            ?
                            <div className='col-3' key={++index}>
                                <div className = 'breed' onClick = {()=>{history.push(`/public/breed/${item.id}`)}}>
                                    <Card
                                        img_path={item.image_path}
                                        title={item.breed_name}
                                        likes={item.Likes.length}
                                    />
                                </div>
                            </div>
                                :
                                <div/>
                        ))}
                    </div>
                    <div>
                        <div className="mt-2">
                            {userRole
                                ?
                                <div>
                                    <button className="btn-info" style={{borderRadius: 10, fontSize: 18}}
                                            onClick={() => setActiveAddCard(true)}>
                                        +Добавить карточку
                                    </button>
                                    <ModalWindow
                                        visible={activeAddCard}
                                        setVisible={setActiveAddCard}>
                                        <FormPublic setVisible={setActiveAddCard}/>
                                    </ModalWindow>
                                </div>
                                :
                                <div/>
                            }
                            <Pagination
                                totalPages={totalPages}
                                page={currentPage}
                                changePage={ChangePage}
                            />
                        </div>
                    </div>
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

export default PublicPage;

