const { defineConfig } = require('cypress')

module.exports = defineConfig({
    pageLoadTimeout: 1500000,
    responseTimeout: 500000,
    eyesTimeout: 1000000000000,
    redirectionLimit: 100,
    numTestsKeptInMemory: 0,
    eyesIsDisabled: false,
    eyesFailCypressOnDiff: true,
    eyesDisableBrowserFetching: false,
    eyesTestConcurrency: 30,
    appliConfFile: {
        showLogs: true,
        apiKey: '0CM100rK0e9wXIML997UbcSs103LUC4F9110rHgOkpyKpDAAYI110',
        testConcurrency: 30,
       
    },
    eyesIsGlobalHooksSupported: false,
    eyesPort: 60366,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
    },
})
