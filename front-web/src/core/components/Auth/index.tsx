import ButtonIcon from '../ButtonIcon';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthCard from '../AuthCard';
import './styles.scss';
import { makeLogin } from '../../utils/request';
import { saveSessionData } from '../../utils/auth';

type FormData = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Auth = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const [hasError, setHasError] = useState(false);

    const history = useHistory();

    let location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: "/movies" } };

    const onSubmit = (data: FormData) => {
        makeLogin(data)
            .then(response => {
                setHasError(false);
                saveSessionData(response.data);
                history.replace(from);
            })
            .catch( () => {
                setHasError(true);
            })
    }

    return (

        <AuthCard title="login" >
            
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">

                <div className="margin-bottom-30">
                   
                    <input 
                        type="email"
                        className={`form-control input-base ${errors.username ? 'is-invalid' : ''} `} 
                        placeholder="Email"
                        {...register("username", { required: "Campo obrigatório",
                                                   pattern: 
                                                   {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Email inválido"
                                                   }
                                                 }
                                    )
                        }
                    />

                    {errors.username && (
                    
                        <div className="errorText d-block">
                            {errors.username.message}
                        </div>

                    ) }

                </div>

                <div className="margin-bottom-30">

                    <input 
                        type="password" 
                        className={`form-control input-base ${errors.password ? 'is-invalid' : ''} `} 
                        placeholder="Senha"
                        {...register("password", {required: "Campo obrigatório"})}
                    />

                    {errors.password && (
                    
                        <div className="errorText d-block">
                            {errors.password.message}
                        </div>
                    
                    )}

                </div>

                {hasError && (
                    <div className="errorText">
                        Usuário ou senha inválidos!
                    </div>
                )}

                <div className="login-submit" >
                    <ButtonIcon text="Logar" />
                </div>

            </form>                        

        </AuthCard>

    );

};

export default Auth;