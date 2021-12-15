import axios from "axios";
const backendPath = '//localhost:4000';

/*-----------------------------------------------------------------------*/
/*------------------------Public----------------------------------------*/

// Запрос на удаление определенной породы по её id
export const DeleteBreedById = (id, token) => {
    axios.delete(`http:${backendPath}/public/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.data.error){
            alert(response.data.error);
        }
        else alert(response.data);
    });
}

/*-----------------------------------------------------------------------*/
/*------------------------Private----------------------------------------*/
// Запрос на удаление пользовательской карточки по её id
export const DeleteUserCardById = (id, token) => {
    axios.delete(`http:${backendPath}/private/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.data.error){
            alert(response.data.error);
        }
        else alert(response.data);
    });
}