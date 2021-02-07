# calculator

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

--- TESTS TO BE PERFORMED ---

Unit Tests

You need to test the App component using the testing framework Jest and Vue test utilities. Write your tests in /tests/unit/app.spec.js. Test the following functions perform the following tasks:

add() - add 1 to 4 and get 5
subtract() subtract 4 from 7 and get 3
multiply() - multiply 3 by 5 and get 15
divide() - divide 21 by 7 and get 3
numberClick() - concatenate multiple number button clicks
operatorClick() - chain multiple operations together
clearClick() - clear the running total without affecting the calculation

UI Integration Tests

You need to write front-end integration tests to ensure the Calculator model and browser UI are working to meet the user requirements. The framework provided to do this is Cypress.There is one sample test written in /tests/e2e/tests.js and you should continue writing your tests in this file.

You should write tests to ensure the following requirements are met:

Do the number buttons update the display of the running total?
Do the arithmetical operations update the display with the result of the operation?
Can multiple operations be chained together?
Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
