// This script duplicates a text file by converting all its characters to upper-case,
// by leveraging streams and transformers.
// Since it outputs start and end date/times, it's useful as benchmark, especially with very large input files.
//
// Sources:
//  - http://codewinds.com/blog/2013-08-20-nodejs-transform-streams.html
//  - https://nodejs.org/api/stream.html#stream_class_stream_transform

const fs = require('fs');
const Utils = require('src/utils');
const UpperCaseTransform = require('UpperCaseTransform');

// ---------------------------------------------------------------------------------------------

console.log(Utils.getDateTime());

const readStream = fs.createReadStream('/path/to/input_file.txt');
const writeStream = fs.createWriteStream('/path/to/output_file.txt');
const upperCaseTransform = new UpperCaseTransform();

readStream
  .pipe(upperCaseTransform)
  .pipe(writeStream)
  .on('finish', function () {
    console.log(Utils.getDateTime());
  });

