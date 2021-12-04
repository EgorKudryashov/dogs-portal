import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import Card from "../component/UI/Card/Card";
import Loader from "../component/UI/Loader/Loader";
import Search from "../component/UI/Search/Search";
import Pagination from "../component/UI/Pagination/Pagination";


const PublicPage = () => {

    const [activePage, setActivePage]=useState(false);

    const [information, setInformation]= useState([])

    const [totalPages, setTotalPages]=useState(4);
    const [currentPage, setCurrentPage]=useState(1);
    function ChangePage (page) {
        setCurrentPage(page)
    }


    const getInfo = ()=> {
        axios.get('http://localhost:4000/public').then((response)=>{
            setInformation(response.data);
        })
        setActivePage(true);
    }
    useEffect(getInfo,[])

    let history = useHistory()
    return (
        activePage
            ?
            <div>
                <Search/>
                <div className="container mt-5">

                    <div className='row'>
                        {information.map((item)=>(
                            <div className='col-4' key={item.id}>
                                <div className = 'breed' onClick = {()=>{history.push(`/public/breed/${item.id}`)}}>
                                    <Card
                                        img_path={item.image_path}
                                        title={item.breed_name}
                                        text={item.info}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination
                        totalPages={totalPages}
                        page={currentPage}
                        changePage={ChangePage}
                    />
                </div>
            </div>
            :
            <div className="container mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                    <Loader/>
                    </div>
                </div>
            </div>
    );
};

export default PublicPage;

