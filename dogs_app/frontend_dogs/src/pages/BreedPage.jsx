import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import BreedCard from "../component/UI/Card/BreedCard";
import {GetBreedById} from "../api/getfunction";

const BreedPage = () => {

    let { id } = useParams();
    const [breedObject, setBreedObject] = useState({})

    const GetBreed = async ()=>{
        await GetBreedById(setBreedObject, id); //Запрос на получение информации об одной породе
        //Здесь можно добавить условие на иконку загрузки
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
            />
        </div>
    );
}

export default BreedPage;