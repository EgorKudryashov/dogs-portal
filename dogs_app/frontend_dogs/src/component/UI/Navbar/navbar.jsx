import React from 'react';
import classes from "./navbar.module.css";
import {useHistory, Link} from "react-router-dom";
import {MdPets} from 'react-icons/md'



const Navbar = () => {
    const router = useHistory();

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
                <button className={classes.navbar__button} onClick={()=>{router.push("/login")}}> Войти </button>
            </div>
        </nav>
    )
    // return (
    //     <div className={classes.navbar}>
    //
    //         <div className={classes.navbar__profile}/>
    //         <h1 className={classes.navbar__link}>
    //             Собака -  твой друг
    //         </h1>
    //
    //         <h2 className={classes.navbar__element}
    //             onClick={()=>{router.push("/public")}}
    //         >
    //             Главная
    //         </h2>
    //         <h2 className={classes.navbar__element}
    //                 onClick={()=>{router.push("/community")}}
    //         >
    //             Сообщество
    //         </h2>
    //
    //     </div>
    // );
};

export default Navbar;