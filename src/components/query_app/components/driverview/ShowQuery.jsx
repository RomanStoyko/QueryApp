import { useState,useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

import { useTranslation } from 'react-i18next'


function ShowQuery(){

    const { t } = useTranslation();

    const {id} = useParams();
    const [phone, setPhone] = useState("")

    const navigate = useNavigate();


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
            <h1>{t('sYourQuery')}</h1>
            <div>
                <label>{t('pNumber')}</label>
                <input type="phone" name="phone" value={phone} disabled={true}/>

                <div className="NumberInQuery" > 6 </div>
                <div className="TimeInQuery" > 5:48:16 </div>
            </div>
            <button className="btn btn-success m-2"  type="button" name="check" onClick={handleReturn}>{t('sReturn')}</button>
        </div>
    )
}

export default ShowQuery