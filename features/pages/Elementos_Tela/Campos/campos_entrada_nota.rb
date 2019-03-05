module CamposEntradaNota
    def setarQuantidade(quantidade)
        find('input[formcontrolname=quantidade]').set quantidade
    end

    def abrirCampoPesquisa()
        find('.select2-search__field').click
    end

    def setarPesquisa(pai, termo)
        pai.set(termo)
    end

    def abrirEntidades()
        find('.form-group col-sm-6, app-vo-filtro-entidades[formcontrolname=entidade] div', match: :first)
        .find('.select2-selection__placeholder', text: 'Selecione...').click
    end

    def setarEntidade(nomeEntidade)
        find('li', text: nomeEntidade.upcase).click
    end

    def setarNumeroDocumento(numDoc)
        find('input[formcontrolname=numeroDocumento]').set numDoc
    end

    def setarSerieDocuimento(serDoc)
        find('input[formcontrolname=serie]').set serDoc
    end

    def abrirPesquisaOperacoes
        find('app-vo-filtro-operacoes[formcontrolname=operacao]').find('.select2-selection__placeholder', text: 'Selecione...').click
    end

    def abrirPesquisaTipoNota
        find('app-vo-select[formcontrolname=tipoNotaFiscal]').find('.select2-selection__placeholder', text: 'Selecione...').click
    end

    def setarTipoNota(tipoNota)
        find('.select2-results__option',text:tipoNota, exact_text: true).click
    end
end