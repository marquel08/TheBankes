package main;

public class BankAccount {
	
	private String username;
	private String password;
	private String email;
	private String firstName;
	private String lastName;
	private String accType;
	
	public BankAccount(String username, String password, String email, String firstName, String lastName, String accType) {
		this.username = username;
		this.password = password;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.accType = accType;
	}

	// GETTER & SETTER - USERNAME
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	// GETTER & SETTER - PASSWORD
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	// GETTER & SETTER - EMAIL
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	// GETTER & SETTER - FIRST NAME
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	// GETTER & SETTER - LAST NAME
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	// GETTER & SETTER - ACCOUNT TYPE
	public String getAccType() {
		return accType;
	}
	public void setAccType(String accType) {
		this.accType = accType;
	}
	
	@Override
	public String toString() {
		return "[USERNAME: " + username + "\nPASSWORD: " + password + "\nEMAIL: " + email + "\nFIRST NAME: " + firstName + "\nLAST NAME: " + lastName + "\nACCOUNT TYPE: " + accType + "]";
	}

}
