import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../core/assets/images/arrow.svg';
import { Movie } from '../../../core/types/Movie';
import { makePrivateRequest } from '../../../core/utils/request';
import MovieInfoLoader from '../Loaders/MovieInfoLoader';
import MovieDescriptionLoader from '../Loaders/MovieDescriptionLoader';
import { Editor } from "react-draft-wysiwyg";
import { stateFromHTML } from 'draft-js-import-html';
import { EditorState } from 'draft-js';
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

            <div className="card-base border-radius-20 product-details">

                <Link to="/movies" className="product-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="product-details-info">

                    <div className="product-image-price">

                    {isLoading ? <MovieInfoLoader /> : (
                        <>

                            <div className="product-details-card text-center">

                                <img src={movie?.imgUrl} alt={movie?.title} className="product-details-image" />

                            </div>

                            <div className="product-info-fields">

                                <h1 className="product-details-name">
                                    {movie?.title}
                                </h1>

                            </div>
                            
                        </>
                    )}

                    </div>

                    <div className="product-details-card">
                        {isLoading ? <MovieDescriptionLoader /> : (

                            <>
                                <h1 className="product-description-title">Synopsis do Filme</h1>
                                <Editor
                                    editorClassName="product-description-text"
                                    editorState={descriptionAsEditorState}
                                    toolbarHidden
                                    readOnly
                                />
                            </>

                        )}
                    </div>

                </div>

            </div>

        </div>

    );

};

export default MovieDetails;