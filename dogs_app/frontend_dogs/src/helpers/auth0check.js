import React from "react";
import {useContext} from "react";
import {AuthContext} from "./authContext";
import {useAuth0} from "@auth0/auth0-react";
import {GetUserByToken} from "../api/GET";


const Check = async ()=>{
    const { authState, setAuthState} = useContext(AuthContext)
    const { isAuthenticated, getAccessTokenSilently} = useAuth0()
    if (isAuthenticated && authState.statusOfAuth){
        console.log('Вы авторизованы')
    }else if (isAuthenticated) {
        const token = await getAccessTokenSilently()
        console.log(token)
        await GetUserByToken(setAuthState, token)
    }
}

export default Check