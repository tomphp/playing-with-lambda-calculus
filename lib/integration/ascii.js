'use strict';

const natJS = require('./nat');
module.exports = require('../pure/ascii');

module.exports.toJS = letter => String.fromCharCode(natJS.toJS(letter));

