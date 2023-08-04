package pages;

import gherkin.lexer.Th;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import suport.Utils;

public class LoginPage extends Utils {

    WebDriver driver;
    private By create_email_field = By.id("email_create");
    private By create_email_button = By.id("SubmitCreate");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void acessarTelaLogin(){
        driver.get("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account");
        esperarElementoEstarPresente(create_email_field, 20);
    }

    public void preencherCampoEmail() throws InterruptedException {
        driver.findElement(create_email_field).sendKeys(geraEmail());
        Thread.sleep(2000);

    }
    public void clicarBotaoCriarConta() {
        driver.findElement(create_email_button).click();
    }
}
