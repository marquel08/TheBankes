package com.bankingapp.backend.service.implement;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bankingapp.backend.model.User;
import com.bankingapp.backend.repository.UserRepository;
import com.bankingapp.backend.service.UserService;

@Service
public class UserServiceImplement implements UserService {

	public static List<User> usersList = new ArrayList<>();

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public Optional<User> findById(Long id) {
		return usersList.stream().filter(user -> user.getId() == id).findFirst();

	}

	@Override
	public void add(User user) {
		userRepository.save(user);

	}

	@Override
	public Optional<User> update(User user) {
		Optional<User> userOpt = usersList.stream().filter(u -> u.getId() == user.getId()).findFirst();

		if (userOpt.isPresent()) {
			User existingUser = userOpt.get();

			if (user.getEmail() != null) {
				existingUser.setEmail(user.getEmail());
			}

			if (user.getPassword() != null) {
				existingUser.setPassword(user.getPassword());
			}

			if (user.getFirstName() != null) {
				existingUser.setFirstName(user.getFirstName());
			}

			if (user.getLastName() != null) {
				existingUser.setLastName(user.getLastName());
			}

			usersList = usersList
					.stream()
					.filter(u -> u.getId() != existingUser.getId())
					.collect(Collectors.toList());

			usersList.add(existingUser);

			return Optional.of(existingUser);
		}

		return Optional.empty();

	}

	@Override
	public Optional<User> delete(Long id) {
		Optional<User> userOpt = userRepository.findById(id);

		if (userOpt.isPresent()) {
			userRepository.delete(userOpt.get());
			return userOpt;
		}

		return Optional.empty();
	}

	@Override
	public Iterable<User> findById(List<User> users) {

		return null;
	}

	@Override
	public User loginUser(String username, String password) {

		return userRepository.findUserByUsernameIgnoreCase(username);
	}

	@Override
	public void logoutUser(String username) {

	}

}
