import { useTranslation } from 'react-i18next'

function ErrorComponent(){

    const { t } = useTranslation();
    
    return(
        <div className="ErrorComponent">
            <h1>{t('sErorrTitle')}</h1>
            <div>
            {t('sErorrText')}
            </div>
        </div>

    )
}

export default ErrorComponent