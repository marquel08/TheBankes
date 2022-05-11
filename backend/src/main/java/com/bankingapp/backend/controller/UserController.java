package com.bankingapp.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.bankingapp.backend.model.User;
import com.bankingapp.backend.service.UserService;

@CrossOrigin(origins = "http://localhost:8081")

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService userService;

	// retrieve all users

	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUsers(@RequestParam(required = false) String first_name) {
		try {
			List<User> users = new ArrayList<User>();
			if (first_name == null)
				userService.findAll().forEach(users::add);
			else
				userService.findById(users).forEach(users::add);
			if (users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(users, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// retrieve user by id

	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
		Optional<User> userOpt = userService.findById(id);

		if (userOpt.isPresent()) {
			return new ResponseEntity<>(userOpt.get(), HttpStatus.OK);
		} else {

			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// login
	@PostMapping(value = "/login")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<User> loginUser(@RequestBody String username, @RequestBody String password) {
		User user = userService.loginUser(username, password);
		return ResponseEntity.ok(user);
	}

	// logout
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<String> logoutUser(@RequestParam String username) {
		userService.logoutUser(username);
		return ResponseEntity.ok("You are now logged out");

	}

	// add new user

	@PostMapping("/add")
	public ResponseEntity<?> add(@Validated @RequestBody User user) {
		try {
			userService.add(user);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// delete user id

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
		Optional<User> optUser = userService.delete(id);

		if (optUser.isPresent()) {
			return new ResponseEntity<User>(optUser.get(), HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
	}

	// update users

	@PutMapping("/update")
	public ResponseEntity<?> update(@RequestBody User user) {
		Optional<User> optUser = userService.update(user);

		if (optUser.isPresent()) {
			return new ResponseEntity<User>(optUser.get(), HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
	}
}
