/// <reference types="cypress" />

import { onTopSideBar } from "../support/page_objects/topSidebar"

describe("Change theme", () => {

    beforeEach('Do it before each test', () => {
        cy.visit('http://localhost:4200') //URL will be opened before each test
    })

    it ("Change theme", () => {
        //Dark theme, rgb(34, 43, 69)
        onTopSideBar.changeTheme('Dark', 'rgb(34, 43, 69)')

        //Light theme, rgb(255, 255, 255)
        onTopSideBar.changeTheme('Light', 'rgb(255, 255, 255)')

        //Cosmic theme, rgb(50, 50, 89)
        onTopSideBar.changeTheme('Cosmic', 'rgb(50, 50, 89)')

        //Corporate theme, rgb(255, 255, 255)
        onTopSideBar.changeTheme('Corporate', 'rgb(255, 255, 255)')
    })

})