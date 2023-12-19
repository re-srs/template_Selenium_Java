$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("busca_cep.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Busca CEP",
  "description": "",
  "id": "busca-cep",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@busca_dados"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Buscar CEP \"69005-040\"",
  "description": "",
  "id": "busca-cep;buscar-cep-\"69005-040\"",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 6,
      "name": "@busca_cep"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na tela do site dos correios de buscar cep",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "eu preencho o campo de cep",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clico em Buscar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "vejo as informações do cep inserido",
  "keyword": "Então "
});
formatter.match({
  "location": "BuscaCEPSteps.que_estou_na_tela_do_site_dos_correios_de_buscar_cep()"
});
formatter.result({
  "duration": 3737834600,
  "status": "passed"
});
formatter.match({
  "location": "BuscaCEPSteps.eu_preencho_o_campo_de_cep()"
});
formatter.result({
  "duration": 86627600,
  "status": "passed"
});
formatter.match({
  "location": "BuscaCEPSteps.clico_em_Buscar()"
});
formatter.result({
  "duration": 63861700,
  "status": "passed"
});
formatter.match({
  "location": "BuscaCEPSteps.vejo_as_informações_do_cep_inserido()"
});
formatter.result({
  "duration": 718345400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Buscar NOME \"Lojas Bemol\"",
  "description": "",
  "id": "busca-cep;buscar-nome-\"lojas-bemol\"",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 13,
      "name": "@busca_nome"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que estou na tela do site dos correios de buscar cep",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "eu preencho o campo de cep com nome",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "clico em Buscar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "vejo as informações do cep inserido",
  "keyword": "Então "
});
formatter.match({
  "location": "BuscaCEPSteps.que_estou_na_tela_do_site_dos_correios_de_buscar_cep()"
});
formatter.result({
  "duration": 128346300,
  "status": "passed"
});
formatter.match({
  "location": "BuscaCEPSteps.eu_preencho_o_campo_de_cep_com_nome()"
});
formatter.result({
  "duration": 61395900,
  "status": "passed"
});
formatter.match({
  "location": "BuscaCEPSteps.clico_em_Buscar()"
});
formatter.result({
  "duration": 55729200,
  "status": "passed"
});
formatter.match({
  "location": "BuscaCEPSteps.vejo_as_informações_do_cep_inserido()"
});
formatter.result({
  "duration": 650595900,
  "status": "passed"
});
});