import React, {useContext, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import Card from "../component/UI/Card/Card";
import Loader from "../component/UI/Loader/Loader";
import Search from "../component/UI/Search/Search";
import Pagination from "../component/UI/Pagination/Pagination";
import {GetAllBreeds} from "../api/GET";
import ModalWindow from "../component/UI/ModalWindow/ModalWindow";
import FormCommunity from "../component/UI/FormCommunity/FormCommunity";
import {AuthContext} from "../helpers/authContext";


const PublicPage = () => {

    const { authState } = useContext(AuthContext);
    const userRole = ((authState.role==="ADMIN" || authState.role==="MANAGER") ? true : false);

    const [activePage, setActivePage]=useState(false);

    const [information, setInformation]= useState([])
    const [activeAddCard, setActiveAddCard] = useState(false);

    const [totalPages, setTotalPages]=useState(4);
    const [currentPage, setCurrentPage]=useState(1);
    function ChangePage (page) {
        setCurrentPage(page)
    }


    const getInfo = async ()=> {
        await GetAllBreeds(setInformation);//Запрос на получение всех пород
        setActivePage(true);
    }
    useEffect(getInfo,[])

    let history = useHistory()

    return (
        activePage
            ?
            <div>
                <Search/>
                <div className="container mt-5">

                    <div className='row'>
                        {information.map((item)=>(
                            <div className='col-3' key={item.id}>
                                <div className = 'breed' onClick = {()=>{history.push(`/public/breed/${item.id}`)}}>
                                    <Card
                                        img_path={item.image_path}
                                        title={item.breed_name}
                                        likes={item.Likes.length}
                                    />
                                </div>
                            </div>
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
                                        <FormCommunity setVisible={setActiveAddCard}/>
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

