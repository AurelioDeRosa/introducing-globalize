// Include the Globalize library
var Globalize = require('globalize');

// Loads the supplemental data
Globalize.load(require('cldr-data').entireSupplemental() );

// Loads the data of the specified locales
Globalize.load(require('cldr-data').entireMainFor('it', 'en', 'en-GB'));

var number = 1302.93;

// "1.302,93"
console.log(Globalize('it').formatNumber(number));

// "1,302.93"
console.log(Globalize('en').formatNumber(number));

// "1,302.93"
console.log(Globalize('en-GB').formatNumber(number));