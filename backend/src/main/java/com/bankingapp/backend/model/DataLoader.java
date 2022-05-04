package com.bankingapp.backend.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.bankingapp.backend.service.UserService;

@Component
public class DataLoader implements CommandLineRunner {

	private final UserService userService;

	public DataLoader(UserService userService) {
		super();
		this.userService = userService;
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		loadData();
	}

	private void loadData() {
		// Transaction transaction1 = new()
		List<Transaction> transactions = new ArrayList<>();
		User user1 = new User(1L, "Homer", "Simpson", 49, "Springfield", transactions);
		userService.add(user1);
		User user2 = new User(2L, "Marge", "Simpson", 48, "Springfield", transactions);
		userService.add(user1);
		User user3 = new User(3L, "Michael", "Scott", 50, "Scranton", transactions);
		userService.add(user1);
		User user4 = new User(4L, "Dwight", "Schrute", 40, "Scranton", transactions);
		userService.add(user1);
	}

}
