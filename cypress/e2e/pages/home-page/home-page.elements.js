export class HomePageElements{

    static get menu(){
        return{
            get createAccount(){
                return cy.get('button[title="CREAR CUENTA"]').eq(0)
            },
            get closeRedeban(){
                return cy.get('.ant-modal-close').should('be.visible')
            },
            get closeCity(){
                return cy.get('.anticon anticon-close')
            },
            get login(){
                return cy.contains('INICIAR SESI').should('be.visible').and('be.enabled')
            },
            get username(){
                return cy.get('input#MemberEmail')
            },
            get password(){
                return cy.get('input#MemberPassword')
            },
            get singn(){
                return cy.get('button[title="Ingresar"]')
            }
        };
    }

}