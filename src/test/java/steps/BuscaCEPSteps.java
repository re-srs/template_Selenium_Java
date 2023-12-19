package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import pages.BuscaCEPPage;
import runner.RunCucumberTeste;

public class BuscaCEPSteps extends RunCucumberTeste {


    BuscaCEPPage buscaCEPPage = new BuscaCEPPage();

    @Dado("^que estou na tela do site dos correios de buscar cep$")
    public void que_estou_na_tela_do_site_dos_correios_de_buscar_cep() throws Throwable {
        buscaCEPPage.acessarTelaLogin();
    }

    @Quando("^eu preencho o campo de cep$")
    public void eu_preencho_o_campo_de_cep() throws Throwable {
        buscaCEPPage.preencherCEP("69005-040");

    }

    @Quando("^clico em Buscar$")
    public void clico_em_Buscar() throws Throwable {
        buscaCEPPage.clicarEmBuscar();
    }

    @Então("^vejo as informações do cep inserido$")
    public void vejo_as_informações_do_cep_inserido() throws Throwable {
        Assert.assertTrue(buscaCEPPage.validarResultadoEncontrado());
    }

    @Quando("^eu preencho o campo de cep com nome$")
    public void eu_preencho_o_campo_de_cep_com_nome() throws Throwable {
        buscaCEPPage.preencherCEP("Lojas Bemol");    }

}
