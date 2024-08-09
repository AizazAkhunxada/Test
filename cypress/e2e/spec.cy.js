describe('spec.cy.js', () => {

  it('should visit', () => {
    cy.visit('example.cypress.io')
    
    cy.xpath('//a[@class="dropdown-toggle"]').click()

    cy.xpath('//a[@href="/commands/querying"]').contains("Querying").click()

    cy.xpath('//a[@class="dropdown-toggle"]').click()

    cy.xpath('//a[@href="/commands/traversal"]').contains("Traversal").click()
    
    

  })
})