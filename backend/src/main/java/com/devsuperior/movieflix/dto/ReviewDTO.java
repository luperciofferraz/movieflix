package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class ReviewDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	
	private String text;
	
	private User user;
	
	public ReviewDTO() {
		
	}

	public ReviewDTO(Long id, String text, User user) {
		this.id = id;
		this.text = text;
		this.user = user;
	}

	public ReviewDTO(Review review) {
		this.id = review.getId();
		this.text = review.getText();
		this.user = review.getUser();
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
}
