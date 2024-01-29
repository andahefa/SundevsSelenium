import { CreateAccountPageElements } from "./create-account-page.elements";

export class CreateAccountPageHelper{

    static setNaturalPersonType(){
        CreateAccountPageElements.home.lstPersonType.click();
        CreateAccountPageElements.home.divNaturalTypePerson.click();
    }

    static setCCDocumentType(){
        CreateAccountPageElements.home.lstDocumentType.click();
        CreateAccountPageElements.home.divCCDocumentType.click();
    }

    static setNames(){
        CreateAccountPageElements.home.inputNames.type('Pepito');
    }

    static setSurnames(){
        CreateAccountPageElements.home.inputSurnames.type('Perez');
    }

    static setGender(){
        CreateAccountPageElements.home.lstGender.click();
        CreateAccountPageElements.home.divMaleGender.click();
    }

    static setDocumentNumber(documentNumber){
        CreateAccountPageElements.home.inputDocumentNumber.type(documentNumber);
    }

    static setBirthdate(){
        CreateAccountPageElements.home.lstBirthdate.click();
        CreateAccountPageElements.home.inputBirthdate.clear();
        CreateAccountPageElements.home.inputBirthdate.type('1993-05-12{enter}');
    }

    static setMobilePhone(mobilePhone){
        CreateAccountPageElements.home.inputMobilePhone.type(mobilePhone);
    }

    static setAdress(){
        CreateAccountPageElements.home.inputAddress.type('TV 65 # 59 - 85');
    }

    static setAccessEmail(email){
        CreateAccountPageElements.home.inputAccessEmail.type(email);
    }

    static setConfirmAccessEmail(email){
        CreateAccountPageElements.home.inputConfirmAccessEmail.type(email);
    }

    static setPassword(password){
        CreateAccountPageElements.home.inputPassword.type(password);
    }

    static confirmPassword(password){
        CreateAccountPageElements.home.inputConfirmPassword.type(password);
    }

    static setCity(){
        CreateAccountPageElements.home.lstCity.click();
        CreateAccountPageElements.home.divCityBogota.click();
    }

    static setPreferredTheater(){
        CreateAccountPageElements.home.lstPreferredTheater.click();
        CreateAccountPageElements.home.divPreferredTheaterMultiplaza.click();
    }
    
    static clickRegisterTermines(){
        CreateAccountPageElements.home.chkRegisterTermines.click();
    }

    static clickCreateAccount(){
        CreateAccountPageElements.home.btnCreateAccount.click();
    }

    static clickContinue(){
        CreateAccountPageElements.home.btnContinue.click();
    }

    static getRandomEmail = (length = 10)=>{
        let email = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            email += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return email + "@gmail.com";
    }

    static getRandomPassword = (length = 8)=>{
        let password = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return "Aa" + password;
    }

    static getRandomPhone = (length = 7)=>{
        let phoneNumber = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            phoneNumber += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return '312' + phoneNumber;
    }


    static getRandomDocumentNumber = (length = 6)=>{
        let documentNumber = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            documentNumber += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return '1020' + documentNumber;
    }
}