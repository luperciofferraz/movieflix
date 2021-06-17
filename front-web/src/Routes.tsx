import { Redirect, Router, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Movies from './pages/Movies';
import MovieDetails from './pages/Movies/components/MovieDetails';
import Auth from './pages/Auth';
import history from './core/utils/history';

const Routes = () => (

    <Router history={history}>
        
        <Navbar />

        <Switch>

            <Route path="/" exact>
                <Auth />
            </Route>

            <Route path="/movies" exact> 
                <Movies />
            </Route>

            <Route path="/movies/:movieId"> 
                <MovieDetails />
            </Route>

            <Redirect from="/auth" to="/auth/login" exact />
            
            <Route path="/auth"> 
                <Auth />
            </Route>

        </Switch>
    </Router>

);

export default Routes;

