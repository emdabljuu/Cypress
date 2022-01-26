export class FormLayoutPage{

    //Submit Inline form
    submitInlineForm(name, email){
        cy.contains('nb-card', 'Inline form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force:true})
            cy.wrap(form).submit()
            
        })
    }

    //Submit Using The Grid Form
    submitUsingTheGridForm(email, password, value){
        cy.contains('nb-card', 'Using the Grid').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="radio"]').first().check({force:value}).should("be.checked")
            cy.wrap(form).submit()
        })
    }

    //Submit Basic Form
    submitUsingBasicForm(email, password, value){
        cy.contains('nb-card', 'Basic form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="checkbox"]').check({force:value})
            cy.wrap(form).submit()
        })
    }

    //Sumbit Form Without Labels
    submitFormWithoutLabels(recipients, subject, message){
        cy.contains('nb-card', 'Form without labels').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Recipients"]').type(recipients)
            cy.wrap(form).find('[placeholder="Subject"]').type(subject)
            cy.wrap(form).find('[placeholder="Message"]').type(message)
            cy.wrap(form).submit()
        })
    }

    //Submit Block form
    submitBlockForm(firstName, lastName, email, website){
        cy.contains('nb-card', 'Block form').then( form => {
            cy.wrap(form).find('[placeholder="First Name"]').type(firstName)
            cy.wrap(form).find('[placeholder="Last Name"]').type(lastName)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Website"]').type(website)
            cy.wrap(form).find('[type="submit"]').click()
        })
    }

    //Submit Horizontal Form
    submitHorizontalForm(email, password, value){
        cy.contains('nb-card', 'Horizontal form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="checkbox"]').check({force:value})
            cy.wrap(form).submit()
        })
    }
}

export const onFormLayoutPage = new FormLayoutPage()