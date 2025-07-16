describe('All Headers - Smoke Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should have correct number of headers', () => {
    cy.get('.text-3xl').should('have.length', 4)
  })

  it('should have correct text in all headers', () => {
    cy.get('.text-3xl').each(($header) => {
      cy.wrap($header).should('have.text', 'Deploy with cypress')
    })
  })

  it('should have correct styling in all headers', () => {
    cy.get('.text-3xl').each(($header) => {
      cy.wrap($header)
        .should('have.class', 'ml-8')
        .and('have.class', 'text-3xl')
        .and('have.class', 'font-bold')
        .and('have.class', 'my-4')
    })
  })
})
