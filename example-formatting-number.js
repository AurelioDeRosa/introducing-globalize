// Include the Globalize library
var Globalize = require('globalize');

// Include the CLDR data
var cldrData = require('cldr-data');

// Loads the supplemental data
Globalize.load(cldrData.entireSupplemental());

// Loads the data of the specified locales
Globalize.load(cldrData.entireMainFor('it', 'en', 'en-GB'));

var number = 1302.93;

// "1.302,93"
console.log(Globalize('it').formatNumber(number));

// "1,302.93"
console.log(Globalize('en').formatNumber(number));

// "1,302.93"
console.log(Globalize('en-GB').formatNumber(number));