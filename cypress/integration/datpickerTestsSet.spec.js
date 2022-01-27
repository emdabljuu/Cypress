/// <reference types="cypress" />

import { onDatePicker } from "../support/page_objects/datepickerPage"
import { onNavigation } from "../support/page_objects/navigationPage"

describe("Forms testings scenarios", () => {

    beforeEach('Do it before each test', () => {
        cy.visit('http://localhost:4200') //URL will be opened before each test
    })

    it ('Datepicker tests', () => {
        onNavigation.formsFormDatepicker()
        onDatePicker.setCommonDatepicker(16)
        onDatePicker.setDatepickerWithRange(21, 25)
    })
})    