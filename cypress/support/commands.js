Cypress.Commands.add('AbrirLojaVirtual', function(){
    cy.visit('https://loja.vr.com.br',{timeout:20000})
    cy.get('#sc_terms-consent',{timeout:8000}).click() 
    
})
Cypress.Commands.add('SelecionarOpcaoCartoesVR', () => {
    cy.get('#btn-selecionar-modalidade-avulso',{timeout:20000}).should('be.visible').click();
  })
  Cypress.Commands.add('AdicionarQuantidade', (produto, quantidade) => {
    cy.get(produto).should('be.visible').clear().type(quantidade);
  })
  Cypress.Commands.add('DigitarValorCredito', (produto, valor) => {
    cy.get(produto).should('be.visible').clear().type(valor);
  })
  Cypress.Commands.add('ClicarAdicionarCarrinho', () => {
    cy.get('#btn-adicionar-carrinho-auto').should('be.visible').click();
  })

  Cypress.Commands.add('ValidarProdutoAdicionadoCarrinho', () => {
    cy.get('#btn-selecionar-modalidade-avulso',{timeout:20000}).should('be.visible').click()
    cy.get('#produto-auto-quantidade').clear().type('5')
    cy.get('#produto-auto-valor').clear().type('5,00')
  
    cy.get('#btn-adicionar-carrinho-auto').click();
  
    cy.get('.product-in-cart-view__content > p').should('have.text', 'Produto adicionado!');
  
    cy.get('#btn-meu-carrinho > .fa-light').click();
    
    cy.get('.product-information__value > :nth-child(2)').invoke('text').then(texto => {
      expect(texto).to.match(/^R\$\s*5,00$/);
    });
    
    cy.get('.product-information__amount > :nth-child(2)').should('have.text', '05');
    cy.get('.information__total-value').invoke('text').then(texto => {
      expect(texto).to.match(/^R\$\s*25,00$/);
    });
  })

  Cypress.Commands.add('ValidarMensagemErro', (elemento, mensagem) => {
    cy.get(elemento).should('contain', mensagem);
  })


