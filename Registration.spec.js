describe("Smoke Test Suite", () => {
  it("Registration to the My Store", () => {
    
    // Navigate to My Store
    cy.visit('http://automationpractice.com/index.php');

    //Click [Sign in]
    cy.contains('Sign in').click();

    //'Login - My Store' page is displayed
    cy.url().should('include', 'authentication&back=my-account')

    //Enter data
    cy.get("#email_create").type("test777@email.com");

    //Click [Create an account]
    cy.get('#SubmitCreate').click();

    //Check the check-box 'Title'
    cy.get('#id_gender1').click();

    //Enter data
    cy.get('#customer_firstname').type("TestFirstName");
    cy.get('#customer_lastname').type("TestLastName");
    cy.get('#passwd').type("TestPassword123");
    cy.get('#days').select(1).should('have.value', '1');
    cy.get('#months').select(1).should('have.value', '1');
    cy.get('#years').select(29).should('have.value', '1994');
    cy.get('#newsletter').click();
    cy.get('#optin').click();
    cy.get('#firstname').type("TestFirstName");
    cy.get('#lastname').type("TestLastName");
    cy.get('#company').type("TestCompany");
    cy.get('#address1').type("TestAddress1");
    cy.get('#address2').type("TestAddress2");
    cy.get('#city').type("TestCity");
    cy.get('#id_state').select(1).should('have.value', '1');
    cy.get('#postcode').type("12345");
    cy.get('#id_country').select(1).should('have.value', '21');
    cy.get('#other').type("TestAdditionalInformation");
    cy.get('#phone').type("0123456789");
    cy.get('#phone_mobile').type("9876543210");
    cy.get('#alias').type("testalias@address.com");
	cy.get('#submitAccount').click();
  });
});
