import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../security/AuthContext';

import { useTranslation } from 'react-i18next'

function LoginComponent(){

    const { t } = useTranslation();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [showEM, setshowEM] = useState(false);

    const navigate = useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event){
        setUserName(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    async function handleSubmit(){
        if(await authContext.login(username,password)){
            setshowEM(false);
            navigate(`/query`);

        }else{
            setshowEM(true);
        }
    }


    return(
        <div className="Login">
             <h1>{t('sLoginTitle')}</h1>
            {showEM && <div className='EM' > Auth Fail. Please check</div>}
            <div className="LoginForm">
                <div>
                    <label>{t('sUserName')}</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>{t('sPassword')}</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button className="btn btn-success m-2" name="submit" onClick={handleSubmit}>{t('sLogin')}</button>
                </div>
            </div>
        </div>

    )
}

export default LoginComponent