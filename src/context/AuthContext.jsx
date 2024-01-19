import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({})

function AuthContextProvider({children}){
    const navigate = useNavigate()
    const [isAuth, toggleIsAuth] = useState(false);



    function logIn(){

        toggleIsAuth(true)
        console.log('gebruiker is in gelogged')
        navigate('/profile')
    }
    function logOut(){
        toggleIsAuth(false)
        console.log('gebruiker is uit gelogged')
        navigate('/')
    }

    const data ={
        isAuth,
        logIn,
        logOut,
    }

    return(
        <AuthContext.Provider value={data}>
        {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider