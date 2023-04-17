context('Search component', () => {
  describe('search behavior', () => {
    beforeEach(function () {
      cy.visit('/');
    });

    const movie = 'Pandas';

    it('should render search with placeholder', () => {
      cy.contains('search');
      cy.get('input[placeholder*="What do you want to watch?"]');
    });

    it('Search and click button', () => {
      cy.get('input[data-testid="search-input"]').type(movie);
      cy.get('input[data-testid="search-input"]').should('have.value', movie);

      cy.get('button[data-testid="search-button"]').click();

      cy.get('[data-testid="movie-tile-title"]').should('have.text', movie);
    });

    it('Search input and press Enter', () => {
      cy.get('input[data-testid="search-input"]').type(movie).type('{enter}');

      cy.get('[data-testid="movie-tile-title"]').should('have.text', movie);
    });
  });
});
