const { defineConfig } = require("cypress");
var platform = require('platform');

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://example.com/',
		supportFile: '../support.js',
		specPattern: '../e2e/**/*.cy.js',
	},
});
