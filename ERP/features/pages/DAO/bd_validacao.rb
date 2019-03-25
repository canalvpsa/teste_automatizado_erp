include ConexaoBanco

module BD_validacao

    def consulta_escrituracao()
        query = 'select * from (
                    select nf.ESCRITURADA from QA_ESTOQUE_AUT.entrada entrada
                    inner join QA_ESTOQUE_AUT.entrada_nota_fiscal entrada_nf
                    on entrada.ID = entrada_nf.ENTRADA_ID
                    inner join QA_ESTOQUE_AUT.NOTA_FISCAL nf
                    on entrada_nf.NOTASFISCAIS_ID = nf.ID 
                    order by nf.id desc)
            where ROWNUM <= 1'
        return consulta_banco(query)
    end


    def consulta_ultimaEntrada()
        query = 'select * from (
            select ent.NUMERODOCUMENTO from QA_ESTOQUE_AUT.entrada ent order by ent.id desc)
            where ROWNUM <= 1'
        return consulta_banco(query)
    end


    def parametro_decimais_custo(casas_decimais)
        query = 'UPDATE QA_ESTOQUE_AUT.PARAMETROINTEGER SET VALOR = '+casas_decimais.to_s+'
                 WHERE ID = (SELECT id FROM QA_ESTOQUE_AUT.PARAMETRO WHERE CHAVE = 5)'
                 'UPDATE QA_ESTOQUE_AUT.PARAMETRO SET DATAALTERACAO = SYSDATE WHERE chave = 5'
        return update_banco(query)
    end


    def data_alteracao_parametro
        query = 'UPDATE QA_ESTOQUE_AUT.PARAMETRO SET DATAALTERACAO = SYSDATE WHERE chave = 5'
   end



    def consulta_custoProduto(codigoInterno)

        case codigoInterno

        when '2541.001'
            idProduto = '863'
        
        when '2541.002'
            idProduto = '864'

        else
            puts 'codigo produto nao previsto'
            idProduto = ''
        end

        query = 'select * from (
            select CAST(VRESTOQUE AS varchar(10)) from QA_ESTOQUE_AUT.MOVTO_ESTOQUE
            where MERCADORIADNA_ID = '+idProduto+' ORDER BY id desc) 
            where ROWNUM <= 1'
        return consulta_banco(query)
    end
end
