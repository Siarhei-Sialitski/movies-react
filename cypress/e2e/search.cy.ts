context('Search component', () => {
describe('Search performing', () => {
  beforeEach(function () {
    cy.visit('/', {
      onBeforeLoad (win) {
        cy.spy(win.console, 'log').as('consoleLog')
      },
    })
  })

  const movie = 'Kill Bill';

  it('Contains search component', () => {
    cy.contains('search')
    cy.get('input[placeholder*="What do you want to watch?"]')
  })

  it('Search and click button', () => {
    cy.contains('search')
    cy.get('.searchInput').type(movie)
    cy.get('.searchInput').should('have.value', movie)

    cy.get('.searchButton').click()
    cy.get('@consoleLog').should('be.calledWith', movie)
  })

  it('Search input and press Enter', () => {
    cy.contains('search')
    cy.get('.searchInput').type(movie)
    cy.get('.searchInput').should('have.value', movie)

    cy.get('.searchInput').type('{enter}')
    cy.get('@consoleLog').should('be.calledWith', movie)
  })
})
})