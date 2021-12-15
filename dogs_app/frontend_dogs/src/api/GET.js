import axios from "axios";
const backendPath = '//localhost:4000';


// Запрос на получения всех пород из базы на сайт
export const GetAllBreeds= async (setInfo, setLenght, limit)=>{
    await axios.get(`http:${backendPath}/public`).then((response)=>{
        setInfo(response.data);
        setLenght(Math.ceil(response.data.length/limit))
    })
}


// Запрос на получение всей информации об определенной породе по её id
export const GetBreedById = async (setObject, id) => {
    await axios.get(`http:${backendPath}/public/breed/${id}`).then((response) => {
        setObject (response.data);
    });
}


export const GetDoesUserLikeBreedId = async (setLike, id) => {
    await axios.get(`http:${backendPath}/public/like/${id}`,
        {
            headers:{
                accessToken: localStorage.getItem('accessToken')
            }
        }).then((response) => {
            setLike(response.data);
    });
}

// Запрос на получения всех пород из БД на сайт
export const GetAllCards = async (setInfo, token)=>{
    await axios.get(`http:${backendPath}/private`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        setInfo(response.data);
    })
}

// Запрос на получение всех карточек конкретного пользователя
export const GetUserCards = async (setUserInfo, userId, token) => {
    await axios.get(`http:${backendPath}/private/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then((response) => {
        setUserInfo(response.data);
    });
}


export const GetUserByToken = async (setAuth, token)=>{
    try{
        await axios.get(`http:${backendPath}/join/auth0`,{
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if (!response.data.error){
                // если токен есть, то пользователь авторизован => можно хранить информацию о нем
                setAuth({
                    id: response.data.id,
                    role: response.data.role,
                    statusOfAuth: true,
                })
            }
        })
    }catch(e){
        console.log('error with auth')
    }
}


