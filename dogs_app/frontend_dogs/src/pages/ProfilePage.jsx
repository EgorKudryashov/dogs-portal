import React, {useContext, useEffect} from 'react';
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
            <div>
                <h1> Вы успешно вошли </h1>
                <h2> {isAuthenticated ? user.name : 'not'} </h2>
                <img src={user.picture} />
                <p>{JSON.stringify(user, null, 2)}</p>
            </div>
        );
    }
};

export default ProfilePage;