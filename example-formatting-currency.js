// Include the Globalize libray
var Globalize = require('globalize');

// Loads the supplemental data
Globalize.load(require('cldr-data').entireSupplemental() );

// Loads the data of the specified locales
Globalize.load(require('cldr-data').entireMainFor('en'));

var value = 229.431;

var formatter = Globalize('en').currencyFormatter('USD');
// "$229.43"
console.log(formatter(value));

formatter = Globalize('en').currencyFormatter('EUR', {
   style: 'code',
   round: 'ceil'
});
// "229.44 EUR"
console.log(formatter(value));