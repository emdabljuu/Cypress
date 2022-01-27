/// <reference types="cypress" />

import { onNavigation } from "../support/page_objects/navigationPage"
import { onSmartTable } from "../support/page_objects/smartTable"

describe("Alerts tests", () => {

    beforeEach('Do it before each test', () => {
        cy.visit('http://localhost:4200') //URL will be opened before each test
    })

    it ('Remove alert', () => {
        onNavigation.tablesAndDataSmartTable()
        onSmartTable.alertOnSmartTable()
    })
})    