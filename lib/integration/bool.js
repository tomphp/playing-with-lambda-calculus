'use strict';

module.exports = require('../pure/bool');

module.exports.toJS = bool => bool(true)(false);