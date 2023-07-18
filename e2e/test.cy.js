describe('Test', { execTimeout: 90000 }, () => {
	it('Test', () => {
		cy.visit('/')
		cy.get('h1').should('contain', 'Example')
	})
})
