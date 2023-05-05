context('Create Movie', () => {
  describe('navigation', () => {
    it('should open edit movie form after button "Add movie" clicked', () => {
      cy.visit('/');
      cy.get('button[data-testid="menuIcon"]').first().click();

      cy.contains('Edit').click();
      cy.contains('Edit Movie');
      cy.contains('The Gold Rush');
    });

    it('should open add movie form if navigate to :id/edit', () => {
      cy.visit('/962/edit');

      cy.contains('Edit Movie');
      cy.contains('The Gold Rush');
    });
  });

  describe('edit movie', () => {
    it('should find movie by search after title update', () => {
      const newMovieTitle = `The Gold Rush${Math.random()}`;
      cy.visit('/962/edit');

      cy.get('input[data-testid="movieTitle"]').clear().type(newMovieTitle);

      cy.get('input').contains('Submit').click();

      cy.visit('/');
      cy.get('[data-testid="search-input"]')
        .type(newMovieTitle)
        .type('{enter}');
      cy.contains(newMovieTitle);
    });
  });
});
