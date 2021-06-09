import { Redirect, Router, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Movies from './pages/Movies';
import MovieDetails from './pages/Movies/MovieDetails';
import Login from './pages/Auth/components/Login';
import history from './core/utils/history';

const Routes = () => (

    <Router history={history}>
        
        <Navbar />

        <Switch>

            <Route path="/" exact>
                <Login />
            </Route>

            <Route path="/movies" exact> 
                <Movies />
            </Route>

            <Route path="/movies/:movieId"> 
                <MovieDetails />
            </Route>

            <Redirect from="/auth" to="/auth/login" exact />
            
            <Route path="/auth"> 
                <Login />
            </Route>

        </Switch>
    </Router>

);

export default Routes;

