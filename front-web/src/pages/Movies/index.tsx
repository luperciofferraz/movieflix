import { useCallback, useEffect, useState } from 'react';
import './styles.scss';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../core/utils/request';
import { Genre, MoviesResponse } from '../../core/types/Movie';
import MovieCardLoader from '../Movies/Loaders/MovieCardLoader';
import Pagination from '../../core/components/Pagination';
import MovieFilter from '../../core/components/MovieFilter';

const Movies = () => {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const [genre, setGenre] = useState<Genre>();

    const getMovies = useCallback(()=> {

        const params = {
            page: activePage,
            linesPerPage: 3,
            genreId: genre?.id
        }

        setIsLoading(true);
        makeRequest({ url: '/movies', params })
            .then(response => {
                setMoviesResponse(response.data)
                console.log(response.data);
            
            })
            .finally(() => {
                setIsLoading(false) 
            });

    }, [activePage, genre]);

    useEffect( () => {
        getMovies();
    }, [getMovies]);

    const handleChangeGenre = (genre: Genre) => {
        setActivePage(0);
        setGenre(genre);
    }

    return    (

        <div className="catalog-container">

            <div className="filter-container">

                <h1 className="catalog-title">
                    Catálogo de Filmes
                </h1>
                <MovieFilter 
                    genre={genre}
                    handleChangeGenre = {handleChangeGenre}
                />

            </div>

            <div className="catalog-products">

                {isLoading ? <MovieCardLoader /> : (
                    
                    moviesResponse?.content.map( movie => (

                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
    
                    ))
                )}
            </div>

            {moviesResponse && (
            
                <Pagination 
                    totalPages={moviesResponse.totalPages} 
                    onChange={page => setActivePage(page)}
                />
            )} 

        </div>

    )

};

export default Movies;

