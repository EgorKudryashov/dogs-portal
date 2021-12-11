import React, {useContext, useState} from 'react';
import classes from './Search.module.css'
import {AuthContext} from "../../../helpers/authContext";
import FormCommunity from "../FormCommunity/FormCommunity";
import ModalWindow from "../ModalWindow/ModalWindow";

const Search = () => {

    const { authState } = useContext(AuthContext);
    const userRole = ((authState.role==="ADMIN" || authState.role==="MANAGER") ? true : false);


    const [activeAddCard, setActiveAddCard] = useState(false);

    return (
        <div className={classes.search}>
            {userRole
                ?
                <div>
                    <button className="btn-info" style={{borderRadius: 10, fontSize: 18}} onClick={()=>setActiveAddCard(true)}>
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
            <input id="search" className={classes.search__item} style={userRole ? {marginLeft : '20%'} : {marginLeft: '35%'}} placeholder="  Введите название породы..." />
            <button className={classes.search__button}>Поиск</button>
        </div>
    );
};

export default Search;