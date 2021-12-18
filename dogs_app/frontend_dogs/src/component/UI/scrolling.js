import {useEffect} from "react";

export const Scrolling=(fetching, setFetching, currentPage, totalPages, ChangePage)=>{
    useEffect(()=>{
        if (fetching) {
            ChangePage(currentPage + 1);
        }
        setFetching(false);
    },[fetching])

    useEffect(()=>{
        document.addEventListener('scroll',scrollHandler)
        return function (){
            document.removeEventListener('scroll',scrollHandler)
        }
    },[])

    const scrollHandler = (e)=>{
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)) < 20
            && (currentPage <= totalPages))
        {
            setFetching(true);
        }
    }
}