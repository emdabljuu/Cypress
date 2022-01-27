/// <reference types="cypress" />

import { onNavigation } from "../support/page_objects/navigationPage"
import { onTooltipPage } from "../support/page_objects/tooltipPage"

describe("Tooltips and Popups", () => {

    beforeEach('Do it before each test', () => {
        cy.visit('http://localhost:4200') //URL will be opened before each test
    })

    it ('tooltip test', () => {
        onNavigation.modalAndOverlaysTooltip()
        onTooltipPage.coloredTooltips("Primary")
        onTooltipPage.coloredTooltips("Default")
        onTooltipPage.coloredTooltips("Success")
        onTooltipPage.coloredTooltips("Danger")
        onTooltipPage.coloredTooltips("Info")
        onTooltipPage.coloredTooltips("Warning")
    })
})    