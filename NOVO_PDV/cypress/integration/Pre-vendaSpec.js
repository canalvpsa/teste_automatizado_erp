/// <reference types="Cypress" />

import inserirItens from '../support/elements/inserirItensElements'
import checkout from '../support/elements/checkoutElements'
import cliente from '../support/elements/clienteElements'
import desconto from '../support/elements/descontoElements'
import menu from '../support/elements/menuElements'
import pagamentos from '../support/elements/pagamentosElements'
import movimento from '../support/elements/movimentacaoElements'
import infoitem from '../support/elements/infoitemElements'

describe('Pré-venda', () => {

    before(() => {
        cy.clearCookies()
        cy.login()
        //cy.get(menu.SELECAO.CONFIGURACAO).click()
        //cy.wait(500)
        //cy.get('.form-control').click().type('dev@2019')
        //cy.get('.form-inline > .btn').click({force: true})
        //cy.get('.container').should('contain', 'Tipo Documento Fiscal')
        //cy.get(':nth-child(21) > :nth-child(2) > .ng-valid > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').type('{downarrow}', '{downarrow}', '{enter}')
        // //cy.get(':nth-child(22) > :nth-child(2)').click().type('Demonstração', '{enter}')
        //cy.get(':nth-child(21) > .d-flex > .btn').click({force: true})
        //cy.get(':nth-child(21) > :nth-child(1)').type('{ctrl}', '{F5}')
    })

    beforeEach(() => {
        cy.restoreLocalStorage();
    })

    afterEach(() => {
        cy.saveLocalStorage();
});


    it(`Inserção rápida`, () => {
        //cy.get(inserirItens.PRODUTO.FN_ADICIONAR_CARRINHO('1')).click()
        cy.get(inserirItens.PRODUTO.INSERCAORAPIDA).click()
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('2*0582')
        cy.get(checkout.CHECKOUT.DESCRICAOPRODUTO)
        .should('contain', 'Desconto Progressivo')
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('0562.0044')
        cy.get(checkout.CHECKOUT.DESCRICAOPRODUTO)
        .should('contain', 'Camiseta Basica Thiago Martins Xxl Vermelho')
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('CAMISETA BASICA THIAGO MARTINS XXL AMARELO')
        cy.wait(500)
        cy.get(inserirItens.BTN_SALVAR_ATENDIMENTO).click()
    })


    it.only(`Editando e finalizando um documento`, () => {
        cy.get(menu.SELECAO.MOVIMENTACOES).click({force: true})
        cy.wait(500)
        cy.get(movimento.RELATORIO.DETALHAR).click()
        cy.get(movimento.RELATORIO.CONTINUAR).click()
        cy.get(':nth-child(1) > .w-25 > .botoesQuantidade > :nth-child(3) > .fal').click()
        cy.get(':nth-child(1) > .w-50 > span',{timeout:500}).click()
        cy.get(infoitem.DETALHE.VENDEDOR).click({ force: true })
        cy.get(infoitem.DETALHE.NOMEVEND).type('Administrador Loccitan').click()
        cy.wait(500)
        cy.get(infoitem.DETALHE.NOMEVEND).type('e').click({force: true}).type('{enter}')
        cy.wait(500)
        cy.get(infoitem.DETALHE.UNIDADE,{timeout:500}).type('{backspace}')
        cy.get(infoitem.DETALHE.UNIDADE).type('2')
        cy.wait(500)
        cy.get(infoitem.DETALHE.SAIR, {timeout:500}).click({force : true})
        cy.get(inserirItens.BTN_PAGAMENTO).click({force : true})
        cy.get(pagamentos.SELECAO.CARTAO).click({force : true})
        cy.get(pagamentos.SELECAO.OPERADORA.CIELO, {timeout:500}).click({force : true})
        cy.get('#parcelas').type('{backspace}')
        cy.wait(500)
        cy.get('#parcelas').type('2')
        cy.wait(500)
        cy.get('#autorizacao').type('1222135')
        cy.wait(500)
        cy.get('#cdk-step-content-2-3 > .d-flex > .botao-grande').click({force : true})
        cy.get('.m-2')
    })


    it(`Pré venda para cliente válida`, () => {
        cy.get('app-select-terceiro').contains('Diversos').click()
        cy.get(cliente.CLIENTE.INSERCAOCLIENTE).type('Carlos Alessandro')
        cy.wait(500)
        cy.get('#mat-option-2 > .mat-option-text > .d-flex > :nth-child(1)').click({force: true})
        cy.get(inserirItens.PRODUTO.FN_ADICIONAR_CARRINHO('1')).click()
        cy.get(inserirItens.BTN_PAGAMENTO).click()
        cy.get('.flex-column > :nth-child(1) > :nth-child(2)').click()
        cy.get(':nth-child(4) > .botao-grande').click()
        cy.get('.m-2').click({force: true})
    })

    it(`Pré venda ação promocional em dinheiro`, () => {
        cy.get(inserirItens.PRODUTO.INSERCAORAPIDA).click()
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('0562.0044')
        cy.get(checkout.CHECKOUT.DESCRICAOPRODUTO)
        .should('contain', 'Camiseta Basica Thiago Martins Xxl Vermelho')
        cy.wait(500)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(500)
        cy.get('.itens > :nth-child(1) > .card-body > .clickable > .fal').click()
        cy.wait(500)
        cy.get('.cdk-overlay-backdrop').click({force: true})
        cy.wait(500)
        //cy.get(inserirItens.PRODUTO.INSERCAORAPIDA).click()
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('2*0562.0042')
        cy.wait(500)
        cy.get(checkout.CHECKOUT.DESCRICAOPRODUTO)
        cy.wait(500)
        cy.get('.form-group > :nth-child(3) > .btn').click({force: true})
        cy.wait(500)
        cy.get('.col-10 > :nth-child(1)').should('contain', '40,00% de desconto').click({force: true})
        cy.get('.cdk-overlay-backdrop').click({force: true})
        cy.get('.col-10 > .font-weight-bold').should('contain', '40,00% de desconto')
        cy.get(':nth-child(3) > .btn-primary').click({force: true})
        cy.get('.botoes-pagamento > :nth-child(2)').click({force: true})
        cy.get('.flex-column > :nth-child(1) > :nth-child(1)').click({force: true})
        //cy.get('.__cypress-highlight > div').should('contain', 'R$ 0,00')
        cy.get(':nth-child(3) > .botao-grande').click({force: true})
        cy.get('.m-2').click({force: true})
    })

   it(`Pré venda ação promocional cartão`, () => {
    cy.get(inserirItens.PRODUTO.INSERCAORAPIDA).click()
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('0562.0044')
        cy.get(checkout.CHECKOUT.DESCRICAOPRODUTO)
        .should('contain', 'Camiseta Basica Thiago Martins Xxl Vermelho')
        cy.wait(500)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(500)
        cy.get('.itens > :nth-child(1) > .card-body > .clickable > .fal').click()
        cy.wait(500)
        cy.get('.cdk-overlay-backdrop').click({force: true})
        cy.wait(500)
        //cy.get(inserirItens.PRODUTO.INSERCAORAPIDA).click()
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('2*0562.0042')
        cy.wait(500)
        cy.get(checkout.CHECKOUT.DESCRICAOPRODUTO)
        cy.wait(500)
        cy.get('.form-group > :nth-child(3) > .btn').click({force: true})
        cy.wait(500)
        cy.get('.col-10 > :nth-child(1)').should('contain', '40,00% de desconto').click({force: true})
        cy.get('.cdk-overlay-backdrop').click({force: true})
        cy.get('.col-10 > .font-weight-bold').should('contain', '40,00% de desconto')
        cy.get(':nth-child(3) > .btn-primary').click({force: true})
        cy.get('.botoes-pagamento > :nth-child(1)').click({force: true})
        cy.get('.d-flex > :nth-child(1) > .foto > app-imagem > img').click({force: true})
        cy.get('#parcelas').click({force: true}).type('{backspace}', '2')
        cy.get('#cdk-step-content-1-3 > .d-flex > .botao-grande').click({force: true})
        //cy.get('.__cypress-highlight > div').should('contain', 'R$ 0,00')
        cy.get(':nth-child(3) > .botao-grande').click({force: true})
        cy.get('.m-2').click({force: true})
    })
        

    it(`Pré venda ação promocional cheque`, () => {
        cy.get(inserirItens.PRODUTO.INSERCAORAPIDA).click()
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('0562.0044')
        cy.get(checkout.CHECKOUT.DESCRICAOPRODUTO)
        .should('contain', 'Camiseta Basica Thiago Martins Xxl Vermelho')
        cy.wait(500)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(500)
        cy.get('.itens > :nth-child(1) > .card-body > .clickable > .fal').click()
        cy.wait(500)
        cy.get('.cdk-overlay-backdrop').click({force: true})
        cy.wait(500)
        //cy.get(inserirItens.PRODUTO.INSERCAORAPIDA).click()
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('2*0562.0042')
        cy.wait(500)
        cy.get(checkout.CHECKOUT.DESCRICAOPRODUTO)
        cy.wait(500)
        cy.get('.form-group > :nth-child(3) > .btn').click({force: true})
        cy.wait(500)
        cy.get('.col-10 > :nth-child(2)').should('contain', 'Um(a) 0009 - EAU DE PARFUM DAMA DA NOITE 75ML').click({force: true})
        cy.get('.cdk-overlay-backdrop').click({force: true})
        cy.get('.col-10 > .font-weight-bold').should('contain', 'Um(a) 0009 - EAU DE PARFUM DAMA DA NOITE 75ML')
        cy.get(':nth-child(3) > .btn-primary').click({force: true})
        cy.get('.botoes-pagamento > :nth-child(3)').click({force: true})
        cy.wait(500)
        cy.get('.select2-selection__arrow > b').click({force: true})
        cy.get('.select2-search__field').type('{enter}', {force: true})
        cy.get('.d-flex > :nth-child(2) > .form-control').click().type('6516')
        cy.get(':nth-child(3) > .form-control').click().type('16684-7')
        cy.get('.col-xl-1 > .form-control').click().type('30')
        cy.get('.row > :nth-child(1) > .btn').click({force: true})
        cy.get('.ng-tns-c37-11 > .btn').click({force: true})
        cy.get('.m-2').click({force: true})
    })
     

    it(`Desconto progressivo`, () => {
        cy.get(inserirItens.PRODUTO.INSERCAORAPIDA).click()
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('Desconto progressivo')
        cy.wait(500)
        cy.get(':nth-child(3) > .fal').click()
        cy.get('.total').should('contain', '80,00')
        cy.get(':nth-child(3) > .fal').click()
        cy.get('.total').should('contain', '105,00')
        cy.get(':nth-child(3) > .fal').click()
        cy.get('.total').should('contain', '120,00')
        cy.get(':nth-child(3) > .fal').click()
        cy.get('.total').should('contain', '125,00')
        cy.get(':nth-child(3) > .fal').click()
        cy.get('.total').should('contain', '135,00')
        cy.wait(500)
        cy.get(inserirItens.BTN_SALVAR_ATENDIMENTO).click()
    })


    it(`Pesquisa e Troca`, () => {
        cy.get(inserirItens.PRODUTO.ADICIONARITEM).type('Desodorante 24Hs Araucária')
        cy.wait(500)
        cy.get('app-vendivel-grid > .container').should('contain', 'Desodorante 24Hs Araucária')
        cy.get('.fa-shopping-cart').click({force: true})
        cy.get(':nth-child(3) > .fal').click()
        cy.get('.total').should('contain', '80,00')
        cy.get(':nth-child(3) > .fal').click()
        cy.get('.total').should('contain', '105,00')
        cy.get(':nth-child(3) > .fal').click()
        cy.get('.total').should('contain', '120,00')
        cy.get(':nth-child(3) > .fal').click()
        cy.get('.total').should('contain', '125,00')
        cy.get(':nth-child(3) > .fal').click()
        cy.get('.total').should('contain', '135,00')
        cy.wait(500)
        cy.get(inserirItens.BTN_SALVAR_ATENDIMENTO).click()
    })
     


})
