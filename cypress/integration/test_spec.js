describe('Material Layout', function () {

  it('.should() - assert that <title> is correct', function () {
    cy.visit('http://localhost:4200')
    cy.title().should('include', 'MaterialLayout')
    //   ↲               ↲            ↲
    // subject        chainer      value
  })

  context('Actions', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200/home')
    })

    // Query and Click Create Button
    it('cy.get() - query DOM elements', function () {
      cy.get('#createBtn').should('contain', 'Create').click();
     // cy.get('#dialogNoBtn').should('contain','No').click();



      // Click Create Button, query for modal popop

      //
    })

  })

})

