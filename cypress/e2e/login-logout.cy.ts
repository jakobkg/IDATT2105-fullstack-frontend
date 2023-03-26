describe('Loads items and views it in detailed mode', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/login')
      cy.get('#email-input').type('ole@nordmann.no')
      cy.get('#password-input').type('ole123')
      cy.get('#login-button').trigger('click')

      cy.get('#logout-button').trigger('click')
    })
  })