var tokens = require('./lexic-tokens').module;

var expression = 'SELECT id , num , num FROM table ;';
var expression = 'SELECT * FROM table WHERE a >= 10.9 ;';
var expression = 'SELECT id vb , num , num FROM table WHERE TRUE ;';

var wordsArray = expression.split(/\s+/);

var tokenKeys = Object.keys(tokens);
var tokensList = [];
var idList = [];

wordsArray.forEach((element) => {
  tokenKeys.find((key) => {
    let token = tokens[key];
    if (token.regex.test(element)) {
      if (token.token == 'ID' && idList.indexOf(element) == -1) {
        idList.push(element);
      }
      tokensList.push(token.token);
      return true;
    }
  });
});

console.log('Tokens list => ', tokensList);
console.log('Id list => ', idList);