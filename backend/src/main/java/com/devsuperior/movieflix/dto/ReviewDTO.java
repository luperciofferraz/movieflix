package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class ReviewDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "Campo obrigatório")
	private String text;
	
	private User user;
	
	private Movie movie;
	
	public ReviewDTO() {
		
	}

	public ReviewDTO(Long id, String text, User user, Movie movie) {
		this.id = id;
		this.text = text;
		this.user = user;
		this.movie = movie;
	}

	public ReviewDTO(Review review) {
		this.id = review.getId();
		this.text = review.getText();
		this.user = review.getUser();
		this.movie = review.getMovie();
	}

	public Long getId() {
		return id;
	}

	public String getText() {
		return text;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setText(String text) {
		this.text = text;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}
}
