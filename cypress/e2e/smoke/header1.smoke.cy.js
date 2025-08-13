describe('First Header Text - Smoke Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display correct text and styling for first header', () => {
    cy.contains('Deploy with cypress 1');
  })
})
