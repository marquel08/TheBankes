package main;

import java.util.Scanner;

public class Login {
	
	static Scanner scannerInput = new Scanner(System.in);
	static String scannerCheck;
	static Scanner scannerNumber = new Scanner(System.in);
	
	
	static double accBalance = 0; //hard-coded; get from DB
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
					System.out.println("Your current account balance is $" + accBalance + ".");
					System.out.println("\nWhat would you like to do now?");
				}
				
			// 2 - WITHDRAW
				case "2": {
					System.out.println("You have chosen to withdraw funds. How much would you like to withdraw?");
					withdrawDeposit = scannerNumber.nextDouble();
					
					if (withdrawDeposit > accBalance) {
						System.out.println("I'm sorry, you do not have enough funds in your account to make that withdrawal.");
					}
					else {
						accBalance = accBalance - withdrawDeposit;
						System.out.println("Withdrawal completed. Your new account balance is $" + accBalance);
						System.out.println("\nWhat would you like to do now?");
					}
				}
				
			// 3 - DEPOSIT
				case "3": {
					System.out.println("You have chosen to deposit funds. How much would you like to deposit?");
					withdrawDeposit = scannerNumber.nextDouble();
					accBalance = accBalance + withdrawDeposit;
					System.out.println("Deposit completed. Your new account balance is $" + accBalance);
					System.out.println("\nWhat would you like to do now?");
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
			
		} while (!scannerCheck.equals("7"));
		
		System.out.println("\nThank you for using The Bankers banking app. Have a nice day.\n");
		App.mainCaller();
	}

}
