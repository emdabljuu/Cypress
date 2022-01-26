/// <reference types="cypress" />

import { onFormLayoutPage } from "../support/page_objects/formLayoutsPage"
import { onNavigation } from "../support/page_objects/navigationPage"

describe('Navigation test for whole application', () => {
    beforeEach('Do it before each test', () => {
        cy.visit('http://localhost:4200') //URL will be opened before each test
    })

    afterEach('Make screenshot after each test', () => {
        cy.screenshot() //screenshot will be made after each test
    })

    it ("Hamburger test", () => {
        cy.get('[icon="menu-2-outline"]').click()
    })

    it ('Check every menu item and compare with current URL', () => {
        //Layout
        onNavigation.layoutStepper()
        onNavigation.layoutAccordion()

        //Forms
        onNavigation.formsFormLayouts()
        onNavigation.formsFormDatepicker()

        //Modal And Overlays
        onNavigation.modalAndOverlaysDialog()
        onNavigation.modalAndOverlaysPopover()
        onNavigation.modalAndOverlaysToastr()
        onNavigation.modalAndOverlaysTooltip()
        onNavigation.modalAndOverlaysWindow()

        //Tables and Data
        onNavigation.extraComponentsCalendar()
        onNavigation.tablesAndDataTreeGrid()

        //auth
        onNavigation.authLogin()
        onNavigation.authRegister()
        onNavigation.authRequestPassword()
        onNavigation.authResetPassword()

    })

})