describe('App Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should display "Deploy with cypress" text', () => {
    cy.get('.text-3xl').should('have.text', 'Deploy with cypress')
  })
})
