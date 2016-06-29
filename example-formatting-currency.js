// Include the Globalize library
var Globalize = require('globalize');

// Include the CLDR data
var cldrData = require('cldr-data');

// Loads the supplemental data
Globalize.load(cldrData.entireSupplemental());

// Loads the data of the specified locales
Globalize.load(cldrData.entireMainFor('en'));

var enGlobalize = Globalize('en');

var value = 229.431;

var usdFormatter = enGlobalize.currencyFormatter('USD');
// "$229.43"
console.log(usdFormatter(value));

var eurFormatter = enGlobalize.currencyFormatter('EUR', {
   style: 'code',
   round: 'ceil'
});
// "229.44 EUR"
console.log(eurFormatter(value));