import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style/QueryApp.css'

import HeaderComponent from './components/service/HeaderComponent';
import ErrorComponent from './components/service/ErrorComponent';
import PhoneCheckQuery from './components/driverview/PhoneCheckQuery';
import RegistrateComponent from './components/driverview/RegistrateComponent';
import ShowQuery from './components/driverview/ShowQuery'
import QueryControl from './components/querycontrol/QueryControl'
import AllQuery from './components/querycontrol/AllQuery'
import LoginComponent from './components/service/LoginComponent'
import AuthProvider from './security/AuthContext'

// function AuthenticatedRoute({children}){

//     const authContext = useAuth();
//     if(authContext.isAuthenticated){
//         return(
//             children
//         )   
//     }

//     return <Navigate to="/"/>
// }

export default function QueryApp(){
    return(
        <div className="QueryApp">
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<PhoneCheckQuery/>}/>
                    <Route path='/registerinquery/:id' element={
      
                                <RegistrateComponent/>
                            
                        }/> 
                    <Route path='/showquery/:id' element={
                        
                        <ShowQuery/>
                    
                    }/> 
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/query' element={<QueryControl/>}/>
                    <Route path='/allquery' element={<AllQuery/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                </Routes>
            </BrowserRouter>
            </AuthProvider>
        </div>
    )
}




