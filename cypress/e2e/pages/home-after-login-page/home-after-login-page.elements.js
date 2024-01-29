export class HomeAfterLoginPageElements{

    static get home(){
        return{
            get movie(){
                return cy.get('div.cta').eq(0)
            }
        };
    }

}