import { useEffect, useState } from 'react';
import './styles.scss';
import { Link, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from '../../utils/auth';

const Navbar = () => {
    
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

        <nav className = "main-nav navbar-buttons-icons-color">

            <Link to="/movies" className="nav-logo-text">
                <h4>MovieFlix</h4>
            </Link>

            <div className="user-info-dnone text-right">

                {currentUser && (
                    <div className="button-logout">
                        <a href="#logout" 
                           className="nav-link active" 
                           onClick={ (e) => {
                               
                                handleLogout(e);
                        
                            } }
                        >
                            
                            SAIR
                        </a>

                    </div>
                )}

            </div>

        </nav>
    )
};

export default Navbar;