package com.bankingapp.backend.service;

import java.util.List;
import java.util.Optional;

import com.bankingapp.backend.model.User;

public interface UserService {

	public List<User> findAll();
	
	public Optional<User> findByEmail(String email);
	
	public void add(User user);
	
	public Optional<User> update(User user);
	
	public Optional<User> delete(Long id);
}
