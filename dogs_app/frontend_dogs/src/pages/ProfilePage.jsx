import React, {useContext} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from '../helpers/authContext';


const ProfilePage = () => {
    const { authState, setAuthState} = useContext(AuthContext)
    const { isAuthenticated, user } = useAuth0()

    if (!isAuthenticated) return (
        <div>
            <h1> упс, что-то пошло не так ... </h1>
        </div>
    )
    else {
        return (
            //<p>{JSON.stringify(user, null, 2)}</p>
            <div className="container mt-2">
                <div className="row col-auto">
                    <h1> Вы успешно вошли </h1>
                    <h2> Приветсвует вас, мы очень вам рады</h2>
                    <h2> {isAuthenticated ? user.name : 'not'} </h2>
                    <img src={user.picture} style={{maxWidth: "200px", maxHeight: "200px", borderRadius: "20px", marginTop: "20px"}} />
                    <h6 style={{marginTop: "20px"}}>Ваш логин: {user.nickname}</h6>
                    <h6>Ваш email: {user.email}</h6>
                </div>
            </div>
        );
    }
};

export default ProfilePage;