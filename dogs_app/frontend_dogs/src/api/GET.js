import axios from "axios";
const backendPath = '//localhost:4000';

/*-----------------------------------------------------------------------*/
/*------------------------Public----------------------------------------*/

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

// Ставил ли конкретный пользователь лайк конкретной породе?
export const GetDoesUserLikeBreedId = async (setLike, id, userid) => {
    await axios.get(`http:${backendPath}/public/like/${id}`,{headers:{
            user: userid
        }}).then((response) => {
            setLike(response.data);
    });
}


/*-----------------------------------------------------------------------*/
/*------------------------Private----------------------------------------*/

// Запрос на получения всех карточек из БД на сайт
export const GetAllCards = async (setInfo, token, setLenght, limit)=>{
    await axios.get(`http:${backendPath}/private`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        setInfo(response.data);
        setLenght(Math.ceil(response.data.length/limit))
    })
}

// Запрос на получение всех карточек конкретного пользователя
export const GetUserCards = async (setUserInfo, userId, token, setLenght, limit) => {
    await axios.get(`http:${backendPath}/private/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then((response) => {
        setUserInfo(response.data);
        setLenght(Math.ceil(response.data.length/limit));
    });
}

/*-----------------------------------------------------------------------*/
/*------------------------Join----------------------------------------*/
// Проверка пользователя на авторизацию
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


