import { useEffect, useState } from 'react';
import './styles.scss';
import { Link, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from '../../utils/auth';
import menu from '../../assets/images/menu.svg';

const Navbar = () => {
    
    const [drawerActive, setDrawerActive] = useState(false);

    const [currentUser, setCurrentUser] = useState('');

    const location = useLocation();

    useEffect( () => {

        const currentUserData = getAccessTokenDecoded();

        setCurrentUser(currentUserData.user_name);

    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

        event.preventDefault();
        logout();

    };
    
    return (

        <nav className = "bg-primary main-nav">

            <Link to="/" className="nav-logo-text">
                <h4>MovieFlix</h4>
            </Link>

            <button 
                className="menu-mobile-btn" 
                type="button"  
                onClick = {() => setDrawerActive(!drawerActive)}
            >

                <img src={menu} alt="Mobile Menu"/>

            </button>

            <div className="user-info-dnone text-right">

                {currentUser && (
                    <>
                        {currentUser}
                        <a href="#logout" 
                           className="nav-link active d-inline"
                           onClick={ (e) => {
                               
                                setDrawerActive(false);

                                handleLogout(e);
                        
                            } }
                        >
                            LOGOUT
                        </a>

                    </>
                )}

            </div>

        </nav>
    )
};

export default Navbar;