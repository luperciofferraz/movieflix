import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';

const Auth = () => (

    <div className="auth-container">

        <div className="auth-info">

        </div>

        <div className="auth-content">

            <Switch>
                    
                <Route path="/auth/login" >
                    <Login />
                </Route>
                
            </Switch>

        </div>

    </div>

);

export default Auth;

