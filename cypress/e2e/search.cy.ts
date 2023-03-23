describe('Search', () => {
  it('Visits the movie app', () => {
    cy.visit('http://localhost:3000')
  })

  it('Contains search component', () => {
    cy.visit('http://localhost:3000')
    cy.contains('search')
    cy.get('input[placeholder*="What do you want to watch?"]')
  })

  it('Search typing amd button click', () => {
    cy.visit('http://localhost:3000')
    cy.contains('search')
    cy.get('.searchInput').type('Kill Bill')
    cy.get('.searchInput').should('have.value', 'Kill Bill')

    cy.get('.searchButton').click()
  })

  it('Search typing amd button click and Enter', () => {
    cy.visit('http://localhost:3000')
    cy.contains('search')
    cy.get('.searchInput').type('Kill Bill')
    cy.get('.searchInput').should('have.value', 'Kill Bill')

    cy.get('.searchInput').type('{enter}')
  })
})