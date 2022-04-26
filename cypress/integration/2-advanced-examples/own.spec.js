describe('Testing', () => {
    it('Contains Sanna', () => {
      cy.visit('/')
      cy.contains("Sanna")

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