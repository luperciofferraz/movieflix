import { useEffect, useState } from 'react';
import Select from 'react-select';
import './styles.scss';
import { makePrivateRequest } from '../../utils/request';
import { Genre } from '../../types/Movie';

type Props = {
    genre?: Genre;
    handleChangeGenre: (genre: Genre) => void; 
}

const MovieFilter = ({ genre, handleChangeGenre }: Props) => {

    const [isLoadingGenres, setIsLoadingGenres] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect( () => {

        setIsLoadingGenres(true);
        
        makePrivateRequest({ url: '/genres' })
            
            .then(response => {
                
                setGenres(response.data);
            
            })

            .finally(() => setIsLoadingGenres(false));

        

    }, []);

    return (

        <div className="filter-container">

            <div className="card-base movie-filters-container">

                <Select
                    name="genres"
                    key={`select-${genre?.id}`}
                    value={genre}
                    isLoading={isLoadingGenres}
                    options={genres}
                    getOptionLabel={(option: Genre) => option.name} 
                    getOptionValue={(option: Genre) => String(option.id)} 
                    className="filter-select-container"
                    classNamePrefix="movie-genres-select"
                    placeholder="Gêneros" 
                    inputId="genres"
                    onChange={value => handleChangeGenre(value as Genre)}
                    isClearable
                />

            </div>

        </div>

    );

}

export default MovieFilter;