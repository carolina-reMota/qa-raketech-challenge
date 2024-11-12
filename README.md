# Raketech - QA automation test solution 
by [Carolina Mota](https://www.linkedin.com/in/carolina-remota/)

## Steps to Run automated tests
- Clone repo: 
```ssh
git clone git@github.com:carolina-reMota/qa-raketech-challenge.git
cd qa-raketech-challenge
```
- Install dependencies
```ssh
npm install
```
- Run the tests
```ssh
UI testing:
Electron - npm run test:fe
Chrome - npm run cypress:run:chrome
Safari - npm run cypress:run:safari
Crossbrowsers - npm run cypress:run:crossbrowser

API testing:
npm run test:be
```
- Results are available on folder mochawesome-report/mochawesome.html

Note: the node version used was v18.13.0
