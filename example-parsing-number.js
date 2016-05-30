// Include the Globalize libray
var Globalize = require('globalize');

// Loads the supplemental data
Globalize.load(require('cldr-data').entireSupplemental() );

// Loads the data of the specified locales
Globalize.load(require('cldr-data').entireMainFor('en'));

var parser = Globalize('en').numberParser();
// "229.431"
console.log(parser('229,431.00'));

parser = Globalize('en').numberParser({style: 'percent'});
// "0.5341"
console.log(parser('53.41%'));