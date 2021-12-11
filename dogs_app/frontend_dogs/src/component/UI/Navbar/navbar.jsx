import React, { useContext } from 'react';
import classes from "./navbar.module.css";
import {useHistory, Link} from "react-router-dom";
import {MdPets} from 'react-icons/md';
import { AuthContext } from "../../../helpers/authContext";



const Navbar = () => {
    const { authState, setAuthState } = useContext(AuthContext)
    const router = useHistory();
    const logout = ()=>{
        // при нажатии на "выйти" токен удаляется
        localStorage.removeItem("accessToken");
        alert('Вы вышли из системы')
        setAuthState({
            id: 0,
            role: "VISITOR",
            statusOfAuth: false
        })
    }

    return (
        <nav className = {classes.navbar}>
            <Link to='/' className={classes.navbar__logo}>
                <MdPets size={38} className={classes.navbar__logo.img}/>

            </Link>
            <div className={classes.navbar__links}>
                <Link to='/public' className={classes.navbar__element}>
                    Главная
                </Link>
                <Link to='/community' className={classes.navbar__element}>
                    Сообщество
                </Link>
                { !authState.statusOfAuth ? (
                    <button className={classes.navbar__button} onClick={()=>{router.push("/join")}}> Войти </button>
                ) : (
                    <button className={classes.navbar__button_exit} onClick={logout}> Выйти </button>
                )}

            </div>
        </nav>
    )
};

export default Navbar;