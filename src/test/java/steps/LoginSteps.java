package steps;

import cucumber.api.java.pt.Dado;
import pages.LoginPage;
import runner.RunCucumberTeste;

public class LoginSteps extends RunCucumberTeste {

    LoginPage loginPage = new LoginPage(driver);


    @Dado("^que estou na tela de login$")
    public void que_estou_na_tela_de_login() throws Throwable {
        loginPage.acessarTelaLogin();
    }

    @Dado("^acesso o cadastro de usuário$")
    public void acesso_o_cadastro_de_usuário() throws Throwable {
        loginPage.preencherCampoEmail();
        loginPage.clicarBotaoCriarConta();
    }
}
