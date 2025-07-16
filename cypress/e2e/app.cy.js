describe('App Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should display all "Deploy with cypress" texts', () => {
    // Check each div exists and has correct text
    cy.get('.text-3xl').should('have.length', 4)

    cy.get('.text-3xl').eq(0).should('have.text', 'Deploy with cypress 1')
    cy.get('.text-3xl').eq(1).should('have.text', 'Deploy with cypress 2')
    cy.get('.text-3xl').eq(2).should('have.text', 'Deploy with cypress 3')
    cy.get('.text-3xl').eq(3).should('have.text', 'Deploy with cypress 4')

    // Check they all have the correct classes
    cy.get('.text-3xl').each(($div) => {
      cy.wrap($div)
        .should('have.class', 'ml-8')
        .and('have.class', 'text-3xl')
        .and('have.class', 'font-bold')
        .and('have.class', 'my-4')
    })
  })
})
