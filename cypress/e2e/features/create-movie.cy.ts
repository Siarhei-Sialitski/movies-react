context('Create Movie', () => {
  describe('navigation', () => {
    it('should open add movie form after button "Add movie" clicked', () => {
      cy.visit('/');

      cy.get('button').contains('+ add movie').click();

      cy.contains('Add Movie');
    });

    it('should open add movie form if navigate to new', () => {
      cy.visit('/new');

      cy.contains('Add Movie');
    });
  });

  describe('add movie', () => {
    it('should add movie and then search it by name', () => {
      const movieTitle = `testmovie${Math.random()}`;
      cy.visit('/new');

      cy.get('input[data-testid="movieTitle"]').type(movieTitle);
      cy.get('input[data-testid="releaseDate"]').type('2023-01-01');
      cy.get('input[data-testid="posterPath"]').type(
        'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
      );
      cy.get('input[data-testid="voteAverage"]').type('8');
      cy.get('.react-select__control')
        .click()
        .get('.react-select__menu') // find opened dropdown
        .find('.react-select__option') // find all options
        .first()
        .click();
      cy.get('input[data-testid="runtime"]').type('120');
      cy.get('[data-testid="overview"]').type('Movie overview');

      cy.get('input').contains('Submit').click();

      cy.visit('/');
      cy.get('[data-testid="search-input"]').type(movieTitle).type('{enter}');
      cy.contains(movieTitle);
    });
  });
});
