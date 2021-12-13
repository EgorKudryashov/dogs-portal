import React, {useContext, useState} from 'react';
import ModalWindow from "../component/UI/ModalWindow/ModalWindow";
import FormCommunity from "../component/UI/Form/FormCommunity";
import UserCard from "../component/UI/Card/UserCard";
import UpperPanel from "../component/UI/UpperPanel/UpperPanel";
import {AuthContext} from "../helpers/authContext";

const CommunityPage = () => {

    const { authState } = useContext(AuthContext);
    const userStatus = (authState.statusOfAuth===true ? true : false);
    const image = "images/1639166095546.jpg";
    const title = "МОЯ СОБАКА"
    const user = "login1234455"

    const [activeAddCard, setActiveAddCard] = useState(false);

    return (
        userStatus
            ?
            <div>
                <div>
                    <UpperPanel setActiveModalForm={setActiveAddCard}/>
                    <ModalWindow visible={activeAddCard} setVisible={setActiveAddCard}>
                        <FormCommunity setVisible={setActiveAddCard}/>
                    </ModalWindow>
                </div>
                <div className="container mt-4">
                    <div className="row justify-content-md-center">
                        <div className="col-auto">
                            <UserCard
                                title={title}
                                image={image}
                                user={user}
                            />
                            <UserCard
                                title={title}
                                image={"images/1639168534535.jpg"}
                                user={user}
                            />
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