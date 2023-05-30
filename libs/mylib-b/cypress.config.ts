import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';
import { defineConfig } from 'cypress';
import { CoverageWebpack } from '../../coverage.webpack'

const nxPreset = nxComponentTestingPreset(__filename);

export default defineConfig({
                              component: {
                                ...nxPreset,
                                devServer: {
                                  ...nxPreset.devServer,
                                  webpackConfig: CoverageWebpack,
                                },
                                setupNodeEvents(on, config) {
                                  // eslint-disable-next-line @typescript-eslint/no-var-requires
                                  require('@cypress/code-coverage/task')(on, config)
                                  // include any other plugin code...

                                  // It's IMPORTANT to return the config object
                                  // with any changed environment variables
                                  return config;
                                },
                              }
                            });
