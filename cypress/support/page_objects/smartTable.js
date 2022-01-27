export class SmartTable {
    alertOnSmartTable(){
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.screenshot()
        cy.on('window:confirm', () => false)
    }   
}

export const onSmartTable = new SmartTable()