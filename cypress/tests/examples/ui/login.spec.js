describe('Login demo', () => {
  before(() => {
    cy.fixture('login').then(function (login) {
      this.login = login
    })
  })

  afterEach(() => {
    cy.screenshot(Cypress.currentTest.title)
  })

  it('Login', function () {
    cy.visit(Cypress.env('BASE_WEB_URL'))
  })
})
