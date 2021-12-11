import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import BreedCard from "../component/UI/Card/BreedCard";

const BreedPage = () => {

    let { id } = useParams();
    const [breedObject, setBreedObject] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:4000/public/breed/${id}`).then((response) => {
            setBreedObject(response.data);
        });
    },[])

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