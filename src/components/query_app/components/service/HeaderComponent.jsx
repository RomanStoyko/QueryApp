import { Link} from 'react-router-dom';
import {  useAuth } from '../../security/AuthContext';
import { useTranslation } from 'react-i18next';


function HeaderComponent(){

    const { t } = useTranslation();

    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated;

    
    const { i18n } = useTranslation();


    function logout(){
        authContext.logout();
    }

    function changeLanguage(e) {
      i18n.changeLanguage(e.target.alt);
    }

    return(
    
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
           
                <div className="row">
                    
                    <nav className="navbar navbar-expand-lg">
                        <div className='navbar' >
                            {/* <button className='bnt-sm'> */}
                                <img  style={{ width: '32px' }}onClick={changeLanguage} value='en' alt="en" src="data:image/png;base64, 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"/>
                            {/* </button> */}
                            {/* <button > */}
                                <img  style={{ width: '32px' }} onClick={changeLanguage} value='ua' alt="ua" src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACoSURBVHic7dqxDYJQAEVRUBfR1kGcwumcwkFsdROxldD/a+I5HeQXN4/uh2kCAAD4Q/PmzfV+DDrGuV1e34+HzYH37jksprH66Luq4lcYoA6oGaAOqBmgDqgZoA6oGaAOqBmgDqgZoA6oGaAOqG2uxJbHtBQho8xnN0IrBqgDagaoA2oGqANqBqgDagaoA2oGqANqBqgDagaoA2rbf4T20ynoAAAAYKQPz+oIU4VaF/EAAAAASUVORK5CYII="/>
                                {/* </button> */}
                        </div>
                        {/* <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="/">LOGO</a> */}
                        <div className="nav-link ms-2 fs-2 fw-bold text-black" >LOGO</div>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/">{t('sHome')}</Link>}
                                </li>
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/query" >{t('sQuery')}</Link>}
                                </li>
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/allquery" >{t('sAllQuery')}</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!isAuthenticated && <Link className="nav-link" to="/login">{t('sLogin')}</Link>}
                            </li>
                            <li className="nav-item fs-5">
                               
                                {isAuthenticated && <Link className="nav-link" to="/" onClick={logout}>{t('sLogout')}</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default HeaderComponent