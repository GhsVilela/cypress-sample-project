import LoginPage from "../../../pages/login_page"
import HomePage from "../../../pages/home_page"
const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Login demo', () => {
  before(() => {
    cy.fixture('login').then(function (login) {
      this.login = login
    })
  })

  after(() => {
    cy.screenshot(Cypress.currentTest.title)
  })

  it('Login', function () {
    cy.visit(Cypress.env('BASE_WEB_URL'))
    loginPage.login(this.login.users[0].username, Cypress.env('LOGIN_PASSWORD'))
    homePage.validateLogin()
  })
})
