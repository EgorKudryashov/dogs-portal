import axios from "axios";
const backendPath = '//localhost:4000';

//Запрос на получения всех пород из базы на сайт
export const GetAllBreeds= async (setInfo)=>{
    await axios.get(`http:${backendPath}/public`).then((response)=>{
        setInfo(response.data);
    })
}

//Запрос на получение всей информации об определенной породе по её id
export const GetBreedById = async (setObject, id) => {
    await axios.get(`http:${backendPath}/public/breed/${id}`).then((response) => {
        setObject (response.data);
    });
}

//Проверка актуальности токена у авторизированного пользователя
export const GetTokenAuth = async (auth, setAuth)=>{
    axios.get(`http:${backendPath}/join/auth`,{
        headers:{
            accessToken: localStorage.getItem('accessToken')
        }
    }).then((response)=>{
        if (response.data.error){
            setAuth({...auth, statusOfAuth: false})
        }else{
            // если токен есть, то пользователь авторизован => можно хранить информацию о нем
            setAuth({
                id: response.data.id,
                role: response.data.role,
                statusOfAuth: true,
            })
        }
    })
}