/// <reference types="Cypress" />

const { should } = require("chai")
const tresSegundos = 3000

describe('Validar testes NEGATIVOS', function(){
    beforeEach(function(){
      cy.viewport(1920, 1080) //ajuste para não quebrar o pipeline
        cy.AbrirLojaVirtual()
      })
    
    it('adicionar quantidade aletoria (NEGATIVA <1) de cartoes do produto "Auto"', function(){
      cy.SelecionarOpcaoCartoesVR();
      cy.AdicionarQuantidade('#produto-auto-quantidade', '0');
      cy.ValidarMensagemErro(':nth-child(2) > span', 'Qtd. mínima: 1')       
      })

      it('adicionar quantidade aletoria (NEGATIVA >300) de cartoes do produto "Auto"', function(){
        cy.SelecionarOpcaoCartoesVR();
        cy.AdicionarQuantidade('#produto-auto-quantidade', '301');
        cy.ValidarMensagemErro(':nth-child(2) > span', 'Qtd. máxima: 300');       
      })

      it('digitar um valor de credito (NEGATIVO <1) aleatorio para o produto "Auto"', function(){
        cy.SelecionarOpcaoCartoesVR();
        cy.DigitarValorCredito('#produto-auto-valor', '0,99');
        cy.get('.input-styled__input-holder > span').invoke('text').then(texto => {
          expect(texto).to.match(/Valor mínimo: R\$\s*1,00/);
        })
    })


    })