import React, { useState, useEffect } from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./component/UI/Navbar/navbar";
import PageRouter from "./component/PageRouter";
import { AuthContext } from './helpers/authContext';
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Provider } from '@auth0/auth0-react'



function App() {
    const [authState, setAuthState] = useState({
        id: 0,
        role: "VISITOR",
        statusOfAuth: false
    });
    return (
        <AuthContext.Provider value={{authState, setAuthState}}>
            <BrowserRouter>
                <Auth0Provider
                    domain="dev-zfwjpqk9.us.auth0.com"
                    clientId="8uvHF1OyNvwq9dTAB1Izae5SwXnCn5nH"
                    redirectUri={window.location.origin}
                    audience="dogs_portal"
                    scope="openid profile email" >
                    <Navbar/>
                    <PageRouter/>
                </Auth0Provider>
            </BrowserRouter>
        </AuthContext.Provider>
  );
}

export default App;
