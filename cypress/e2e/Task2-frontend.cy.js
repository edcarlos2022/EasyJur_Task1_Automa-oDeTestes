/// <reference types="Cypress" />

const { should } = require("chai");
const tresSegundos = 3000
const cnpjValido = '89945820000160'; // CNPJ válido para testes
const cnpjInvalido = '11111111111111'; // Exemplo de CNPJ inválido
describe('Validação de CNPJ frontend', function() {
 
  beforeEach(function() {
    cy.AbrirLojaVirtual()
  })

  it('Validar CNPJ inválido', function() {
      cy.SelecionarOpcaoCartoesVR()
    // Verifica se a opção "Soluções VR" está presente
    cy.get('.lojavr-style-c-PKtiO')
      .contains('Soluções VR')
      .should('exist')
    cy.AdicionarQuantidade('#produto-auto-quantidade', '5')
    cy.DigitarValorCredito('#produto-auto-valor', '5,00')
    cy.get('#btn-adicionar-carrinho-auto').click()
    cy.get('[data-testid="btn-seguir-carrinho-auto"]').click()
    //digitando CNPJ
    cy.get('.content > .lojavr-style-c-kFqMqW > .input-styled__input-holder > .input-styled__input > fieldset > input').type(cnpjInvalido)
    cy.get('.input-styled__input-holder > span').should('be.contain','CNPJ inválido')
      
  })
  it('Validar CNPJ Valido na compra', function() {
    cy.SelecionarOpcaoCartoesVR()
  // Verifica se a opção "Soluções VR" está presente
  cy.get('.lojavr-style-c-PKtiO')
    .contains('Soluções VR')
    .should('exist')
  cy.AdicionarQuantidade('#produto-auto-quantidade', '5')
  cy.DigitarValorCredito('#produto-auto-valor', '5,00')
  cy.get('#btn-adicionar-carrinho-auto').click()
  cy.get('[data-testid="btn-seguir-carrinho-auto"]').click()
  //digitando cpf
  cy.get('.content > .lojavr-style-c-kFqMqW > .input-styled__input-holder > .input-styled__input > fieldset > input').type(cnpjValido)
  cy.get('.information-box > p').should('be.contain','Seja bem-vindo!')

})
})
