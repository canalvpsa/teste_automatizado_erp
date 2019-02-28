include EntradaXML
include EfetuarLogin
include VisaoGeral

Quando('preenche os dados iniciais informando um XML') do
  efetuarLogin('/server/erp/estoque/entradas/criar/manual')
  importarXML('42181275552133001303550040000005621722790267.xml')
  preencherDadosIniciaisXML
  
   #Salvar nos dados iniciais
   sleep 2
   clicarBotaoSalvar

   #Salvar conciliação
   sleep 2
   clicarBotaoSalvar

   #Salvar dados adicionais
   clicarBotaoSalvar

    #Salvar nos produtos
    sleep 2
    clicarBotaoSalvar

     #Salvar na visão geral
     clicarBotaoSalvar
end


Dado("que o usuário preenche os dados iniciais informando o {string}") do |nomeXML|    
  efetuarLogin('/server/erp/estoque/entradas/criar/manual')                           
  importarXML(nomeXML)          
  preencherDadosIniciaisXML
  
   #Salvar nos dados iniciais
   sleep 2
   clicarBotaoSalvar       

    #Salvar conciliação
    sleep 2
   clicarBotaoSalvar

   #Salvar dados adicionais
   clicarBotaoSalvar

    #Salvar nos produtos
    sleep 2
    clicarBotaoSalvar
end  

                                                                                                                 
Quando("validar os dados da nota fiscal de entrada") do                                                          
  expect(page).to have_content("Atenção")       
end                                                                                                                                                                                                                         


Então("na visão geral da entrada com os impostos devem estar preenchidos de acordo com o XML informado {string}") do |xml|
  
  case xml

  when 'CST00_correto.xml'
    validaCST00_correto

  when 'CST00_incorreto.xml'
    validaCST00_incorreto

  when 'CST10_correto.xml'
    validaCST10_correto

  when 'CST10_incorreto.xml'
    validaCST10_incorreto

  when 'CST51_correto.xml', 'CST51_incorreto.xml'
    validaCST51

  when 'ICMSSN202_correto.xml'
    validaCSOSN202
    
  else
    puts "CST/CSOSN nao previsto"
  end
end          

Então("nenhuma mensagem de divergência de valores deve ser exibida") do
  expect(page).not_to have_selector('.alert-danger alert')      

  #Salvar na visão geral
  sleep 2
  clicarBotaoSalvar
end                                                                                              