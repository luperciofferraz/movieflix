import './styles.scss';
import { Movie } from '../../../core/types/Movie';

type Props = {

    movie: Movie;
    
}


const MovieCard = ( { movie }: Props) => (

    <div className="card-base border-radius-10 product-card"> 

        <img src={movie.imgUrl} alt={movie.title} className="product-card-image" />

        <div className="product-info">

            <h6 className="product-name">

                {movie.title}

            </h6>

            <h5 className="product-year">

                {movie.year}

            </h5>

            <h5 className="product-subtitle">

                {movie.subTitle}

            </h5>

        </div>

    </div>

);

export default MovieCard;