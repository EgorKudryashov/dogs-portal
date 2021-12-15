import React, { useContext } from 'react';
import classes from "./navbar.module.css";
import {useHistory, Link} from "react-router-dom";
import {MdPets} from 'react-icons/md';
import { AuthContext } from "../../../helpers/authContext";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    const { loginWithPopup, loginWithRedirect, logout, isAuthenticated } = useAuth0()
    const { authState, setAuthState } = useContext(AuthContext)
    const router = useHistory();

    const loginPage = ()=>{
        router.push('/join')
    }

    const exit = ()=>{
        setAuthState({
            id: 0,
            role: "VISITOR",
            statusOfAuth: false
        })
        console.log('Данные сменились')
        logout();
        alert('Вы вышли из системы')
    }

    return (
        <nav className = {classes.navbar}>
            <Link to='/' className={classes.navbar__logo}>
                <MdPets size={38} className={classes.navbar__logo.img}/>

            </Link>
            <div className={classes.navbar__links}>
                {isAuthenticated ? (
                    <Link to='/ProfilePage' className={classes.navbar__element}>
                        Профиль</Link> )
                    : (<></>)}
                <Link to='/public' className={classes.navbar__element}>
                    Главная
                </Link>
                <Link to='/community' className={classes.navbar__element}>
                    Сообщество
                </Link>
                { !isAuthenticated ? (
                    <button className={classes.navbar__button} onClick={loginPage}> Войти </button>
                ) : (
                    <button className={classes.navbar__button_exit} onClick={exit}> Выйти </button>
                )}

            </div>
        </nav>
    )
};

export default Navbar;