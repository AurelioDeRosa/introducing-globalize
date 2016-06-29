// Include the Globalize library
var Globalize = require('globalize');

// Include the CLDR data
var cldrData = require('cldr-data');

// Loads the supplemental data
Globalize.load(cldrData.entireSupplemental());

// Loads the data of the specified locales
Globalize.load(cldrData.entireMainFor('en'));

// Set default locale
var enGlobalize = Globalize('en');

var numberParser = enGlobalize.numberParser();
// "229.431"
console.log(numberParser('229,431.00'));

var percentParser = enGlobalize.numberParser({style: 'percent'});
// "0.5341"
console.log(percentParser('53.41%'));