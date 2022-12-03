describe('Login demo', () => {

  afterEach(() => {
    cy.screenshot(Cypress.currentTest.title)
  })

  it('Login', () => {
    cy.visit(Cypress.env('BASE_WEB_URL'))
  })
})
