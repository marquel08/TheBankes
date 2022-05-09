package com.bankingapp.backend.service;

import java.util.List;
import java.util.Optional;

import com.bankingapp.backend.model.User;

public interface UserService {

	public List<User> findAll();
	
	public Optional<User> findById(Long id);
	
	public void add(User user);
	
	public Optional<User> update(User user);
	
	public Optional<User> delete(Long id);

	public Iterable<User> findById(List<User> users);

	public User loginUser(String username, String password);

	public void logoutUser(String username);
}
