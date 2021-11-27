import React from 'react';
import classes from "./navbar.module.css";
import {useHistory} from "react-router-dom";

const Navbar = () => {

    const router = useHistory();

    return (
        <div className={classes.navbar}>

            <div className={classes.navbar__profile}/>
            <h1 className={classes.navbar__link}>
                Собака -  твой друг
            </h1>

            <h2 className={classes.navbar__element}
                onClick={()=>{router.push("/public")}}
            >
                Главная
            </h2>
            <h2 className={classes.navbar__element}
                    onClick={()=>{router.push("/community")}}
            >
                Сообщество
            </h2>

        </div>
    );
};

export default Navbar;