var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var Buffer = require('buffer').Buffer;
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var map = require('event-stream').map;

var curtRevPlugin = function curtRevPlugin(replacement) {

    return map(function(file, cb) {

        var contents;
        var lines;
        var i, length;
        var line, timestamp;

        if (!file) {
            throw new PluginError('gulp-rev-stamp', 'Missing file option for gulp-rev-stamp.');
        }

        if (!file.contents) {
            throw new PluginError('gulp-rev-stamp', 'Missing file.contents required for modifying files using gulp-rev-stamp.');
        }

        contents = file.contents.toString();
        lines = contents.split('\n');
        length = lines.length;
        timestamp = (new Date()).valueOf();

        for (i = 0; i < length; i++) {
            line = lines[i];
            line = line.replace(replacement, timestamp);
            lines[i] = line;
        }

        file.contents = new Buffer(lines.join('\n'));
        cb(null, file);

    });

};

module.exports = curtRevPlugin;