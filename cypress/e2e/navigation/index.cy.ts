context('Navigation', () => {
  describe('rendering', () => {
    it('should render search form and a list of movies when navigating to root', () => {
      cy.visit('/');

      cy.get('[data-testid="search"]').should('be.visible');
      cy.get('[data-testid="movielistpage"]').should('be.visible');
    });

    describe('query parameter', () => {
      it('should update query param after input search and press enter', () => {
        const movie = 'Pandas';
        cy.visit('/');

        cy.get('input[data-testid="search-input"]').type(movie).type('{enter}');

        cy.url().should('include', `?query=${movie}`);
      });

      it('should refresh movie list reflecting input search and press enter', () => {
        const movie = 'Pandas';
        cy.visit('/');

        cy.get('input[data-testid="search-input"]').type(movie).type('{enter}');

        cy.get('[data-testid="movie-tile-title"]').should('contain', movie);
      });

      it('should render search with value from query param when navigating to "/?query=Pandas', () => {
        const movie = 'Pandas';
        cy.visit(`?query=${movie}`);

        cy.get('input[data-testid="search-input"]').should('have.value', movie);
      });

      it('should display movie list reflecting query param when navigating to "/?query=Pandas', () => {
        const movie = 'Pandas';
        cy.visit(`?query=${movie}`);

        cy.get('input[data-testid="search-input"]').should('have.value', movie);
      });
    });

    describe('genre parameter', () => {
      it('shoud display genre as selected from genre param', () => {
        const genre = 'Comedy';
        cy.visit(`?genre=${genre}`);

        cy.get('[data-testid="moviegenres"]').should('contain', genre);
      });

      it('shoud display all movies of passed genre from genre param', () => {
        const genre = 'Comedy';
        cy.visit(`?genre=${genre}`);

        cy.get('button[data-testid="activegenrebutton"').contains(genre);
      });
    });

    describe('sortBy parameter', () => {
      it('shoud update url with sortBy search parameter whene selecting sorting by value', () => {
        const sortBy = 'Title';
        cy.visit('/');

        cy.get('[data-testid="sort-dropdown"]').click();

        cy.get('div').contains(sortBy).click();
        cy.get('[data-testid="sort-dropdown"]').click();

        cy.url().should('include', `?sortBy=${sortBy}`);
      });

      it('shoud display movie list with reflected movie list when selecting sorting by value', () => {
        const sortBy = 'Title';
        cy.visit('/');

        cy.get('[data-testid="sort-dropdown"]').click();

        cy.get('div').contains(sortBy).click();
        cy.get('[data-testid="sort-dropdown"]').click();

        cy.contains('¡Three Amigos!');
      });

      it('shoud display movie list sorted by title when navigating to `?sortBy=title`', () => {
        const sortBy = 'Title';
        cy.visit(`/?sortBy=${sortBy}`);

        cy.contains('¡Three Amigos!');
      });
    });

    describe('movieId param', () => {
      it('shoud contain movieId with the id of movie in url after click on tile', () => {
        cy.visit('/');

        cy.get('span').contains('The Gold Rush').click();

        cy.url().should('include', 962);
      });

      it('shoud preserve query, sortBy, genre after click on tile', () => {
        const query = 'the';
        const genre = 'Comedy';
        cy.visit(`/?query=${query}&genre=${genre}&sortBy=title`);

        cy.get('span').contains('All About My Mother').click();

        cy.url().should('include', 99);
        cy.url().should('include', `query=${query}`);
        cy.url().should('include', `genre=${genre}`);
        cy.url().should('include', `sortBy=title`);
      });

      it('shoud diaply movie details and movie list when navigating to "/:movieId"', () => {
        cy.visit('/99');

        cy.get('[data-testid="moviedetails-title"]').should(
          'contain',
          'All About My Mother'
        );
        cy.get('[data-testid="movielistpage"]').should('be.visible');
      });
    });

    it('should reflect query genre and sort by params', () => {
      const query = 'the';
      const genre = 'Comedy';
      cy.visit(`/?query=${query}&genre=${genre}&sortBy=title`);

      cy.get('input[data-testid="search-input"]').should('have.value', query);
      cy.get('[data-testid="sort-dropdown"]').should('have.value', 'title');
      cy.get('button[data-testid="activegenrebutton"').contains(genre);
      cy.get('[data-testid="movie-tile-title"]').should('contain', query);
    });
  });
});
