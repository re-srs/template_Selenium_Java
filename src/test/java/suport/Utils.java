package suport;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTeste;

import java.util.Random;

public class Utils extends RunCucumberTeste {

    public void esperarElementoEstarPresente(By element, int tempo){
        WebDriverWait wait = new WebDriverWait(driver, tempo);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public String geraEmail() {
        String email_init = "qazando_";
        String email_final = "@qazando.com.br";

        Random randow = new Random();
        int minimo = 1;
        int maximo = 999999999;
        int resultado = randow.nextInt(maximo-minimo) + minimo;

        return email_init + resultado + email_final;
    }
}
