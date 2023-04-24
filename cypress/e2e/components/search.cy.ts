context('Search component', () => {
  const movie = 'Pandas';

  describe('search behavior', () => {
    beforeEach(function () {
      cy.visit('/');
    });

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

  describe('search params behavior', () => {
    it('should render search with value from query param', () => {
      cy.visit(`?query=${movie}`);

      cy.get('input[data-testid="search-input"]').should('have.value', movie);
    });

    it('should set query param after input search and click search button', () => {
      cy.visit('/');

      cy.get('input[data-testid="search-input"]').type(movie);
      cy.get('button[data-testid="search-button"]').click();

      cy.url().should('include', `?query=${movie}`);
    });

    it('should set query param after input search and press enter', () => {
      cy.visit('/');

      cy.get('input[data-testid="search-input"]').type(movie).type('{enter}');

      cy.url().should('include', `?query=${movie}`);
    });

    it('should remove query param after clear search and press enter', () => {
      cy.visit(`?query=${movie}`);

      cy.get('input[data-testid="search-input"]').clear().type('{enter}');

      cy.url().should('not.include', `?query=${movie}`);
    });

    it('should remove query param after clear search and click search button', () => {
      cy.visit(`?query=${movie}`);

      cy.get('input[data-testid="search-input"]').clear();
      cy.get('button[data-testid="search-button"]').click();

      cy.url().should('not.include', `?query=${movie}`);
    });
  });
});
