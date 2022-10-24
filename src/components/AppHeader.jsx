import { Link } from "react-router-dom";
import AppContainer from './UI/AppContainer'

function AppHeader() {
    return (
        <header className="header">
            <AppContainer>
                <div className="header__container">
                    <Link className="header__link" to="/">
                        <h1 className="header__h1">
                            Главная
                        </h1>
                    </Link>
                    <nav className="header__nav">
                        <ul className="header__navigation">
                            <li className="header__navigation_item">
                                <Link className="header__link" to="/login">
                                    Войти
                                </Link>
                            </li>
                            <li className="header__navigation_item">
                                <Link className="header__link" to="/profile/1">
                                    Профиль
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </AppContainer>
        </header>
    )
}

export default AppHeader;