export class TooltipPage {
    coloredTooltips(tooltipName){
        cy.contains('nb-card', 'Colored Tooltips')
            .contains(tooltipName)
            .click()

        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    }    
}

export const onTooltipPage = new TooltipPage()