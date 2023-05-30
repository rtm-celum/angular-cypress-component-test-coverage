# Code coverage for cypress component tests in an Nx Angular Monorepo

This is the NX monorepo for MyOrg, which includes an Angular application named `myapp` and two libraries, `mylib-a` and `mylib-b`.

## Application and Libraries

- **myapp**: This is the main application of the monorepo.
- **mylib-a**: A library that contains the `TitleWidget` component.
- **mylib-b**: Another library that contains the `TitleWidgetB` component.

Each library has its own Cypress component tests. It showcases cypress component testing in a monorepo. 

I used this repo for this stackoverflow question: [Code coverage for cypress component tests in an Nx Angular Monorepo?](https://stackoverflow.com/questions/76324750/code-coverage-for-cypress-component-tests-in-an-nx-angular-monorepo)

It helped me to add coverage for cypress component tests. 

## Getting Started

1. Clone this repository to your local machine.
2. Navigate into the `myorg` directory:

    ```bash
    cd myorg
    ```

3. Serve the `myapp` application:

    ```bash
    nx serve myapp
    ```

4. Run the component tests
```
nx run mylib-a:component-test --watch
nx run mylib-b:component-test --watch
```

## Creation of this Application

The following commands were used to create this application and its libraries:

1. Creation of the NX workspace:
```
npx create-nx-workspace@latest

```
2. Navigating into the myorg directory:
```
cd myorg
```
3. Serving the myapp application:
```
nx serve myapp
```
4. Creation of the mylib-a library and its component:
```
nx generate @nrwl/angular:library mylibA
nx generate @nrwl/angular:component title-widget --project=mylib-a --standalone=true --skip-tests=true
nx g @nx/angular:cypress-component-configuration --project=mylib-a  --generate-tests
```
5. Creation of the mylib-a library and its component:
```
nx generate @nrwl/angular:library mylibB
nx generate @nrwl/angular:component title-widget-b --project=mylib-b --standalone=true --skip-tests=true
nx g @nx/angular:cypress-component-configuration --project=mylib-b  --generate-tests
```

## Add code Coverage

From [Stack Overflows](https://stackoverflow.com/questions/76324750/code-coverage-for-cypress-component-tests-in-an-nx-angular-monorepo) accepted answer: 

1. Install some more dependencies:
   ```
   npm i @cypress/code-coverage @jsdevtools/coverage-istanbul-loader -D
   ```
2. Add a custom webpack config to cour project
    ```ts
    import * as path from "path";
    
    export const CoverageWebpack = {
        module: {
            rules: [
                {
                    test: /\.(js|ts)$/,
                    loader: '@jsdevtools/coverage-istanbul-loader',
                    options: {esModules: true},
                    enforce: 'post',
                    include: [
                        path.join(__dirname, '../..', 'apps'),
                        path.join(__dirname, '../..', 'libs')
                    ],
                    exclude: [
                        /\.(cy|spec)\.ts$/,
                        /node_modules/
                    ]
                }
            ]
        }
    };
    ```
3. Modify the cypress.config.ts like this:
   ```ts
    import {nxComponentTestingPreset} from '@nx/angular/plugins/component-testing';
    import {defineConfig} from 'cypress';
    import {CoverageWebpack} from './coverage.webpack'
    
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
   ```
4. Add following line to component.ts (thx @Miguel)
   ```
   import '@cypress/code-coverage/support'
   ```

5. Run the component tests
   ```
   nx run mylib-a:component-test
   nx run mylib-b:component-test
   ```

## Resources

* [Stack Overflow](https://stackoverflow.com/questions/76324750/code-coverage-for-cypress-component-tests-in-an-nx-angular-monorepo)
