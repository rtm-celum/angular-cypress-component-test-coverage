# MyOrg NX Monorepo

This is the NX monorepo for MyOrg, which includes an Angular application named `myapp` and two libraries, `mylib-a` and `mylib-b`.

## Application and Libraries

- **myapp**: This is the main application of the monorepo.
- **mylib-a**: A library that contains the `TitleWidget` component.
- **mylib-b**: Another library that contains the `TitleWidgetB` component.

Each library has its own Cypress component tests. It showcases cypress component testing in a monorepo.

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

## Testing the Libraries

### mylib-a

To test the `TitleWidget` component in `mylib-a`, run the following command:

```bash
nx run mylib-a:component-test --watch
```

### mylib-b

To test the `TitleWidgetB` component in `mylib-b`, run the following command:

```bash
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


