describe('The Home Page', () => {
    it('successfully loads', () => {
    //cy.exec('npm start') //cmd command to start the app, works but times out. Don't know why...
      cy.visit('/') // baseUrl added in Cypress.json
    })
  })