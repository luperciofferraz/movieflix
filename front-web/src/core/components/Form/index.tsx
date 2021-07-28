import { makePrivateRequest } from '../../utils/request';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getSessionData } from '../../utils/auth';
import BaseForm from '../BaseForm';
import { Review } from '../../types/Movie';
import './styles.scss';

export type ReviewData = {
    text: string;
    movieId: number;
    userId: number;
}

type ParamsType = {
    movieId: string;
}

type ParamsForm = {
    listaReviews: Review[] | undefined;
    setListaReviews: Function;
}

let listaRetorno: Review[];

const Form = ( {listaReviews, setListaReviews}: ParamsForm) => {

    const { reset, handleSubmit, register, formState: { errors }  } = useForm<ReviewData>();
    const { movieId } = useParams<ParamsType>(); 
    const userId = getSessionData().userId;

    const onSubmit = (data: ReviewData) => {

        reset();

        data.movieId = parseInt(movieId);
        data.userId = userId;
      
        makePrivateRequest({ url: '/reviews', method: 'POST', data })
        .then(response => 
            {
                listaRetorno = [];
                listaRetorno.push(response.data);
                listaReviews?.forEach(review => listaRetorno.push(review));
                setListaReviews(listaRetorno);
            });        
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <BaseForm>

                    <div>

                        <textarea 
                            rows={4}
                            className={`input-base ${errors.text ? 'is-invalid' : ''} `} 
                            placeholder="Deixe sua avaliação aqui"
                            {...register("text", {required: "Campo obrigatório!"})}
                        />

                        {errors.text && (
                        
                            <div className="errorText">
                                {errors.text.message}
                            </div>
                        
                        )}

                    </div>

            </BaseForm>

        </form>

    );

}

export default Form;