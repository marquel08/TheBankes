package main;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class App {
	
	static Scanner scannerInput = new Scanner(System.in);
	static String scannerCheck;
	static int scannerNumber;
	
	// Hard-coded values; replace with database
	static String username = "jakedoe12";
	static String password = "password123!";
	static String email = "jakedoe12@email.com";
	
	static String adminUser = "admin";
	static String adminPass = "admin123!";
	static String adminEmail = "admin@email.com";
	

	public static void main(String[] args) {
		
		// Hard-coded values; replace with DB values
		BankAccount adminOne = new BankAccount("admin1", "admin123!", "admin1@email.com", "Admin", "1", "Admin");
		BankAccount adminTwo = new BankAccount("admin2", "admin123!", "admin2@email.com", "Admin", "2", "Admin");
		BankAccount accOne = new BankAccount("jakedoe12", "password123!", "jakedoe12@email.com", "Jake", "Doe", "Normal");
		BankAccount accTwo = new BankAccount("janedoe13", "pass123!", "janedoe13@email.com", "Jane", "Doe", "Premium");
		
		List<BankAccount> Accounts = new ArrayList<BankAccount>();
		Accounts.add(adminOne);
		Accounts.add(adminTwo);
		Accounts.add(accOne);
		Accounts.add(accTwo);
		
		
		System.out.println("Welcome to The Bankers banking application! You need to login to use this application. Please enter the corresponding numerical command to get started.");
		
		do {
			System.out.println("1 - LOGIN"
				+ "\n2 - RECOVER USERNAME"
				+ "\n3 - RECOVER PASSWORD"
				+ "\n4 - CREATE ACCOUNT"
				+ "\n5 - EXIT APP");
			
			scannerCheck = scannerInput.nextLine();
			
			switch(scannerCheck) {
				
			// 1 - LOGIN
				case "1": {
					
					do {
						System.out.print("\nPlease enter your username: ");
						scannerCheck = scannerInput.nextLine();
						
						if (!scannerCheck.equals(username) && !scannerCheck.equals(adminUser)) {
							System.out.println("I'm sorry, that username was not found in our database. Please try again.");
						}
						else if (scannerCheck.equals(username)) {
							System.out.print("Please enter your password: ");
							scannerCheck = scannerInput.nextLine();
							if (scannerCheck.equals(password)) {
								System.out.println("\nHello, " + username + ".");
								Login.loginScreen();
							}
							else {
								System.out.println("I'm sorry, that password was incorrect.");
							}
						}
						else {
							System.out.print("Admin login detected. Please enter the password: ");
							scannerCheck = scannerInput.nextLine();
							if (scannerCheck.equals(adminPass)) {
								System.out.println("\nHello, " + adminUser + ".");
								AdminLogin.adminScreen();
							}
							else {
								System.out.println("I'm sorry, that password was incorrect. Please contact HR for the password.");
							}
						}
						
					}while (!scannerCheck.equals(username) || !scannerCheck.equals(adminUser));
					
					
				}
				
			// 2 - RECOVER USERNAME
				case "2": {
					
					System.out.println("\nPlease enter the email associated with the username.");
					scannerCheck = scannerInput.nextLine();
					System.out.println("Thank you. If you have an account associated with that email in our system, we will send an email shortly.");
					
				}
				
			// 3 - RECOVER PASSWORD
				case "3": {
					System.out.println("\nPlease enter the username associated with the password.");
					scannerCheck = scannerInput.nextLine();
					System.out.println("Thank you. If you have an account associated with that email in our system, we will send an email shortly.");
				}
				
			// 4 - CREATE ACC
				case "4": {
					
				}
			// 5 - EXIT APP
				case "5": {
					
					break;
				}
				default: {
					System.out.println("I'm sorry, I did not understand that command. Please try again with a valid command.\n");
				}
			}
			
		} while (!scannerCheck.equals("5"));
		
		System.out.println("\nThank you for using The Bankers banking app. Goodbye.");
		scannerInput.close();
	}
	
	public static void mainCaller() {
		//calls the main method for other classes
		main(null);
	}
}
