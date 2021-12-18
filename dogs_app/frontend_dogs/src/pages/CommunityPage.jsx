import React, {useContext, useEffect, useState} from 'react';
import CommunityImage from '../images_app/community.jpg';
import ModalWindow from "../component/UI/ModalWindow/ModalWindow";
import FormCommunity from "../component/UI/Form/FormCommunity";
import UserCard from "../component/UI/Card/UserCard";
import UpperPanel from "../component/UI/UpperPanel/UpperPanel";
import {AuthContext} from "../helpers/authContext";
import WarningDeleteUserCard from "../component/UI/WarningsForm/WarningDeleteUserCard";
import {GetAllCards} from "../api/GET";
import {useAuth0} from "@auth0/auth0-react";
import {Scrolling} from "../component/UI/scrolling";


const CommunityPage = () => {
    const {isAuthenticated, getAccessTokenSilently} = useAuth0()
    const { authState, setAuthState } = useContext(AuthContext);
    //const userStatus = (authState.statusOfAuth===true ? true : false);

    const [activeAddCard, setActiveAddCard] = useState(false);
    const [cardInformation, setCardInformation] = useState([]);
    const AllCards = async ()=>{
        try{
            const token = await getAccessTokenSilently()
            await GetAllCards(setCardInformation, token, setTotalPages, limit)
        }catch(e){
            console.log(e)
        }
    }
     useEffect(AllCards,[])

    //  Информация для удаления карточки
    const [deleteUserCard, setDeleteUserCard] = useState(false);
    const [chosenUser, setChosenUser] = useState();
    const [deleteCardId, setDeleteCardId] = useState();

    ///////////////////////////////////  Информация для скроллинга
    const [totalPages, setTotalPages]=useState(1);
    const limit = 2;
    const [currentPage, setCurrentPage]=useState(1);
    const [fetching, setFetching] = useState(true)

    function ChangePage (page) {
        setCurrentPage(page)
    }

    Scrolling(fetching, setFetching, currentPage,totalPages,ChangePage)
    //////////////////////////Конец скроллинга

    return (
        isAuthenticated
            ?
            <div style={{backgroundImage: `url(${CommunityImage})`}}>
                <div>
                    <UpperPanel setActiveModalForm={setActiveAddCard}
                                setInformation={setCardInformation}
                                setPage={setCurrentPage}
                                setTotalPage={setTotalPages}
                                limit={limit}
                    />
                    <ModalWindow visible={activeAddCard} setVisible={setActiveAddCard}>
                        <FormCommunity setVisible={setActiveAddCard}/>
                    </ModalWindow>
                    <ModalWindow visible={deleteUserCard} setVisible={setDeleteUserCard}>
                        <WarningDeleteUserCard setVisible={setDeleteUserCard} user={chosenUser} cardId={deleteCardId}/>
                    </ModalWindow>
                </div>
                <div className="container mt-4">
                    <div className="row justify-content-md-center">
                        <div className="col-auto">
                            {cardInformation.map((item, index=0)=>(
                                index<((currentPage)*limit)
                                    ?
                                    <div key={++index} className='breed'>
                                        <UserCard
                                            user={item.User.username}
                                            userId={item.UserId}
                                            title={item.title}
                                            text={item.content}
                                            image={item.image}
                                            cardId={item.id}
                                            setDeleteCard={setDeleteUserCard}
                                            setId={setDeleteCardId}
                                            setUser={setChosenUser}
                                        />
                                    </div>
                                    :
                                    <div/>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            :
            <div style={{marginTop:"10%", marginLeft:"25%"}}>
                <h3>Авторизируйтесь, чтобы увидеть питомцев других пользователей</h3>
            </div>
    );
};

export default CommunityPage;