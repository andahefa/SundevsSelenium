import { BillingDetailsPageElements } from "./billing-details-page.elements";

export class BillingDetailsPageHelper{

    
    static clickOnAddCreditOrDebitCard(){
        BillingDetailsPageElements.home.addCreditOrDebitCard.click();
    }
    static setCardNumber(cardNumber){
        BillingDetailsPageElements.home.numberOfCard.type(cardNumber);
    }
    static setNameCard(nameCard){
        BillingDetailsPageElements.home.nameCard.type(nameCard);
    }
    static setExpirationDateCard(expirationDateCard){
        BillingDetailsPageElements.home.lstExpirationDateCard.click();
        BillingDetailsPageElements.home.btnNextYearExpirationDateCard.click();
        BillingDetailsPageElements.home.btnMonthExpirationDateCard.click();
    }
    static setCodeSecurityCard(codeSecurityCard){
        BillingDetailsPageElements.home.codeSecurityCard.type(codeSecurityCard);
    }
    static setNumberOfInstallments(){
        BillingDetailsPageElements.home.lstNumberOfInstallments.click();
        BillingDetailsPageElements.home.OneInstallment.click();
        
    }
    static clickOnAcceptTerms(){
        BillingDetailsPageElements.home.acceptTerms.click();
    }

    static clickOnButtonContinue(){
        BillingDetailsPageElements.home.btnContinue.click();
    }

    static clickOnButtonAccept(){
        BillingDetailsPageElements.home.btnAccept.click();
    }

    static validateExistQr(){
        BillingDetailsPageElements.home.qr;
    }

    static clickOnfinalized(){
        BillingDetailsPageElements.home.btnFinalized.click();
    }
    
}