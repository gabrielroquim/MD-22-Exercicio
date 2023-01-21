const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    reporter: '@reportportal/agent-js-cypress',
    reporterOptions: {
      endpoint: 'https://demo.reportportal.io/api/v1',
      token: '2cbfdfc8-3f35-4cd1-865e-e6dac4c6869d',
      launch: 'gabrielroquim_TEST_EXAMPLE',
      project: 'gabrielroquim_personal',
      description: 'Testes Ebac - Modulo 31',
    }
  }
});
