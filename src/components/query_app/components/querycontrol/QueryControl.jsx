import { useTranslation } from 'react-i18next'


function QueryControl({id="YaTsZ", full=true}){

    const { t } = useTranslation();

    const sFinish = t('sFinish')
    const sDelete = t('sDelete')
    const sMoveDown = t('sMoveDown')
    const sMoveUp = t('sMoveUp')
    const sCall = t('sCall')


    function setTime(min){
        var now = new Date();
        now.setTime(now.getTime() + min*60*1000 + 2*60*60*1000);
        
      //console.log(now.toISOString().slice(0,16))
      //2024-02-02T12:23
        return now.toISOString().slice(5,10) + " " + now.toISOString().slice(11,16);


    }

    return(
        <div className="container">
            <h1>Query {full && "Control"} Factory {id}</h1>           
            <div>
                <table className="table">
                    <thead>
                        <tr>

                            <th>{t('pNumber')}</th>
                            <th>{t('sEstimateTime')}</th>
                            {full && <th>{t('sFinished')}</th>}
                            {full && <th></th>}
                            {full && <th></th>}
                            {full && <th></th>}
                            {full && <th></th>}
                            {full && <th></th>}
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="1">
                            <td>096-111-11-11</td>
                            <td></td>
                            {full && <td><button className="btn btn-success">{t('sFinish')}</button></td>}
                            {full && <td><button className="btn btn-warning">{t('sDelete')}</button></td>}
                            {full && <td><button className="btn btn-dark">{t('sMoveDown')}</button></td>}
                            {full && <td></td>}
                            {full && <td><button className="btn btn-success">{t('sCall')}</button></td>}
                        </tr> 
                        <tr key="2">
                            <td>096-222-22-22</td>
                            <td>{setTime(15)}</td>
                            {full && <td><button className="btn btn-success">{t('sFinish')}</button></td>}
                            {full && <td><button className="btn btn-warning">{t('sDelete')}</button></td>}
                            {full && <td><button className="btn btn-dark">{t('sMoveDown')}</button></td>}
                            {full && <td><button className="btn btn-primary">{t('sMoveUp')}</button></td>}
                            {full && <td><button className="btn btn-success">{t('sCall')}</button></td>}
                        </tr> 
                        <tr key="3">
                            <td>096-333-33-33</td>
                            <td>{setTime(90)}</td>
                            {full && <td></td>}
                            {full && <td><button className="btn btn-warning">{t('sDelete')}</button></td>}
                            {full && <td><button className="btn btn-dark">{t('sMoveDown')}</button></td>}
                            {full && <td><button className="btn btn-primary">{t('sMoveUp')}</button></td>}
                            {full && <td><button className="btn btn-success">{t('sCall')}</button></td>}
                        </tr> 
                        <tr key="4">
                            <td>096-444-44-44</td>
                            <td>{setTime(135)}</td>
                            {full && <td></td>}
                            {full && <td><button className="btn btn-warning">{t('sDelete')}</button></td>}
                            {full && <td><button className="btn btn-dark">{t('sMoveDown')}</button></td>}
                            {full && <td><button className="btn btn-primary">{t('sMoveUp')}</button></td>}
                            {full && <td><button className="btn btn-success">{t('sCall')}</button></td>}
                        </tr> 

                    </tbody>

                </table>

                
            </div>
        </div>

    )
}

export default QueryControl