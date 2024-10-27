/// <reference types="Cypress" />
 
describe('Validar CNPJ', () => {
  const cnpjValido = '89945820000160'; // CNPJ válido para testes
  const cnpjInvalido = '11111111111111'; // Exemplo de CNPJ inválido

  it('Deve retornar dados para um CNPJ válido', () => {
    cy.request({
      method: 'GET',
      url: `/modalidade/avulso${cnpjValido}`, 
      headers: {
        'accept': 'application/json',
        'access_token': Cypress.env('API_ACCESS_TOKEN'),
        'client_id': Cypress.env('CLIENT_ID'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      //expect(response.body).to.have.property('data'); // adapte conforme a estrutura de resposta esperada
    });
  });

  it('Deve retornar erro para um CNPJ inválido', () => {    
    cy.request({
      method: 'GET',
      url: `https://loja.vr.com.br/modalidade/avulso${cnpjInvalido}`,
      failOnStatusCode: false, // Permite que o teste continue mesmo em caso de erro
    }).then((response) => {
      expect(response.status).to.not.eq(401); // Espera que não seja 401 para um CNPJ inválido devido o site funcionar assim
      // Verifica se o corpo da resposta é HTML
      if (response.headers['content-type'].includes('text/html')) {
        // Tratar como HTML, talvez você queira validar alguma parte do HTML
        cy.log('Resposta em HTML recebida:', response.body)
      } else {
        // Caso a resposta seja JSON
        expect(response.body).to.have.property('CNPJ inválido')
        expect(response.body).to.include('invalido')
      }
    })
  })
  
})

