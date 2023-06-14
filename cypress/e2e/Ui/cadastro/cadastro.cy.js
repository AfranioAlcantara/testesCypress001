describe('testes na tela de cadastro',()=>{
    beforeEach(()=>{
        cy.visit('/login')
    });
    it('teste 01 cadastro com sucesso',()=>{
        cy.get('[data-qa="signup-name"]').type('asdolfo')
        cy.get('[data-qa="signup-email"]').type('aloprecioAStrogildo@123.com')
        cy.get('[data-qa="signup-button"]').click()
       
    });
    it('teste 01 cadastro com sucesso',()=>{
        cy.get('[data-qa="signup-name"]').type('asdolfo')
        cy.get('[data-qa="signup-email"]').type('aloprecioAStrogildo@123.com')
        cy.get('[data-qa="signup-button"]').click()
       
    });

});