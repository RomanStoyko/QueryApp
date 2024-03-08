import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../security/AuthContext';

function LoginComponent(){

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
             <h1>Time to login</h1>
            {showEM && <div className='EM' > Auth Fail. Please check</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}> login</button>
                </div>
            </div>
        </div>

    )
}

export default LoginComponent