import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'




function PhoneCheckQuery(){

    const { t } = useTranslation();

    const [phone, setPhone] = useState("")

    const navigate = useNavigate();

    function handlePhoneChanhe(event){
        setPhone(event.target.value)
    }

    function handleCheck(){
        if(phone.trim().length === 0){
            navigate(`/`); 
        }else{
            navigate(`/showquery/${phone}`); 
        }
    }

    function handleRegistr(){
        if(phone.trim().length === 0){
            navigate(`/`); 
        }else{
            navigate(`/registerinquery/${phone}`);
        } 
    }

    return(
        <div className="PhoneCheckQuery">
            <h1>{t('DriverQ')}</h1>
            <div>
                <label>{t('pNumber')}</label>
                <input type="phone" name="phone" value={phone} onChange={handlePhoneChanhe}/>

                <button className="btn btn-success m-2"  type="button" name="check" onClick={handleCheck}>{t('sCheck')}</button>
            </div>
            <div>
                
                <h3>{t('notInQ')}</h3>
                <button className="btn btn-warning m-2"  type="button" name="check" onClick={handleRegistr}>{t('sRegistrate')}</button>
            </div>
        </div>
    )
}

export default PhoneCheckQuery