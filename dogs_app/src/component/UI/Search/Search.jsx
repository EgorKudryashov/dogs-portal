import React from 'react';
import classes from './Search.module.css'

const Search = () => {
    return (
        <div className={classes.search}>
                <input id="search" className={classes.search__item} placeholder="Введите название породы..." />
                <button className={classes.search__button}>Поиск</button>
        </div>
    );
};

export default Search;