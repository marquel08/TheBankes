package main;

import java.util.Scanner;

public class Login {
	
	static Scanner scannerInput = new Scanner(System.in);
	static String scannerCheck;
	static int scannerNumber;
	
	
	static double checkingBalance = 0; //hard-coded; get from DB
	static double savingsBalance = 0; //hard-coded; get from DB
	static double withdrawDeposit;

	public static void loginScreen() {
		
		System.out.println("Please enter one of the following commands: ");
		
		do {
			System.out.println("1 - VIEW BALANCE"
				+ "\n2 - WITHDRAW"
				+ "\n3 - DEPOSIT"
				+ "\n4 - PAY BILLS"
				+ "\n5 - TRANSFER"
				+ "\n6 - CLOSE ACCOUNT"
				+ "\n7 - LOGOUT");
			
			scannerCheck = scannerInput.nextLine();
			
			switch(scannerCheck) {
				
			// 1 - VIEW BALANCE
				case "1": {
					System.out.println("Your current checking account balance is $" + checkingBalance + "."
							+ "\nYour current savings account balance is $" + savingsBalance + ".");
					System.out.println("\nWhat would you like to do now?");
				}
				
			// 2 - RECOVER USERNAME
				case "2": {
					
				}
				
			// 3 - RECOVER PASSWORD
				case "3": {
					
				}
				
			// 4 - PAY BILLS/OVERDRAFT FEES
				case "4": {
					
				}
			// 5 - TRANSFER MONEY TO ANOTHER ACC
				case "5": {
					
					
				}
			// 6 - CLOSE ACC
				case "6": {
					
				}
			// 7 - LOGOUT
				case "7": {
					break;
				}
				default: {
					System.out.println("I'm sorry, I did not understand that command. Please try again with a valid command.\n");
				}
			}
			
		} while (!scannerCheck.equals("5"));
		
		System.out.println("\nThank you for using The Bankers banking app. Have a nice day.\n");
		App.mainCaller();
	}

}
