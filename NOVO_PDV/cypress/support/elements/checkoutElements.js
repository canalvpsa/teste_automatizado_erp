const CheckoutElements = {
    PRODUTOLISTA: 'app-atendimento-vendivel .d-flex',
    LISTAPRODUTOS: {
        DESCRICAOPRODUTO: '.descricao span',
        QUANTIDADEMAIOR: '.botoesQuantidade .fa-plus-circle',
        QUANTIDADEMENOR: '.botoesQuantidade .fa-minus-circle',
        QUANTIDADEITEM: '.botoesQuantidade .font-weight-bold',
        PRECOUNITARIO: '[tooltip="Preço unitário"]',
        DESCONTOUNITARIO: '[tooltip="Desconto total"]',
        VALORTOTAL: 'div .valor-total',
        EDICAOITEM: {
            BTN_TIPO: 'mat-dialog-container > app-atendimento-vendivel-edicao button',
            DESCONTOVALOR: `app-atendimento-vendivel-edicao div :nth-child(1) > .input-group > .form-control`,
            QUANTIDADE: `app-atendimento-vendivel-edicao.ng-star-inserted > .row > :nth-child(2) > .form-control`,
            INSERCAOCLIENTE: '.mat-input-element',
            FN_BTN_FECHAR: `//div//button[contains(., 'Fechar (ESC)')]`,
        },
    },
    DESCONTO: {
        REAIS: '.input-group .nput-group-prepend .btn-primary',
        PERCENTUAL: '.input-group .nput-group-prepend .btn-outline-primary',
        DESCONTOVALOR: '.input-group .nput-group-prepend form-control',
    },
    ACAO_PROMOCIONAL: {

    },
    CLIENTE: 'app-atendimento app-select-terceiro .font-weight-normal',
    CLIENTEPESQUISA: 'app-atendimento app-select-terceiro .barra-pesquisa .mat-input-element',
    CLIENTELISTAGEM: `.mat-option-text .d-flex`,
    VALORATENDIMENTO: '.action-total .total',
    FN_BTN_PAGAMENTOS: `//div//button[contains(., 'Pagamentos')]`,
    FN_BTN_SALVAR: `//div//button[contains(., 'Salvar atendimento')]`,
    FN_BTN_CANCELAR: `//div//button[contains(., 'Cancelar atendimento')]`,
    MENSAGEM: '.noty_body'
}

export default CheckoutElements;