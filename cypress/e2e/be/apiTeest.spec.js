describe('SWAPI People API Tests', () => {
    it('Validate that R2-D2’s skin color is white and blue', () => {
      cy.request('GET', 'https://swapi.dev/api/people/')
        .then((response) => {
          expect(response.status).to.eq(200)
  
          const r2d2 = response.body.results.find(
            (character) => character.name === 'R2-D2'
          )
  
          expect(r2d2).to.not.be.undefined;
          expect(r2d2.skin_color).to.eq('white, blue');
        })
    })
  })