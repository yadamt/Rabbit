/// <reference types="Cypress" />

describe("Login", function(){
  it('Sign in', function(){
      cy.visit('https://staging-finance.rabbitinternet.com/en/product/health-insurance/questions')
      cy.get('.form-check-label').contains('IPD/OPD').click()
      cy.get('.form-check-label').contains('Salary man').click()
      cy.get('select').select('Thailand').should('have.value','A102')
      cy.get('input[type="tel"]').type('0817665533')
      cy.wait(200)
      cy.get('.btn-primary').eq(1).contains('Next').click()
      cy.get('input[name="customer_first_name"]').type('rabbit')
      cy.get('input[name="customer_last_name"]').type('test')
      cy.get('.btn-primary').eq(2).contains('Next').click()
      cy.get('input[name="customer_email"]').type('rabbit_finance@gmail.com')
      cy.get('.btn-primary').eq(3).contains('Next').click()
      cy.get('.form-check-label').contains('Female').click()
      cy.get('input[name="customer_dob"]').type('04/09/2021')
      cy.get('.btn-primary').eq(4).contains('Next').click()
      cy.get('.form-check-label').contains('Consent').click()
      cy.get('#btn-marketing-consent').should('be.enabled')

      //cy.get('input[type="email"]').type('qamilestone.academy@gmail.com')
      //cy.get('input[type="password"').type('admin123')
      //cy.get('.btn').contains('Sign in').click()
  })
})


