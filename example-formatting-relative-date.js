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

var dayFormatter = enGlobalize.relativeTimeFormatter('day');
// "yesterday"
console.log(dayFormatter(-1));

var yearFormatter = enGlobalize.relativeTimeFormatter('year');
// "next year"
console.log(yearFormatter(1));