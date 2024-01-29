import { MoviePageElements } from "./movi-page.elements";



export class MoviePageHelper{

    static clickOnCity(){
        MoviePageElements.home.city.click();
    }

    static clickOnBogotaCity(){
        MoviePageElements.home.lblCityBogota.click();
    }

    static clickOnSchedule(){
        MoviePageElements.home.lblSchedule.click();
    }

    static clickOnConfirm(){
        MoviePageElements.home.btnConfirm.dblclick();
    }

    static clickOnCloseWindowTimeLimit(){
        MoviePageElements.home.btnCloseWindowLimitTime.type('{esc}');
    }

    static clickOnlstNumberOfChairs(){
        MoviePageElements.home.lstNumberOfChairs.click();
    }

    static clickOnNumberOneOfChairs(){
        MoviePageElements.home.NumberOneOfChairs.click();
    }

    static clickOnButtonContinue(){
        MoviePageElements.home.btnContinue.click();
    }

    static clickOnButtonChair(){
        MoviePageElements.home.btnChair.click();
    }

    static clickSelectFoot(){
        MoviePageElements.home.btnSelectFoot.click();
    }
    
}