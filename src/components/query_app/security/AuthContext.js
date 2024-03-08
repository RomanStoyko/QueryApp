import { createContext, useContext, useState } from "react";

// import { apiClient } from "../api/ApiClient";
// import { executeBasicAuthenticationService, executeJwtAuthenticationService } from "../api/AuthenticayionApiService";

//create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//Share context
export default function AuthProvider({ children }){

    //Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false);

    const [username, setUsername] = useState(null);

    const [token, setToken] = useState(null);

    async function login(username, password){
        setAuthenticated(true);
        return true;

        // try{
 
        //     const response = await executeJwtAuthenticationService(username,password)
    
        //     console.log(response);
        //     if( response.status == 200){

        //         setAuthenticated(true);
        //         setUsername(username);

        //         const jwtToken = 'Bearer ' + response.data.token;

        //         setToken(jwtToken);

        //         apiClient.interceptors.request.use(
        //             (config)=>{
        //                 config.headers.Authorization=jwtToken;
        //                 return config;
        //             }
        //         )

        //         return true;
    
        //     }else{
        //         logout();
        //         return false;
        //     }
        // }catch(error){
        //     logout();
        //     return false;
        // }
        
    }

    function logout(){
        setAuthenticated(false);
        setToken(null);
        setUsername(null);
       // apiClient.interceptors.request.clear();

    }


    return(
    <AuthContext.Provider value={
        {isAuthenticated, login, logout, username, token}
        }>
        { children }
    </AuthContext.Provider>
    )
}

