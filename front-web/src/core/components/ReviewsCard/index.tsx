import './styles.scss';
import { Review } from '../../types/Movie';
import { ReactComponent as StarImage } from '../../../core/assets/images/star.svg';

type Props = {
    listaReviews: Review[];
}

const ReviewsCard = ( { listaReviews }: Props) => (

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

);

export default ReviewsCard;