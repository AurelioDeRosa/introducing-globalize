// Include the Globalize libray
var Globalize = require('globalize');

// Loads the supplemental data
Globalize.load(require('cldr-data').entireSupplemental() );

// Loads the data of the specified locales
Globalize.load(require('cldr-data').entireMainFor('en'));

var formatter = Globalize('en').relativeTimeFormatter('day');
// "yesterday"
console.log(formatter(-1));

formatter = Globalize('en').relativeTimeFormatter('year');
// "next year"
console.log(formatter(1));