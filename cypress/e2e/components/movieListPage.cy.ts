context('Movie List Page component', () => {
  describe('rendering', () => {
    beforeEach(function () {
      cy.visit('/');
    });

    const movie = 'Pandas';

    it('should render search initially', () => {
      cy.contains('search');
      cy.get('input[placeholder*="What do you want to watch?"]');
    });

    it('shoud contain expected movie after search', () => {
      cy.get('[data-testid="search-input"]').type(movie);

      cy.get('[data-testid="search-input"]').type('{enter}');
      cy.contains(movie);
    });

    it('shoud contain ¡Three Amigos! after sort by title selected', () => {
      cy.get('select[data-testid="sort-dropdown"]').select('Title');

      cy.contains('¡Three Amigos!');
    });

    it('shoud contain The Gold Rush 1925 yesr release after sort by release date selected', () => {
      cy.get('select[data-testid="sort-dropdown"]').select('Title');
      cy.get('select[data-testid="sort-dropdown"]').select('Release Date');

      cy.contains('The Gold Rush');
      cy.contains('1925');
    });

    it('shoud contain filtered genre in all 10 movies if filtered by genre', () => {
      cy.get('button').contains('Documentary').click();

      cy.get('[data-testid="moviegenres"]').should('contain', 'Documentary');
    });

    it('shoud render movie details after click on tile', () => {
      cy.get('span').contains('The Mummy').click();

      cy.get('[data-testid="moviedetailsrootcontainer"]');
      cy.get('[data-testid="searchicon"]').should('be.visible');
      cy.contains(
        'An ancient Egyptian priest called Imhotep is revived when an archaeological expedition finds his mummy and one of the archaeologists accidentally reads an ancient life-giving spell. Imhotep, escaping from the field site, goes in search for the reincarnation of the soul of his lover.'
      );
    });

    it('shoud render search after search icon click on movie details', () => {
      cy.get('span').contains('The Mummy').click();

      cy.get('[data-testid="moviedetailsrootcontainer"]');

      cy.get('[data-testid="searchicon"]').click();

      cy.contains('search');
      cy.get('input[placeholder*="What do you want to watch?"]');
    });
  });
});
