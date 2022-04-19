package main;

import java.util.Scanner;

public class App {
	
	static Scanner scannerInput = new Scanner(System.in);
	static String scannerCheck;
	static int scannerNumber;
	static double accBalance = 0;
	static double withdrawDeposit;
	
	// Hard-coded values; replace with database
	static String username = "jakedoe12";
	static String password = "password123!";
	static String email = "jakedoe12@email.com";
	

	public static void main(String[] args) {
		
		System.out.println("Welcome to The Bankers banking application! You need to login to use this application. Please enter the corresponding numerical command to get started.");
		
		do {
			System.out.println("1 - LOGIN"
				+ "\n2 - RECOVER USERNAME"
				+ "\n3 - RECOVER PASSWORD"
				+ "\n4 - CREATE ACCOUNT"
				+ "\n5 - EXIT APP");
			
			scannerNumber = scannerInput.nextInt();
			
			if (scannerNumber < 5 || scannerNumber > 1) { // add check if entered command value are letters; change to switch?
				System.out.println("I'm sorry, that was not a valid command. Please try again.\n");
			}
			else {
				switch(scannerNumber) {
					case 1: {
						do {
							System.out.print("Please enter your username: ");
							scannerCheck = scannerInput.nextLine();
							
							if (scannerCheck.equals("jakedoe123")) { //hard-coded; replace with DB
								System.out.print("Please enter your password: ");
								scannerCheck = scannerInput.nextLine();
								
								if (scannerCheck.equals("password123!")) { //hard-coded; replace with DB
									System.out.println("\nWelcome, " + username + ". How can we help you today? Enter any of the following numerical commands to get started.");
									
									break;
								}
								else {
									System.out.println("I'm sorry, that password was incorrect. Please try again.\n");
								}
							}
							else {
								System.out.println("I'm sorry, that username was not found in our system. Please try again.\n");
							}
						
						}
						
						while(!scannerCheck.equals("jakedoe123"));
						
						System.out.println("1 - CHECK BALANCE"
								+ "\n2 - PAY DUES"
								+ "\n3 - WITHDRAW"
								+ "\n4 - DEPOSIT"
								+ "\n5 - TRANSFER"
								+ "\n6 - CHANGE USER INFO"
								+ "\n7 - LOGOUT");
						
						switch(scannerNumber) {
							case 1: {
								// CHECK BALANCE CODE
							}
							case 2: {
								// PAY DUES CODE
							}
							case 3: {
								// WITHDRAW MONEY CODE
							}
							case 4: {
								// DEPOSIT MONEY CODE
							}
							case 5: {
								// CHECK BALANCE CODE
							}
							case 6: {
								// UPDATE USER INFO CODE
							}
							case 7: {
								// LOGOUT CODE
							}
							default: {
								System.out.println("I'm sorry, that was not a valid command. Please try again.");
							}
						}
					}
					case 2: {
						System.out.println("Please enter the associated email to your username.");
						scannerCheck = scannerInput.nextLine();
						
						//enter code
						
					}
					case 3: {
						System.out.println("Please enter the associated username to recover your password.");
						scannerCheck = scannerInput.nextLine();
						
						//enter code
					}
					case 4: {
						System.out.print("To create an account, please enter your email, a username with letters and numbers, and a password that is at least 6 characters long and contains a number and a unique symbol."
								+ "\nEmail: ");
						scannerCheck = scannerInput.nextLine();
						
						//enter code
						
					}
					default: {
						System.out.println("I'm sorry, that was not a valid command. Please try again.");
					}
				}
			}
		}
		while (scannerNumber != 5);
		
		System.out.println("\nThank you for using The Bankers banking application. Goodbye.");
		scannerInput.close();
		
	}

}
