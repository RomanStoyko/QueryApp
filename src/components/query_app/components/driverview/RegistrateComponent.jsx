import { useState,useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

import { useTranslation } from 'react-i18next'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


function RegistrateComponent(){

    const { t } = useTranslation();


    const {id} = useParams();

    const [phone, setPhone] = useState("")
    const [radioValue, setRadioValue] = useState('');
    const [date, setDate] = useState(setTime());//"2023-09-19T00:00");

    const navigate = useNavigate();

    const sYaTsZ = t('sYaTsZ')
    const sHTsZ = t('sHTsZ')
    const sNoTsZ = t('sNoTsZ')
    const sZhTsZ = t('sZhTsZ')
    const sNaTsZ = t('sNaTsZ')

    function setTime(){
        var now = new Date();
        now.setTime(now.getTime() + 5 *60*60*1000 );
        
      //console.log(now.toISOString().slice(0,16))
        return now.toISOString().slice(0,16);


    }

    function handlePhoneChange(event){
        setPhone(event.target.value)
    }

    useEffect(() => setPhoneFromParams(),[id])

    function setPhoneFromParams(){
        setPhone(id)
    }

    function handleSubmit(){
        navigate(`/showquery/${phone}`);
    }

    function handleBack(){
        console.log(radioValue)
        navigate(`/`); 
    }



    return(
        <div className="container">
            <div>
            <label>{t('sYourQuery')}</label>
            <input type="phone" name="phone" value={phone} disabled={true} onChange={handlePhoneChange}/>
            </div>
                
            
            <div>
                {/* <ToggleButtonGroup type="radio" name="options" >
                        <ToggleButton id="tbg-radio-1" value={1}   variant="outline-primary" onChange={(e) => setRadioValue(e.currentTarget.value)}>
                        factory 1
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2" value={2}  variant="outline-primary" onChange={(e) => setRadioValue(e.currentTarget.value)}>
                        factory 2
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-3" value={3}  variant="outline-primary" onChange={(e) => setRadioValue(e.currentTarget.value)}>
                        factory 3
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-4" value={4}  variant="outline-primary" onChange={(e) => setRadioValue(e.currentTarget.value)}>
                        factory 4
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-5" value={5}  variant="outline-primary" onChange={(e) => setRadioValue(e.currentTarget.value)}>
                        factory 5
                        </ToggleButton>
                </ToggleButtonGroup> */}
            
            <DropdownButton
                align="end"
                title={t('sFactorySelect')}
                id="dropdown-menu-align-end"
                >
                <Dropdown.Item eventKey="1" onClick={() => setRadioValue(sYaTsZ)}>{sYaTsZ}</Dropdown.Item>
                <Dropdown.Item eventKey="2"  onClick={() => setRadioValue(sHTsZ)}>{sHTsZ}</Dropdown.Item>
                <Dropdown.Item eventKey="3"  onClick={() => setRadioValue(sNoTsZ)}>{sNoTsZ}</Dropdown.Item>
                <Dropdown.Item eventKey="4"  onClick={() => setRadioValue(sZhTsZ)}>{sZhTsZ}</Dropdown.Item>
                <Dropdown.Item eventKey="5"  onClick={() => setRadioValue(sNaTsZ)}>{sNaTsZ}</Dropdown.Item>
            </DropdownButton>
            </div>
            <div className='FactoryText'>{ radioValue} </div>
            <div>
                <label>{t('sEstimateTime')}</label>
                <input
                    type="datetime-local"
                    value={date}
                    onChange={(event) => {
                    setDate(event.target.value);
                    }}
                />
            </div>

<div>

            <button className="btn btn-success m-2"  type="button" name="submit" onClick={handleSubmit}>{t('sSubmit')}</button>
            <button className="btn btn-danger m-2"  type="button" name="back" onClick={handleBack}>{t('sReturn')}</button>
</div>
        </div>
    )
}

export default RegistrateComponent