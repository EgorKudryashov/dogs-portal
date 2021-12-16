import React, {useState, useContext} from 'react';
import classes from './UpperPanel.module.css'
import {Nav} from "react-bootstrap";
import {GetAllCards, GetUserCards} from "../../../api/GET";
import {AuthContext} from "../../../helpers/authContext";
import {useAuth0} from "@auth0/auth0-react";

const UpperPanel = ({setActiveModalForm, setInformation, setPage, setTotalPage, limit}) => {
    const {isAuthenticated, getAccessTokenSilently} = useAuth0()
    const {authState} = useContext(AuthContext)
    const [activeNav, setActiveNav] = useState(false);

    // Карточки
    const GetCards = async (activeNav) => {
        try{
            await setPage(1);
            const token = await getAccessTokenSilently()
            console.log(token)
            if (!activeNav){
                console.log(authState)
                await GetUserCards(setInformation, authState.id, token, setTotalPage, limit)
            }else{
                await GetAllCards(setInformation, token, setTotalPage, limit)
            }
        }catch(e){
            console.log('Ошибка при получение карточек')
        }
    }

    return (
        <div className={classes.panel}>
            <Nav fill variant="tabs" defaultActiveKey="CommunityCards" style={{marginLeft:"6%", height: "80%"}}>
                <Nav.Item>
                    <Nav.Link eventKey="MyCards"
                              style={activeNav ? {color: "black"}: {color: "white"}}
                              onClick={async ()=>{await setActiveNav(true); await GetCards(activeNav); }}
                    >
                        Мои карточки
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="CommunityCards"
                              style={activeNav ? {color: "white"} : {color: "black"}}
                              onClick={async ()=>{await setActiveNav(false); await GetCards(activeNav); }}
                    >
                        Карточки сообщества
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <button className={classes.panel__button} onClick={()=>setActiveModalForm(true)}>
                +Добавить карточку
            </button>
        </div>
    );
};

export default UpperPanel;