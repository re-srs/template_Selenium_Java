package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import suport.Utils;

public class HomePage extends Utils {

    WebDriver driver;

    public HomePage(WebDriver driver) {
        this.driver = driver;
    }

    public void acessarAplicacao() {
        driver.get("https://qazando.com.br/curso.html");
        driver.manage().window().maximize();
        esperarElementoEstarPresente(By.id("btn-ver-cursos"), 10);
        Assert.assertEquals(true,driver.findElement(By.id("btn-ver-cursos")).isDisplayed());
    }

    public void scrollDown() throws InterruptedException {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollTo(0,10000)");
        Thread.sleep(2000);
    }

    public void preencherEmail() {
        driver.findElement(By.id("email")).sendKeys("renataglbmelo@gmail.com");
    }

    public void clickGanharDesconto() {
        driver.findElement(By.id("email")).sendKeys(Keys.TAB);
        driver.findElement(By.id("email")).sendKeys(Keys.ENTER);
/*        WebElement botao;
        botao = driver.findElement(By.id("button"));
        botao.click();*/
    }

    public void verificarCupomDesconto() {
        String cupom;
        cupom = driver.findElement(By.cssSelector("#cupom > h2 > span")).getText();
        //System.out.println(cupom);
        Assert.assertEquals("QAZANDO15OFF", cupom);
    }
}
