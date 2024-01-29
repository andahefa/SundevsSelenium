export class PlansPageElements{

    static get home(){
        return{
            get btnCreateAccountNoMembership(){
                return cy.get('div.ant-col button').eq(0)
            }
        };
    }

}