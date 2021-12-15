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


const CommunityPage = () => {
    const {isAuthenticated, getAccessTokenSilently} = useAuth0()
    const { authState, setAuthState } = useContext(AuthContext);
    const userStatus = (authState.statusOfAuth===true ? true : false);

    const [activeAddCard, setActiveAddCard] = useState(false);
    const [cardInformation, setCardInformation] = useState([]);
    const AllCards = async ()=>{
        try{
            const token = await getAccessTokenSilently()
            await GetAllCards(setCardInformation, token)
        }catch(e){
            console.log(e)
        }
    }
     useEffect(AllCards,[])
    //Информация для удаления карточки
    const [deleteUserCard, setDeleteUserCard] = useState(false);
    const [chosenUser, setChosenUser] = useState();
    const [deleteCardId, setDeleteCardId] = useState();

    return (
        isAuthenticated
            ?
            <div style={{backgroundImage: `url(${CommunityImage})`}}>
                <div>
                    <UpperPanel setActiveModalForm={setActiveAddCard} setInformation={setCardInformation}/>
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
                            {cardInformation.map((item)=>(
                                 <UserCard
                                     user={item.User.username}
                                     title={item.title}
                                     text={item.content}
                                     image={item.image}
                                     cardId={item.id}
                                     setDeleteCard={setDeleteUserCard}
                                     setId={setDeleteCardId}
                                     setUser={setChosenUser}
                                 />
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