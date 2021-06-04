package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "Campo obrigatório")
	private String text;
	
	private Long userId;
	
	private Long movieId;
	
	private UserDTO user;
	
	public ReviewDTO() {
		
	}

	public ReviewDTO(Long id, String text, Long userId, Long movieId) {
		this.id = id;
		this.text = text;
		this.userId = userId;
		this.movieId = movieId;
	}

	public ReviewDTO(Review review) {
		this.id = review.getId();
		this.text = review.getText();
		this.userId = review.getUser().getId();
		this.movieId = review.getMovie().getId();
		this.user = new UserDTO(review.getUser());
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

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
}
