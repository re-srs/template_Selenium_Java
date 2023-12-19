package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import runner.RunBase;
import suport.Utils;

public class BuscaCEPPage extends RunBase {


    private By campoEndereco = By.id("endereco");
    private By botaoBuscar = By.id("btn_pesquisar");

    private By resultadoEncontrado = By.id("mensagem-resultado");

    private By tabelaResultados = By.id("resultado-DNEC");


    public void acessarTelaLogin() {
        getDriver().get("https://buscacepinter.correios.com.br/app/endereco/index.php");
        //Utils.esperarElementoEstarPresente(create_email_field, 20);
    }

    public void preencherCEP(String cep) {
        getDriver().findElement(campoEndereco).sendKeys(cep);
    }


    public void clicarEmBuscar() {
        getDriver().findElement(botaoBuscar).click();
    }

    public boolean validarResultadoEncontrado() {
        Utils.esperarElementoEstarVisivel(resultadoEncontrado, 20);
        boolean temResultado = getDriver().findElement(tabelaResultados).isDisplayed();
        return temResultado;


    }
}