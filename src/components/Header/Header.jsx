import { NavLink } from 'react-router-dom';
import h from './Header.module.css'

const Header = (props) => {
    return <header className={h.app_header}>
        <img alt='' src='../kartinki/Header_icon.webp' />
        <div className={h.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>
                    Login
                </NavLink>}

        </div>
    </header>
}

export default Header;