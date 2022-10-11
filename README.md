# Playwright Demo Project

Playwright Automated Testing Tool Demo Project
* Testing Login functionality on [Guestbook Demo App](https://testautomationpro.com/aut/) => tests/guestbook.spec.js

## Playwright Functionality
* Page Object Model (POM)
* Reusability with common methods
* Data Parameterization with external .csv file

## Prerequisites

You will need the following installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)


## Installation
```
git clone https://github.com/kiseta/pw-demo.git
```
```
cd pw-demo
```
```
npm install
```

## Running Playwright tests (runs headless by default)
```
npm test
```
or headed
```
npm test --headed
```
or headed with nicely formatted html report
```
npm test --headed --reporter=html
```
on specific browser
```
npm test --browser=firefox
```
on all browsers
```
npm test --browser=all
```

## DEBUGging Playwright tests
to run in DEBUG mode, run the following command in terminal

``` 
$env:PWDEBUG=1
```
then
```
npx playwright test
```
