describe('First Header Text - Smoke Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should display correct text and styling for first header', () => {
    cy.contains('Deploy with cypress 1');
  })
})
