const inserirItensElements = {
    DETALHES: {
        TIPO: 'btn-outline-primary',
        DESCONTO: ':nth-child(1) > .input-group > .form-control',
        UNIDADE: '.row > :nth-child(2) > .form-control',
        VENDEDOR: '.select2-selection__arrow > b',
        NOMEVEND: '.select2-search__field',
        SAIR: '.cdk-overlay-backdrop'
    },
    PESQUISA_PRODUTO: 'app-vendivel .form-control',
    TOGGLE_PESQUISA: 'app-atendimento app-vendivel app-toggle-icons .toggle-btn',
    OPCAO_INSERCAO_RAPIDA: 'app-atendimento app-vendivel app-toggle-icons .toggle-btn-off',
    BTN_MODO_LISTAGEM: '.fad fa-th-list',
    FN_ADICIONAR_CARRINHO: posicao => `:nth-child(${posicao}) > .card > .card-footer > .clickable > .branco`,
    MENSAGEM: '.noty_body',
    PRODUTOPESQUISADO: 'app-vendivel-grid-item.ng-star-inserted > .card > .card-body',
    PRECOANTIGO: ' del',
    PRECOVIGENTE: ' .precoVigente',
    PESQUISAITEM: 'app-atendimento app-vendivel .form-control',
    IMAGEMPRODUTO: '.card > app-imagem > img',
    BTN_ADICIONAR: '.mat-raised-button'
}

export default inserirItensElements;
