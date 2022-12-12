class HomePage {

    elementsHomePage = {
        txtTittle: () => cy.get('.title'),
    }

    validateLogin() {
        this.elementsHomePage.txtTittle()
            .should('be.visible')
            .should('contain.text', 'Products')

        return this
    }
}

export default HomePage