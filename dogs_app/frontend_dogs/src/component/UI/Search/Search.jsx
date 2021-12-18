import React from 'react';
import classes from './Search.module.css'
import {GetAllBreedsSorted} from "../../../api/GET";
import {SearchBreed} from "../../../api/POST";


const Search = ({setInfo, setTotalInfo, limit,setPage, isLoading}) => {

    const SortedByLikes = async ()=>{
        await isLoading(false);
        setPage(1);
        await GetAllBreedsSorted(setInfo,setTotalInfo,limit)
        await isLoading(true);
    }

    const SearchInformation= async ()=>{
        let breed = document.getElementById("search").value;
        await isLoading(false);
        await SearchBreed(setInfo, breed, setTotalInfo, limit)
        setPage(1);
        await isLoading(true);
    }

    return (
        <div className={classes.search}>
            <button
                className={classes.search__sort__button} style={{marginLeft: '10%'}}
                onClick={SortedByLikes}>
                Отсортировать по лайкам
            </button>

            <input id="search" className={classes.search__item} style={{marginLeft: '10%'}} placeholder="  Введите название породы..." />

            <button
                className={classes.search__button}
                onClick={SearchInformation}>
                Поиск
            </button>
        </div>
    );
};

export default Search;