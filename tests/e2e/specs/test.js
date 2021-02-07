// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('math operations should update the display with the result of the operation', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '11')
  })

  it('multiple operations should be able to be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('total should be a negative number', () => {
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-3')
  })

  it('total should be a decimal number', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  it('total should be a very large number', () => {
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('#number7').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '17918')
  })

  it('dividing by zero cannot be done', () => {
    cy.get('#number4').click();
    cy.get('#number7').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Cannot divide by zero')
  })





})
