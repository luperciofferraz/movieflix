import './styles.scss';
import { ReactComponent as AuthImage } from '../../core/assets/images/auth.svg';
import Auth from '../../core/components/Auth';

const Login = () => (

    <div className="auth-container">

        <div className="auth-info">

            <h1 className="auth-info-title">
                Avalie Filmes
            </h1>
                
            <p className="auth-info-subtitle">
                Diga o que você achou do seu filme favorito
            </p>

            <AuthImage />

        </div>

        <div className="auth-content">

            <Auth />

        </div>

    </div>

);

export default Login;

