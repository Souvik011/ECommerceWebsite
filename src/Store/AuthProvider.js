import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = props => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
        
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    setTimeout(() => {
        setToken(null);
        localStorage.removeItem('token');
        
    }, 3000000);

    const contextValue = {
        Tokenid:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler

    };

    return (<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>);
};

export default AuthProvider;

