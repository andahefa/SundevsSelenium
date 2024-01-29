export class BillingDetailsPageElements{

    static get home(){
        return{
            get addCreditOrDebitCard(){
                return cy.get('span.text--uppercase').eq(0)
            },
            get numberOfCard(){
                return cy.get('div[role="tabpanel"] input').eq(0)
            },
            get nameCard(){
                return cy.get('div[role="tabpanel"] input').eq(1).should('be.visible')
            },
            get lstExpirationDateCard(){
                return cy.get('span[id="payment_creditCard.expirationDate"] input')
            },
            get btnNextYearExpirationDateCard(){
                return cy.get('a.ant-calendar-month-panel-next-year-btn')
            },
            get btnMonthExpirationDateCard(){
                return cy.contains('a', 'may.')
            },
            get codeSecurityCard(){
                return cy.get('div[role="tabpanel"] input').eq(3)
            },
            get lstNumberOfInstallments(){
                return cy.get('div[id="payment_creditCard.installments"] div').eq(1)
            },
            get OneInstallment(){
                return cy.get('li[role="option"]').eq(0)
            },
            get acceptTerms(){
                return cy.get('input#payment_agreement')
            },
            get btnContinue(){
                return cy.get('button[title="continuar"]')
            },
            get btnAccept(){
                return cy.get('button[title="ACEPTAR"]')
            },
            get qr(){
                return cy.get('[shape-rendering="crispEdges"]',{ timeout: 1800000 }).should('exist').and('be.visible');
            },
            get btnFinalized(){
                return cy.get('button[title="FINALIZAR"]')
            },
            
        };
    }

}