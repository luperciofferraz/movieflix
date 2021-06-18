import { makePrivateRequest } from '../../../../core/utils/request';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { getSessionData } from '../../../../core/utils/auth';
import BaseForm from '../BaseForm';
import './styles.scss';

export type FormData = {
    text: string;
    movieId: number;
    userId: number;
}

type ParamsType = {
    movieId: string;
}

const userId = getSessionData().userId;

const Form = () => {

    const { register, handleSubmit, formState: { errors }  } = useForm<FormData>();
    const history = useHistory();
    const { movieId } = useParams<ParamsType>(); 

    const onSubmit = (data: FormData) => {

        data.movieId = parseInt(movieId);
        data.userId = userId;

        makePrivateRequest({ url: '/reviews', method: 'POST', data })
        .then( () => {

            toast.info('Avaliação salva com sucesso!');
            history.push(`/movies/${movieId}`);

        })
        .catch(() => {

            toast.error('Erro ao salvar avaliação!');

        });

    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <BaseForm title="">

            <form onSubmit={handleSubmit(onSubmit)} className="review-form">

                <div className="margin-bottom-30">

                    <textarea
                        className={`form-control input-base ${errors.text ? 'is-invalid' : ''} `} 
                        placeholder="Review"
                        {...register("text", {required: "Campo obrigatório"})}
                    />

                    {errors.text && (
                    
                        <div className="invalid-feedback d-block">
                            {errors.text.message}
                        </div>
                    
                    )}

                </div>

            </form>                        

            </BaseForm>

        </form>

    );

}

export default Form;