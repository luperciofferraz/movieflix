import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../../core/types/Movie';
import { makePrivateRequest } from '../../../core/utils/request';
import MovieInfoLoader from '../Loaders/MovieInfoLoader';
import MovieDescriptionLoader from '../Loaders/MovieDescriptionLoader';
import { Editor } from "react-draft-wysiwyg";
import { stateFromHTML } from 'draft-js-import-html';
import { EditorState } from 'draft-js';
import { ReactComponent as StarImage } from '../../../core/assets/images/star.svg';
import './styles.scss';

type ParamsType = {

    movieId: string;

}

const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);
    const contentState = stateFromHTML(movie?.synopsis || '');
    const descriptionAsEditorState = EditorState.createWithContent(contentState);

    useEffect(() => {

        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => 
                {
                    console.log(movieId);
                    console.log(response.data);
                    setMovie(response.data);
                }
            )
            .finally(() => setIsLoading(false));

    }, [movieId]);

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

            {movie?.reviews.length ?

            <div className="movie-reviews-container" >

                {movie?.reviews.map( review => (
                    <div>
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