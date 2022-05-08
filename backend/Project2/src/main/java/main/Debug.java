package main;

import java.util.Scanner;

public class Debug {
	
	static String test1 = "jakedoe12";
	static Scanner scan = new Scanner(System.in);
	static String test2;

	public static void main(String[] args) {
		
		System.out.print("Enter something to be tested: ");
		test2 = scan.nextLine();
		System.out.println(test2.equals(test1));
	}

}
