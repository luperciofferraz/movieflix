package com.devsuperior.movieflix.services;

import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.UnprocessableEntityException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private MovieRepository movieRepository;

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {

		Review entity = new Review();

		try {
			
			User user = userRepository.getOne(dto.getUserId());
			entity.setUser(user);
			
			Movie movie = movieRepository.getOne(dto.getMovieId());
			entity.setMovie(movie);
			
			entity.setText(dto.getText());
			
			entity = repository.save(entity);
			
			return new ReviewDTO(entity);
		
		}
		catch(ValidationException e) {
			
			throw new UnprocessableEntityException("O Texto deve ser preenchido");
		}
		
	}
}
