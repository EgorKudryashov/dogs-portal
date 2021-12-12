import React, {useEffect, useState} from "react";
import { useParams, useHistory } from 'react-router-dom'

import BreedCard from "../component/UI/Card/BreedCard";

import { GetBreedById } from "../api/GET";
import { DeleteBreedById } from "../api/DELETE";

import { Button } from "react-bootstrap";


const BreedPage = () => {
    let history = useHistory();
    let { id } = useParams();
    const [breedObject, setBreedObject] = useState({})

    const GetBreed = async ()=>{
        await GetBreedById(setBreedObject, id);
        //Запрос на получение информации об одной породе
        //Здесь можно добавить условие на иконку загрузки
    }
    const DeleteBreed = async () => {
        await DeleteBreedById(id);
        history.push('/');
    }
    useEffect(
        GetBreed,[]
    )

    return (
        <div>
            <BreedCard
                title={breedObject.breed_name}
                content={breedObject.info}
                image={breedObject.image_path}
                id = {breedObject.id}
            />
            <Button variant="danger" onClick={DeleteBreed}> Удалить </Button>
        </div>
    );
}

export default BreedPage;