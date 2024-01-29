import { HomePageContanst } from "../home-page.constants";
import { HomePageElements } from "./home-page.elements";

export class HomePageHelper{

    static navigatetoTheApplication(){
        cy.visit(HomePageContanst.applicationUrl);
    }

    static clickOnCloseWindowRedeban(){
        HomePageElements.menu.closeRedeban.click();
    }

    static clickOnCreateAccount(){
        HomePageElements.menu.createAccount.click();
    }

    static login(username, password){
        // HomePageElements.menu.closeCity.click();
        HomePageElements.menu.login.click({ multiple: true });
        HomePageElements.menu.username.type(username);
        HomePageElements.menu.password.type(password);
        HomePageElements.menu.singn.click();
    }
}