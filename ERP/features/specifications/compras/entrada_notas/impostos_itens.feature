#language: pt

 @ERP @entrada @imposto
Funcionalidade: ERP - Entrada de nota fiscal no ERP com validação dos impostos

Contexto: Nova entrada de notas
Dado que o usuário inicia uma nova entrada de notas

#CP-708  - XML CST51 com base de ICMS
#OP-1185 - XML CST00 só com base de ICMS
#CP-707  - XML CST10 só com base de ST (não tem aliquota e valor de ST)
#OP-1192 - XML com CSOSN202 (como se fosse CST10)

@entrada_XML @cst @icms @icmsst @ipi
Esquema do Cenário: Entrada de notas com XML e validação de ICMS,ICMS ST e IPI para determinado CST/CSOSN
    Dado que o usuário preencheu os dados iniciais informando o "<XML>" conciliando na nota "codigo_produto" e no sistema "codigo_interno"
    E que confirma a conciliação, confirma os dados adicionais e confirma os produtos
    Quando validar os dados da nota fiscal de entrada
    Então nenhuma mensagem de divergência de valores deve ser exibida
    E na visão geral da entrada com os impostos devem estar preenchidos de acordo com o XML informado "<XML>"
    E ao finalizar, a entrada é realizada com sucesso exibindo a mensagem com o número do documento "<num_Doc>" e série "<serie>" 

    Exemplos:
|           XML           |num_Doc|serie|bICMS|vICMS|bICMSST|vICMSST|bIPI|vIPI|bICMSSN|vICMSSN|tot_prod|tot_NF|                                 obs_item                                 |
|    CST00_com_ICMS.xml   |   17  |  10 | 8,73| 1,05|  0,00 |  0,00 |8,73|0,07|   -   |   -   |  8,73  | 8,80 |                      vBC 8.73 pICMS 12.00 vICMS 1.05                     |
|  CST00_zerado_comBC.xml |   17  |  10 | 0,00| 0,00|  0,00 |  0,00 |8,73|0,07|   -   |   -   |  8,73  | 8,80 |                      vBC 8.73 pICMS 0.00 vICMS 0.00                      |
|   CST10_com_ICMSST.xml  |   8   |  10 | 8,73| 0,61| 11,35 |  0,18 |0,00|0,00|   -   |   -   |  8,73  | 8,91 |   vBC 8.73 pICMS 7.00 vICMS 0.61 vBCST 11.35 pICMSST 7.00 vICMSST 0.18   |
|CST10_zerado_com_BCST.xml|   9   |  10 | 8,73| 0,61|  0,00 |  0,00 |0,00|0,00|  0,00 |  0,00 |  8,73  | 8,73 |   vBC 8.73 pICMS 7.00 vICMS 0.61 vBCST 11.35 pICMSST 0.00 vICMSST 0.00   |
|  CST30_desoneracao.xml  |   6   |  10 | 0,00| 0,00| 13,68 |  1,41 |0,00|0,00|  0,00 |  0,00 |  8,73  | 9,09 |                     vBCST 13.68 pICMSST vICMSST 1.41                     |
|CST40_deson_n_subtrai.xml|   6   |  10 | 0,00| 0,00| 13,68 |  1,41 |0,00|0,00|  0,00 |  0,00 |  8,73  | 8,73 |                              vICMSDeson 1.05                             |
| CST40_deson_subtrai.xml |   6   |  10 | 0,00| 0,00| 13,68 |  1,41 |0,00|0,00|  0,00 |  0,00 |  8,73  | 7,68 |                              vICMSDeson 1.05                             |
|     CST51_zerado.xml    |   6   |  10 | 0,00| 0,00|  0,00 |  0,00 |0,00|0,00|   -   |   -   |  8,73  | 8,73 |                      vBC 0.00 pICMS 0.00 vICMS 0.00                      |
|  CST51_zerado_comBC.xml |   6   |  10 | 0,00| 0,00|  0,00 |  0,00 |0,00|0,00|   -   |   -   |  8,73  | 8,73 |                      vBC 8.73 pICMS 0.00 vICMS 0.00                      |
|    CST51_sem_tags.xml   |   6   |  10 | 0,00| 0,00|  0,00 |  0,00 |0,00|0,00|   -   |   -   |  8,73  | 8,73 |                   Não existe as tags vBC, pICMS e vICMS                  |
| CST51_dif_sem_vICMS.xml |   6   |  10 | 0,00| 0,00|  0,00 |  0,00 |0,00|0,00|   -   |   -   |  8,73  | 8,73 |vBC 8.73 pICMS 18.0000 vICMSOp 1.57 pDif 100.0000 vICMSDif 1.57 vICMS 0.00|
|      CST51_dif.xml      |   6   |  10 | 0,00| 0,00|  0,00 |  0,00 |0,00|0,00|   -   |   -   |  8,73  | 8,73 | vBC 8.73 pICMS 18.0000 vICMSOp 1.57 pDif 50.0000 vICMSDif 1.57 vICMS 0.79|
| ICMSSN101_com_ICMSSN.xml|  105  |  2  | 0,00| 0,00|  0,00 |  0,00 |0,00|0,00| 26,52 |  5,04 |  26,52 | 26,52|                      pCredSN 19.00 vCredICMSSN 3.32                      |
| ICMSSN202_com_ICMSST.xml|  101  |  2  | 0,00| 0,00| 22,60 |  1,72 |0,00|0,00|   -   |   -   |  17,79 | 19,50|                   BCST 11.09 pICMSST 17.00 vICMSST 0.84                  |
