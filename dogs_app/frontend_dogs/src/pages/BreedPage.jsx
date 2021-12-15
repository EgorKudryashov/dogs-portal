import React, {useEffect, useState} from "react";
import { useParams, useHistory } from 'react-router-dom'

import BreedCard from "../component/UI/Card/BreedCard";

import { GetBreedById } from "../api/GET";
import {DeleteBreedById, DeleteUserCardById} from "../api/DELETE";

import { Button } from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";


const BreedPage = () => {
    const {getAccessTokenSilently} = useAuth0()
    let history = useHistory();
    let { id } = useParams();
    const [breedObject, setBreedObject] = useState([])

    const GetBreed = async ()=>{
        await GetBreedById(setBreedObject, id);
        //Запрос на получение информации об одной породе
        //Здесь можно добавить условие на иконку загрузки
    }
    const DeleteBreed = async () => {
        const token = await getAccessTokenSilently()
        await DeleteBreedById(id, token)
        history.push('/');
    }
    useEffect(
        GetBreed,[]
    )

    return (
        <div className='breedPage'>
            <BreedCard
                title={breedObject.breed_name}
                content={breedObject.info}
                image={breedObject.image_path}
                id = {id}
            />
            <Button variant="danger" onClick={DeleteBreed}> Удалить </Button>
        </div>
    );
}

export default BreedPage;