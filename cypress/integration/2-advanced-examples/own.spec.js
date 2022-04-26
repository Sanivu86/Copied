describe('Testing', () => {
    it('Contains Test', () => {
      cy.visit('/')
      cy.contains("Test")

    })

    it('Clicking link', () => {
        cy.get('#ReactLink').click();
  
      })
      it('Goes to React page', () => {
        cy.visit('/')
        cy.get('#ReactLink').should($a => {
          expect($a.attr('href'), 'href').to.equal('https://reactjs.org')
          expect($a.attr('target'), 'target').to.equal('_blank')
        })
      })
  })