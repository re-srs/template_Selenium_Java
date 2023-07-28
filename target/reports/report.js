$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desconto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Receber desconto da qazando",
  "description": "Eu como usuário da qazando\r\nquero receber um cupom de deconto\r\npara comprar um curso com valor reduzido",
  "id": "receber-desconto-da-qazando",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Visuzalizar código de deconto",
  "description": "",
  "id": "receber-desconto-da-qazando;visuzalizar-código-de-deconto",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou no site da qazando",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "eu preencho meu email",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clico em ganhar cupom",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "eu vejo o código de desconto",
  "keyword": "Então "
});
formatter.match({
  "location": "DescontosStep.que_estou_no_site_da_qazando()"
});
formatter.result({
  "duration": 3726113500,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_preencho_meu_email()"
});
formatter.result({
  "duration": 2188580900,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.clico_em_ganhar_cupom()"
});
formatter.result({
  "duration": 281777700,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_vejo_o_código_de_desconto()"
});
formatter.result({
  "duration": 36616600,
  "status": "passed"
});
});