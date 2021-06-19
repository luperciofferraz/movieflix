import { makePrivateRequest } from '../../../../core/utils/request';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getSessionData } from '../../../../core/utils/auth';
import BaseForm from '../BaseForm';
import './styles.scss';

export type ReviewData = {
    text: string;
    movieId: number;
    userId: number;
}

type ParamsType = {
    movieId: string;
}

const Form = () => {

    const { register, handleSubmit, formState: { errors }  } = useForm<ReviewData>();
    const { movieId } = useParams<ParamsType>(); 
    const userId = getSessionData().userId;

    const onSubmit = (data: ReviewData) => {

        data.movieId = parseInt(movieId);
        data.userId = userId;
      
        makePrivateRequest({ url: '/reviews', method: 'POST', data });        
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <BaseForm>

                    <div>

                        <textarea 
                            rows={4}
                            className={`input-base ${errors.text ? 'is-invalid' : ''} `} 
                            placeholder="Deixe sua avaliação aqui"
                            {...register("text", {required: "Campo obrigatório"})}
                        />

                        {errors.text && (
                        
                            <div className="invalid-feedback">
                                {errors.text.message}
                            </div>
                        
                        )}

                    </div>

            </BaseForm>

        </form>

    );

}

export default Form;