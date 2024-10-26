/// <reference types="Cypress" />

const { should } = require("chai")
const trintaSegundos = 30000

describe('Validar que um produto pode ser adicionado, com sucesso, ao carrinho', function() {
  beforeEach(function(){
    cy.AbrirLojaVirtual()
  })

      it('selecionar a opçao "Soluções VR"', function(){
       cy.get('#btn-selecionar-modalidade-avulso',{timeout:20000}).should('be.visible').click()
       cy.get('.lojavr-style-c-PKtiO').contains('Soluções VR')
       
      })

      it('adicionar quantidade aletoria (POSITIVA) de cartoes do produto "Auto"', function(){
        cy.get('#btn-selecionar-modalidade-avulso',{timeout:20000}).should('be.visible').click()
        //cy.SelecionarOpcaoCartoesVR();
        cy.AdicionarQuantidade('#produto-auto-quantidade', '1')
      })

      it('digitar um valor de credito (POSITIVO MIN) aleatorio para o produto "Auto"', function(){    
        cy.get('#btn-selecionar-modalidade-avulso',{timeout:20000}).should('be.visible').click()   
        //cy.SelecionarOpcaoCartoesVR();
        cy.DigitarValorCredito('#produto-auto-valor', '1,00')
        
      })

      it('digitar um valor de credito (POSITIVO MAX) aleatorio para o produto "Auto"', function(){
        cy.get('#btn-selecionar-modalidade-avulso',{timeout:20000}).should('be.visible').click()
        //cy.SelecionarOpcaoCartoesVR();
        cy.DigitarValorCredito('#produto-auto-valor', '9999,99')
        
      })
      
      it('clicar no botão "Adicionar ao carrinho"',function(){
        cy.get('#btn-selecionar-modalidade-avulso',{timeout:20000}).should('be.visible').click()
        //cy.SelecionarOpcaoCartoesVR();
        cy.AdicionarQuantidade('#produto-auto-quantidade', '5')
        cy.DigitarValorCredito('#produto-auto-valor', '5,00')
        cy.ClicarAdicionarCarrinho()        
      })

      it('validar que o produto foi adicionado ao carrinho com sucesso', function() {
        cy.ValidarProdutoAdicionadoCarrinho()
       
      });
      

it('navegar até a loja', function() {
  cy.visit('https://www.vr.com.br')
  cy.title().should('be.equal','VR - Refeição, Transporte, Controle de Ponto e Soluções Financeiras')
  cy.get('#buttonCompreOnline > .vr-login__trigger-label').click()
  cy.window().then(win => {
    win.close();
  })
  })
afterEach(function() {
  cy.window().then(win => {
    win.close();
  })
})

})