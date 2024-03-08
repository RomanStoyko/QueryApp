import { useState } from 'react'
import { useNavigate } from 'react-router-dom';




function PhoneCheckQuery(){

    const [phone, setPhone] = useState("")

    const navigate = useNavigate();

    function handlePhoneChanhe(event){
        setPhone(event.target.value)
    }

    function handleCheck(){
        console.log(phone)
        navigate(`/showquery/${phone}`); 
    }

    function handleRegistr(){
        console.log("reg " +phone)
        navigate(`/registerinquery/${phone}`); 
    }

    return(
        <div className="PhoneCheckQuery">
            <h1>Time to check your query</h1>
            <div>
                <label>Phone number</label>
                <input type="phone" name="phone" value={phone} onChange={handlePhoneChanhe}/>

                <button className="btn btn-success m-2"  type="button" name="check" onClick={handleCheck}>check</button>
            </div>
            <div>
                
                <h3>Not in query?</h3>
                <button className="btn btn-warning m-2"  type="button" name="check" onClick={handleRegistr}>registrate</button>
            </div>
        </div>
    )
}

export default PhoneCheckQuery