class LoginPage {

    elementsLoginPage = {
        edUser: () => cy.get('[data-test="username"]'),
        edPassword: () => cy.get('[data-test="password"]'),
        btLogin: () => cy.get('[data-test="login-button"]'),
    }

    enterUser(value) {
        this.elementsLoginPage.edUser()
            .clear()
            .type(value)

        return this
    }

    enterPassword(value) {
        this.elementsLoginPage.edPassword()
            .clear()
            .type(value, {log: false})

        return this
    }

    clickLogin() {
        this.elementsLoginPage.btLogin()
            .click()

        return this
    }

    login(user, password) {
        this.enterUser(user)
            .enterPassword(password)
            .clickLogin()

        return this
    }
}

export default LoginPage