export class TopSideBar {
    changeTheme (theme, rgb) {
        cy.get('button[class="select-button"]')
            .click()
            .get('.options-list').contains(theme)
            .click()
            .get('nb-layout-header nav').should('have.css', 'background-color', rgb)
    }
}

export const onTopSideBar = new TopSideBar()