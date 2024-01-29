export class CreateAccountPageElements{

    static get home(){
        return{
            get lstPersonType(){
                return cy.get('#register_EducationLevel')
            },
            get divNaturalTypePerson(){
                return cy.get('ul li').contains('Natural')
            },
            get lstDocumentType(){
                return cy.get('#register_HouseholdIncome')
            },
            get divCCDocumentType(){
                return cy.get('ul li').contains('Cédula de ciudadanía')
            },
            get inputNames(){
                return cy.get('#register_FirstName')
            },  
            get inputSurnames(){
                return cy.get('#register_LastName')
            },  
            get lstGender(){
                return cy.get('#register_Gender')
            },  
            get divMaleGender(){
                return cy.get('ul li').contains('Masculino')
            },
            get inputDocumentNumber(){
                return cy.get('#register_NationalID')
            },  
            get lstBirthdate(){
                return cy.get('#register_birthDay')
            },
            get inputBirthdate(){
                return cy.get('.ant-calendar-input ')
            },
            get inputMobilePhone(){
                return cy.get('#register_MobilePhone')
            },
            get inputAddress(){
                return cy.get('#register_Address1')
            },
            get inputAccessEmail(){
                return cy.get('#register_Email')
            },
            get inputConfirmAccessEmail(){
                return cy.get('#register_confirmEmail')
            },
            get inputPassword(){
                return cy.get('#register_Password')
            },
            get inputConfirmPassword(){
                return cy.get('#register_confirmPassword')
            },
            get lstCity(){
                return cy.get('#register_PreferredComplexCity')
            },  
            get divCityBogota(){
                return cy.get('ul li').contains('Bogota')
            },
            get lstPreferredTheater(){
                return cy.get('#register_PreferredComplex')
            },  
            get divPreferredTheaterMultiplaza(){
                return cy.get('ul li').contains('Lab v5 Multiplaza')
            },
            get chkRegisterTermines(){
                return cy.get('#register_termines')
            },
            get btnCreateAccount(){
                return cy.get('button[title="Crear cuenta"]')
            },
            get btnContinue(){
                return cy.get('button[title="continuar"]')
            }

        };
    }

}