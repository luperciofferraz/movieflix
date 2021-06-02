package com.devsuperior.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private MovieRepository movieRepository;

	@Transactional(readOnly = true)
	public Page<ReviewDTO> findAll(PageRequest pageRequest) {
	
		Page<Review> list = repository.findAll(pageRequest);
		
		return list.map(x -> new ReviewDTO(x));
	}

	@Transactional(readOnly = true)
	public ReviewDTO findById(Long id) {
		
		Optional<Review> obj = repository.findById(id);
		
		Review entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		
		return new ReviewDTO(entity);
		
	}

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		
		Review entity = new Review();
		
		User user = userRepository.getOne(dto.getUser().getId());
		entity.setUser(user);
		
		Movie movie = movieRepository.getOne(dto.getMovie().getId());
		entity.setMovie(movie);
		
		entity.setText(dto.getText());
		
		entity = repository.save(entity);
		
		return new ReviewDTO(entity);
	}
}
