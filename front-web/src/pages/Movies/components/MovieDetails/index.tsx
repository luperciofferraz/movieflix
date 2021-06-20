import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie, Review } from '../../../../core/types/Movie';
import { makePrivateRequest } from '../../../../core/utils/request';
import { isAllowedByRole } from '../../../../core/utils/auth';
import MovieInfoLoader from '../../components/Loaders/MovieInfoLoader';
import MovieDescriptionLoader from '../../components/Loaders/MovieDescriptionLoader';
import { Editor } from "react-draft-wysiwyg";
import { stateFromHTML } from 'draft-js-import-html';
import { EditorState } from 'draft-js';
import Form from '../Form';
import { ReactComponent as StarImage } from '../../../../core/assets/images/star.svg';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [listaReviews, setListaReviews] = useState<Review[]>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);
    const contentState = stateFromHTML(movie?.synopsis || '');
    const descriptionAsEditorState = EditorState.createWithContent(contentState);

    const getReviews = useCallback(() => {

        setIsLoading(true);

        makePrivateRequest({ url: `/movies/${movieId}` })
        
        .then(response => 
            {
                setMovie(response.data);
                setListaReviews(response.data.reviews);
            }
        )

        .finally(() => setIsLoading(false));

    },[movieId]);

    useEffect(() => {

        getReviews();

    },  [getReviews]);

    return (

        <div className="product-details-container">

            <div className="card-base border-radius-10">

                <div className="product-details-info">

                    {isLoading ? <MovieInfoLoader /> : (

                        <div className="product-details-card">

                            <img src={movie?.imgUrl} alt={movie?.title} className="product-details-image" />

                        </div>
                    )}

                    <div className="product-details-card">
                        {isLoading ? <MovieDescriptionLoader /> : (

                            <>
                                <div className="product-info-fields">

                                    <div className="movie-details-title">
                                        {movie?.title}
                                    </div>

                                    <div className="movie-details-year">
                                        {movie?.year}
                                    </div>

                                    <div className="movie-details-subtitle">
                                        {movie?.subTitle}
                                    </div>

                                </div>

                                <Editor
                                    editorClassName="movie-details-synopsis"
                                    editorState={descriptionAsEditorState}
                                    toolbarHidden
                                    readOnly
                                />

                            </>

                        )}
                    </div>

                </div>

            </div>

            { isAllowedByRole(['ROLE_MEMBER']) ?                   
                <Form listaReviews={listaReviews} setListaReviews={setListaReviews} /> : <></>
            }

            {listaReviews?.length ?

            <div className="movie-reviews-container" >

                {listaReviews?.map( review => (
                    <div key={review.id}>
                        <div className="movie-reviews-autor">
                            <div className="movie-reviews-star-image">
                                <StarImage />
                            </div>
                            <div className="movie-reviews-autor-name">
                                {review.user.name}
                            </div>
                        </div>
                        <div className="movie-reviews-text">
                            {review.text}
                        </div>
                    </div>
                ))}

            </div>

            : <></>

            }

        </div>

    );

};

export default MovieDetails;