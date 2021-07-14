import './styles.scss';
import { Movie } from '../../types/Movie';

type Props = {

    movie: Movie;
    
}


const MovieCard = ( { movie }: Props) => (

    <div className="card-base border-radius-10 movie-card"> 

        <img src={movie.imgUrl} alt={movie.title} className="movie-card-image" />

        <div className="movie-info">

            <h6 className="movie-name">

                {movie.title}

            </h6>

            <h5 className="movie-year">

                {movie.year}

            </h5>

            <h5 className="movie-subtitle">

                {movie.subTitle}

            </h5>

        </div>

    </div>

);

export default MovieCard;