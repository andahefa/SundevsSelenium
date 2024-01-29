import { BillingDetailsPageHelper } from "../pages/billing-details-page/billing-details-page.helper";
import { CreateAccountPageHelper } from "../pages/create-account-page/create-account-page.helper";
import { HomeAfterLoginPageHelper } from "../pages/home-after-login-page/home-after-login-page.helper";
import { HomePageHelper } from "../pages/home-page/home-page.helper";
import { MoviePageHelper } from "../pages/movi-page/movie-page.helper";
import { PlansPageHelper } from "../pages/plans-page/plans-page.helper";

describe('buy-ticket', () => {
    it('Buy ticket cinemark created user account',() =>{
        const email = CreateAccountPageHelper.getRandomEmail();
        const password = CreateAccountPageHelper.getRandomPassword();
        const mobilePhone = CreateAccountPageHelper.getRandomPhone();
        const documentNumber = CreateAccountPageHelper.getRandomDocumentNumber();
        cy.log(email,password)
        HomePageHelper.navigatetoTheApplication();
        HomePageHelper.clickOnCloseWindowRedeban();
        //HomePageHelper.login('andahefa1995@gmail.com', 'Aa1020808853*')
        HomePageHelper.clickOnCreateAccount();
        PlansPageHelper.clickOnCreateAccountNoMembership();
        CreateAccountPageHelper.setNaturalPersonType();
        CreateAccountPageHelper.setCCDocumentType();
        CreateAccountPageHelper.setNames();
        CreateAccountPageHelper.setSurnames();
        CreateAccountPageHelper.setGender();
        CreateAccountPageHelper.setDocumentNumber(documentNumber);
        CreateAccountPageHelper.setBirthdate();
        CreateAccountPageHelper.setMobilePhone(mobilePhone);
        CreateAccountPageHelper.setAdress();
        CreateAccountPageHelper.setAccessEmail(email);
        CreateAccountPageHelper.setConfirmAccessEmail(email);
        CreateAccountPageHelper.setPassword(password);
        CreateAccountPageHelper.confirmPassword(password);
        CreateAccountPageHelper.setCity();
        CreateAccountPageHelper.setPreferredTheater();
        CreateAccountPageHelper.clickRegisterTermines();
        CreateAccountPageHelper.clickCreateAccount();
        CreateAccountPageHelper.clickContinue();
        HomeAfterLoginPageHelper.clickOnMovie();
        MoviePageHelper.clickOnCity();
        MoviePageHelper.clickOnBogotaCity();
        MoviePageHelper.clickOnSchedule();
        MoviePageHelper.clickOnConfirm();
        MoviePageHelper.clickOnCloseWindowTimeLimit();
        MoviePageHelper.clickOnlstNumberOfChairs();
        MoviePageHelper.clickOnNumberOneOfChairs();
        MoviePageHelper.clickOnButtonContinue();
        MoviePageHelper.clickOnButtonChair();
        MoviePageHelper.clickOnButtonContinue();
        MoviePageHelper.clickOnConfirm();
        MoviePageHelper.clickSelectFoot();
        MoviePageHelper.clickOnButtonContinue();
        MoviePageHelper.clickOnButtonContinue();
        BillingDetailsPageHelper.clickOnAddCreditOrDebitCard();
        BillingDetailsPageHelper.setCardNumber('5471300000000003');
        BillingDetailsPageHelper.setNameCard('APPROVED');
        BillingDetailsPageHelper.setExpirationDateCard('05/2025');
        BillingDetailsPageHelper.setCodeSecurityCard('777');
        BillingDetailsPageHelper.setNumberOfInstallments();
        BillingDetailsPageHelper.clickOnAcceptTerms();
        BillingDetailsPageHelper.clickOnButtonContinue();
        BillingDetailsPageHelper.clickOnButtonAccept();
        BillingDetailsPageHelper.validateExistQr();
        BillingDetailsPageHelper.clickOnfinalized();
        cy.wait(2000);

    })
  })