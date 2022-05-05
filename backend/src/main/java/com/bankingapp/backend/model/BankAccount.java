package com.bankingapp.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "account_holder")
public class BankAccount {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USERNAME")
    private String username;
    @Column(name = "PASSWORD")
    private String password;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "FIRST_NAME")
    private String firstName;
    @Column(name = "LAST_NAME")
    private String lastName;
    @Column(name = "ACCTYPE")
    private String accType;
    @Column(name = "ISADMIN")
    private boolean isAdmin;

    public BankAccount(String username, String password, String email, String firstName, String lastName,
            String accType, boolean isAdmin) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.accType = accType;
        this.isAdmin = isAdmin;
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
    
    // GETTER & SETTER -  IS ADMIN?
    public boolean getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
    }

    @Override
    public String toString() {
        return "[USERNAME: " + username + "\nPASSWORD: " + password + "\nEMAIL: " + email + "\nFIRST NAME: " + firstName
                + "\nLAST NAME: " + lastName + "\nACCOUNT TYPE: " + accType + + "\nIS AN ADMIN?: " + isAdmin + "]";
    }

}
