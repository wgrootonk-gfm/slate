#! /usr/bin/env node
var fs        = require('fs');
var path      = require('path');
var converter = require('widdershins');

var files = {
    json: 'api-docs.json',
    markdown: 'api-docs.md'
};

var dir = {
    tmp: 'tmp/',
    templates: 'source/templates/'
};

var options = {
    codeSamples: true,
    language_tabs: [{'shell': 'Shell'},{'http': 'HTTP'}],
    user_templates : path.join(__dirname, dir.templates)
};

try {
    var swaggerInputPath  = path.join(__dirname, dir.tmp, files.json);
    var swaggerOutputPath = path.join(__dirname, dir.tmp, files.markdown);
    var swaggerObject     = require(swaggerInputPath);
    var swaggerMarkdown   = converter.convert(swaggerObject, options);

    fs.writeFile(swaggerOutputPath, swaggerMarkdown, function(err) {
        if(err instanceof Error) {
            return console.log(err);
        } else {
            console.log('Markdown file created!');
        }
    });

} catch (e) {
    console.log(e);
}
