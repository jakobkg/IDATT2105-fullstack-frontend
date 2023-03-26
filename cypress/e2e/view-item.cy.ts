describe('Loads items and views it in detailed mode', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#hallo').trigger('click')
  })
})