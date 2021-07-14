import MovieInfoLoader from '../Loaders/MovieInfoLoader';
import MovieDescriptionLoader from '../Loaders/MovieDescriptionLoader';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import './styles.scss';
import { Movie } from '../../types/Movie';

type Props = {

    movie?: Movie;
    isLoading: boolean;
    descriptionAsEditorState: EditorState
    
}

const MovieDetailsCard = ( { movie, isLoading, descriptionAsEditorState }: Props) => (

    <div className="card-base border-radius-10">

        <div className="movie-details-info">

            {isLoading ? <MovieInfoLoader /> : (

                <div className="movie-details-card">

                    <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-image" />

                </div>
            )}

            <div className="movie-details-card">
                {isLoading ? <MovieDescriptionLoader /> : (

                    <>
                        <div className="movie-info-fields">

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

);

export default MovieDetailsCard;