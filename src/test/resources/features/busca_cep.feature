# language: pt

  @busca_dados
  Funcionalidade: Busca CEP

    @busca_cep
    Cenario: Buscar CEP "69005-040"
      Dado que estou na tela do site dos correios de buscar cep
      Quando eu preencho o campo de cep
      E clico em Buscar
      Então vejo as informações do cep inserido

    @busca_nome
    Cenario: Buscar NOME "Lojas Bemol"
      Dado que estou na tela do site dos correios de buscar cep
      Quando eu preencho o campo de cep com nome
      E clico em Buscar
      Então vejo as informações do cep inserido
