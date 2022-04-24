describe("Smoke Test Suite", () => {
  it("Log in to the My Store", () => {
    
    // Navigate to My Store
    cy.visit('http://automationpractice.com/index.php');

    //Click [Sign in]
    cy.contains('Sign in').click();

    //'Login - My Store' page is displayed
    cy.url().should('include', 'authentication&back=my-account')
	
	 //Enter data
    cy.get("#email").type("test345@email.com");
	 cy.get("#passwd").type("TestPassword123");
	 
	 //Click [Sign in]
    cy.get('#SubmitLogin').click();
	cy.visit('http://automationpractice.com/index.php?controller=my-account');
	
	
	 //Click [Sign out]
	 cy.contains('Sign out').click();
	 cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');

	
	
	  });
});