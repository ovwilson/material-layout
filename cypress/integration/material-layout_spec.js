describe('Material Layout', function () {

  it('.should() - assert that <title> is correct', function () {
    cy.visit('http://localhost:4200')
    cy.title().should('include', 'MaterialLayout')
  })


  context('Tables', () => {

    before(() => {
      cy.visit('http://localhost:4200');
    })

    it('should sort plain table ')

  })
})