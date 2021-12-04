import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

function BreedPage () {
    let { id } = useParams();
    const [breedObject, setBreedObject] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:4000/public/breed/${id}`).then((response) => {
            setBreedObject(response.data);
        });
    },[])
    return (
        <div>
            <h1> {breedObject.breed_name} </h1>
            <p> {breedObject.info} </p>
            <img src={`http://localhost:4000/${breedObject.image_path}`}></img>
        </div>
    );
}

export default BreedPage;