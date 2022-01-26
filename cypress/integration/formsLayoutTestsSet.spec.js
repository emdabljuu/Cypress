/// <reference types="cypress" />

import { onNavigation } from "../support/page_objects/navigationPage"
import { onFormLayoutPage } from "../support/page_objects/formLayoutsPage"

describe("Forms testings scenarios", () => {

    beforeEach('Do it before each test', () => {
        cy.visit('http://localhost:4200') //URL will be opened before each test
    })

    it ("Create forms", () => {
        //Inline form
        onNavigation.formsFormLayouts()
        onFormLayoutPage.submitInlineForm("Marcin", "marcin_wiewiora@wp.pl")
        
        //Using the grid form
        onNavigation.formsFormLayouts()
        onFormLayoutPage.submitUsingTheGridForm("marcin_wiewiora@wp.pl", "!Password1", true)
        
        //Using Basic form
        onNavigation.formsFormLayouts()
        onFormLayoutPage.submitUsingBasicForm("marcin_wiewiora@wp.pl", "Password1", true)
        
        //Using form without labels
        onNavigation.formsFormLayouts()
        onFormLayoutPage.submitFormWithoutLabels("All", "Message to all", "Very urgent message")
        
        //Using block form
        onNavigation.formsFormLayouts()
        onFormLayoutPage.submitBlockForm("Marcin", "Wiewióra", "marcin_wiewiora@wp.pl", "www.marcinwiewiora.pl")
        
        //Using horizontal form
        onNavigation.formsFormLayouts()
        onFormLayoutPage.submitHorizontalForm("marcin_wiewiora@wp.pl", "!Password1", true)
    })

})