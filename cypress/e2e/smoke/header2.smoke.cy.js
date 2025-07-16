describe('Second Header Text - Smoke Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should display correct text and styling for second header', () => {
    cy.get('.text-3xl')
      .eq(1)
      .should('have.text', 'Deploy with cypress')
      .and('have.class', 'ml-8')
      .and('have.class', 'text-3xl')
      .and('have.class', 'font-bold')
      .and('have.class', 'my-4')
  })
})
