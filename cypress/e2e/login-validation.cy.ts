describe('Login fails with wrong credentials', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/login')
      cy.get('#login-button').trigger('click')
      cy.get('#error-message').contains("Kunne ikke logge inn!")
      
      cy.get('#email-input').type('en bruker som ikke finnes')
      cy.get('#login-button').trigger('click')
      cy.get('#error-message').contains("Kunne ikke logge inn!")

      cy.get('#password-input').type('hei')
      cy.get('#login-button').trigger('click')
      cy.get('#error-message').contains("Kunne ikke logge inn!")
    })
  })