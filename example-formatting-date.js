// Include the Globalize library
var Globalize = require('globalize');

// Loads the supplemental data
Globalize.load(require('cldr-data').entireSupplemental() );

// Loads the data of the specified locales
Globalize.load(require('cldr-data').entireMainFor('it', 'en', 'en-GB'));

// 30th of June 2016
var date = new Date(2016, 5, 30);

// "30/6/2016"
console.log(Globalize('it').formatDate(date));

// "6/30/2016"
console.log(Globalize('en').formatDate(date));

// "30/06/2016"
console.log(Globalize('en-GB').formatDate(date));