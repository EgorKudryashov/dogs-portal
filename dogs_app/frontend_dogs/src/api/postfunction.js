import axios from "axios";
const backendPath = "//localhost:4000";

//Запрос на регистрацию пользователя на сайте
export const PostRegistration = async (data, setAuth)=>{

    await axios.post(`http:${backendPath}/join/registration`, data).then((response)=>{
        if (response.data.error){
            alert(response.data.error);
        }else{
            localStorage.setItem("accessToken", response.data.token);
            setAuth({
                id: response.data.id,
                role: response.data.role,
                statusOfAuth: true
            })
            alert(response.data.message)
        }
    })
}

//Запрос на проверку пароля пользователя и дать ему возможность авторизироваться
export const PostLogin = async (data, setAuth)=>{
    await axios.post(`http:${backendPath}/join/login`, data).then((response)=>{
        if (response.data.error) {
            alert (response.data.error)
        }
        else{
            localStorage.setItem("accessToken", response.data.token);
            setAuth({
                id: response.data.id,
                role: response.data.role,
                statusOfAuth: true
            })
            alert(response.data.message);
        }
    });
}

//Может не делать его await?
//Запрос на создание новой карточки породы
export const PostNewBreed = (data)=>{
    axios.post(`http:${backendPath}/public/create`, data).catch(error => {
        alert(error.toString());
    });
}