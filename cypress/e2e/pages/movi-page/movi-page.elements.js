export class MoviePageElements{

    static get home(){
        return{
            get city(){
                return cy.get('div[title="Ciudad"]',{ timeout: 5000 }).should('be.visible')
            },
            get lblCityBogota(){
                return cy.get('.ant-select-dropdown-menu-item').should('be.visible')
            },
            get lblSchedule(){
                return cy.get('div.sessions__button--runtime').eq(1)
            },
            get btnConfirm(){
                return cy.get('button[title="CONFIRMAR"], button[title="confirmar"]').should('be.visible')
            },
            get btnCloseWindowLimitTime(){
                return cy.get('div[role="dialog"]',{ timeout: 10000 }).should('be.visible')
            },
            get lstNumberOfChairs(){
                return cy.get('div.select-seat-format div').eq(1)
            },
            get NumberOneOfChairs(){
                return cy.get('li[role="option"]').eq(1)
            },
            get btnContinue(){
                return cy.get('button[title="continuar"]')
            },
            get btnChair(){
                return cy.get('button.seat-item--Empty').eq(0)
            },
            get btnSelectFoot(){
                return cy.get('img[src="/static/images/add_icon.png"]',{ timeout: 15000 }).eq(0).should('exist').and('be.visible')
            }
    }

}
}