
function compareUrl(urlToCompare) {
    cy.url().should('include', urlToCompare)
}

function authGoBack() {
    cy.get('a[aria-label="Back"]').click()
}

function displayList(menuItem) {
    cy.contains('a', menuItem).then( menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then( attr => {
            if( attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage {

    layoutStepper () {
        displayList('Layout')        
        cy.contains('Stepper').click()
        compareUrl('stepper')
    }
    
    layoutAccordion () {
        displayList('Layout')
        cy.contains('Accordion').click()
        compareUrl('accordion')

    }

    formsFormLayouts () {
        displayList('Forms')
        cy.contains('Form Layouts').click()
        compareUrl('layouts')
    }

    formsFormDatepicker () {
        displayList('Forms')
        cy.contains('Datepicker').click()
        compareUrl('datepicker')
    }

    modalAndOverlaysDialog () {
        displayList('Modal & Overlays')
        cy.contains('Dialog').click()
        compareUrl('dialog')
    }

    modalAndOverlaysWindow () {
        displayList('Modal & Overlays')
        cy.contains('Window').click()
        compareUrl('window')
    }

    modalAndOverlaysPopover () {
        displayList('Modal & Overlays')
        cy.contains('Popover').click()
        compareUrl('popover')
    }

    modalAndOverlaysToastr () {
        displayList('Modal & Overlays')
        cy.contains('Toastr').click()
        compareUrl('toastr')
    }

    modalAndOverlaysTooltip () {
        displayList('Modal & Overlays')
        cy.contains('Tooltip').click()
        compareUrl('tooltip')
    }

    extraComponentsCalendar () {
        displayList('Extra Components')
        cy.contains('Calendar').click()
        compareUrl('calendar')
    }

    tablesAndDataSmartTable () {
        displayList('Tables & Data')
        cy.contains('Smart Table').click()
        compareUrl('smart-table')
    }

    tablesAndDataTreeGrid () {
        displayList('Tables & Data')
        cy.contains('Tree Grid').click()
        compareUrl('tree-grid')
    }

    authLogin () {
        displayList('Auth')
        cy.contains('Login').click()
        compareUrl('login')
        authGoBack()
    }

    authRegister () {
        displayList('Auth')
        cy.contains('Register').click()
        compareUrl('register')
        authGoBack()
    }

    authRequestPassword () {
        displayList('Auth')
        cy.contains('Request Password').click()
        compareUrl('request-password')
        authGoBack()
    }

    authResetPassword () {
        displayList('Auth')
        cy.contains('Reset Password').click()
        compareUrl('reset-password')
        authGoBack()
    }


}
export const onNavigation = new NavigationPage()