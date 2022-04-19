describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/') // baseUrl added in Cypress.json
    })
  })