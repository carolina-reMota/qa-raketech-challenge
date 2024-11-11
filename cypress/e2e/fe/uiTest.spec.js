/// <reference types="cypress" />

describe('UI Test for Raketech Website', () => {

    beforeEach(() => {
        cy.visit('')
    })

    it('Navigation bar element validations', () => {
        cy.get('#logo').should('be.visible')
        cy.get('#top').should('exist').within(() => {
            cy.contains('Investor Relations')
            cy.contains('About')
            cy.contains('Playbook')
            cy.contains('Contact')
        })
    })

    it('Headline validations', () => {
        cy.get('h3').first().contains('iGaming marketing isn’t easy. It’s fast, very fast.')
        cy.scrollTo('0%', '90%')
        cy.get('h3').eq(2).contains('Recommended Reads')
    })

    it('Footer validations', () => {
        cy.get('#footer-widgets').scrollIntoView()
        cy.get('#nav_menu-2').contains('Company')
        cy.get('#nav_menu-3').contains('Investors')
        cy.get('#text-2').contains('Get in Touch')
    })
    

    it('Search for "Products" and navigate to the Products page', () => {
        cy.get('#search-btn').click()
        cy.get('#search-box').get('input').should('be.visible')
        cy.wait(200)
        cy.get('#search-box').get('input').type('Products{enter}')
        cy.wait(100)
        cy.contains('a', 'Products').click( {force: true})
        cy.url().should('include' , '/products')
    } )

    it('Click Casinoguide product and Click with target icon and validate external URL', () => {
        cy.visit('/products')
        cy.scrollTo(0, 500)
        cy.contains('Casino Products')
        
        // to not give an error when changing origin
        cy.origin('https://www.casinoguide.se', () => {
            cy.on('uncaught:exception', (e) => {
                return false
            })
        })
        
        cy.contains('h3' , 'Casinoguide').click()
        cy.get('[class="nectar-close-indicator visible"]')
        cy.get('i.icon-default-style').should('be.visible').and('have.class', 'fa-globe')
        cy.get('.team-desc i.icon-default-style').eq(0).closest('a').invoke('removeAttr', 'target').click()
        cy.wait(200)

        // to run the command on the new origin
        cy.origin('https://www.casinoguide.se', () => {
            cy.url().should('include', 'casinoguide.se')
            cy.get('link[rel="canonical"]').should('have.attr', 'href', 'https://www.casinoguide.se/')
        })
    })

    
}) 