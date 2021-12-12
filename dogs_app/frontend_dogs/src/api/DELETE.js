import axios from "axios";
const backendPath = '//localhost:4000';

// Запрос на удаление определенной породы по её id
export const DeleteBreedById = (id) => {
    axios.delete(`http:${backendPath}/public/${id}`, {
        headers: {
            accessToken: localStorage.getItem('accessToken')
        }
    }).then((response) => {
        if (response.data.error){
            alert(response.data.error);
        }
        else alert(response.data);
    });
}