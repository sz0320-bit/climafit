describe('template spec', () => {
  it('passes', () => {
    cy.wait(5000);
    cy.visit('http://127.0.0.1:5173/')
  })
})