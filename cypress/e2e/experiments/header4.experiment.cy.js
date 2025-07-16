describe('Fourth Header Text - Experiment Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should display correct text and styling for fourth header', () => {
    cy.get('.text-3xl')
      .eq(3)
      .should('have.text', 'Deploy with cypress 4')
      .and('have.class', 'ml-8')
      .and('have.class', 'text-3xl')
      .and('have.class', 'font-bold')
      .and('have.class', 'my-4')
  })
})
