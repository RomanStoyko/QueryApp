import QueryControl from './QueryControl'
import { useTranslation } from 'react-i18next'

function AllQuery(){

    const { t } = useTranslation();

    const sYaTsZ = t('sYaTsZ')
    const sHTsZ = t('sHTsZ')
    const sNoTsZ = t('sNoTsZ')
    const sZhTsZ = t('sZhTsZ')
    const sNaTsZ = t('sNaTsZ')

    return(
        <div className="container">
           
           <div className="container text-center">
            <div className="row">
                <div className="col">
                    <QueryControl  id={sYaTsZ} full={false}/>
                </div>
                <div className="col">
                    <QueryControl id={sHTsZ} full={false}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <QueryControl id={sNoTsZ} full={false}/>
                </div>
                <div className="col">
                    <QueryControl id={sZhTsZ} full={false}/>
                </div>
                </div>
            <div className="row">
                <div className="col">
                    <QueryControl id={sNaTsZ} full={false}/>
                </div>
            </div>
            </div>
       
        </div>

    )
}

export default AllQuery