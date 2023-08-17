import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        '../lessons/interactions/*.ts',
        '../lessons/selector-strategies/*.ts',
        '../lessons/playground/*.ts'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],

    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    services: ['chromedriver'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
