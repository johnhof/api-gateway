'use strict';
var mongoose = require('mongoose');
require('mongoose-regexp')(mongoose);
var Schema = mongoose.Schema;

var Service = new Schema({
    id: {type: String, required: true, trim: true},
    name: {type: String, required:true, trim: true},
    url: {type: String, required: true, trim: true},
    urlRegex: {type: RegExp, required: true},
    keys: [{type: String, trim: true}],
    method: {type: String, required: true, trim: true},
    endpoints: [new mongoose.Schema({
        method: {type: String, required: true, default: 'GET', trim:true},
        baseUrl: {type: String, required: true, trim: true},
        path: {type: String, required: true, trim: true}
    })],
    registerDate: {type: Date, required: true, default: Date.now}
});

Service.index({ url: 1});

module.exports = mongoose.model('Service', Service);
