import { useState,useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";




function ShowQuery(){

    const {id} = useParams();
    const [phone, setPhone] = useState("")

    const navigate = useNavigate();

    function handlePhoneChanhe(event){
        setPhone(event.target.value)
    }

    useEffect(() => setPhoneFromParams(),[id])

    function setPhoneFromParams(){
        setPhone(id)
    }
  

    function handleReturn(){
        console.log("reg " +phone)
        navigate(`/`); 
    }

    return(
        <div className="PhoneCheckQuery">
            <h1>Your query</h1>
            <div>
                <label>Phone number</label>
                <input type="phone" name="phone" value={phone} disabled={true}/>

                <div className="NumberInQuery" > 6 </div>
                <div className="TimeInQuery" > 5:48:16 </div>
            </div>
            <button className="btn btn-success m-2"  type="button" name="check" onClick={handleReturn}>return</button>
        </div>
    )
}

export default ShowQuery