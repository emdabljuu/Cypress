export class DatePicker {
    //Common Datepicker
    setCommonDatepicker(day){
        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            cy.wrap(input).get('nb-calendar-day-picker').contains(day).click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Jan '+day+', 2022')
        })
    }

    setDatepickerWithRange(dayStart, dayEnd){
        cy.contains('nb-card', 'Datepicker With Range').find('input').then( input => {
            cy.wrap(input).click()
            cy.wrap(input).get('nb-calendar-day-picker').contains(dayStart).click()
            cy.wrap(input).get('nb-calendar-day-picker').contains(dayEnd).click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Jan '+dayStart+', 2022 - Jan '+dayEnd+', 2022')
        })
    }

    //Datepicker With Range


    //Datepicker With Disabled Min Max Values
}

export const onDatePicker = new DatePicker()