$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cadastro_usuario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Cadastro de usuário",
  "description": "",
  "id": "cadastro-de-usuário",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@cadastro"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Registrar novo usuário com sucesso",
  "description": "",
  "id": "cadastro-de-usuário;registrar-novo-usuário-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 6,
      "name": "@cadastro_sucesso"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "acesso o cadastro de usuário",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "eu preencho o formulário de cadastro",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clico em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "vejo a mensagem de cadastro realizado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 4060403101,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.acesso_o_cadastro_de_usuário()"
});
formatter.result({
  "duration": 2336001101,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.eu_preencho_o_formulário_de_cadastro()"
});
formatter.result({
  "duration": 90200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_em_registrar()"
});
formatter.result({
  "duration": 35600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.vejo_a_mensagem_de_cadastro_realizado_com_sucesso()"
});
formatter.result({
  "duration": 37201,
  "status": "passed"
});
});