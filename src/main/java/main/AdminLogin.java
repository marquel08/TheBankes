package main;

import java.util.Scanner;

public class AdminLogin {
	
	static Scanner scannerInput = new Scanner(System.in);
	static String scannerCheck;
	static int scannerNumber;
	
	public static void adminScreen() {
System.out.println("Please enter one of the following commands: ");
		
		do {
			System.out.println("1 - MANAGE USERS"
				+ "2 - VIEW ALL ACCOUNTS"
				+ "3 - SEND OVERDRAFT INVOICE"
				+ "4 - LOGOUT");
			
			scannerCheck = scannerInput.nextLine();
			
			switch(scannerCheck) {
				
			// 1 -MANAGE USERS
				case "1": {
					
				}
				
			// 2 - VIEW ACCs
				case "2": {
					
				}
				
			// 3 - SEND INVOICE
				case "3": {
					
				}
				
			// 4 - LOGOUT
				case "4": {
					break;
				}
				default: {
					System.out.println("I'm sorry, I did not understand that command. Please try again with a valid command.\n");
				}
			}
			
		} while (!scannerCheck.equals("4"));
		
		System.out.println("\nThank you for your time, Admin. Have a nice day.\n");
		App.mainCaller();
	}

}
