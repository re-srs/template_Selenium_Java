# language: pt

  Funcionalidade: Receber desconto da qazando
    Eu como usuário da qazando
  quero receber um cupom de deconto
  para comprar um curso com valor reduzido

   @gerar-cupom
  Cenário: Visuzalizar código de deconto
    Dado que estou no site da qazando
    Quando eu preencho meu email
    E clico em ganhar cupom
    Então eu vejo o código de desconto