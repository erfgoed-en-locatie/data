#!/usr/local/bin/node

/* 
 * Conversion script for Carnaval data set
 * Converts input Carnaval csv to two separate ndjson files for vertices and edges
 */
 
// dependencies
var argv = require('optimist')
    .usage('Transforms carnaval data set into Histograph input format.\nUsage: $0')
    .demand('f')
    .alias('f', 'file')
    .describe('f', 'Load a file')
    .argv,
  fs = require('fs'),
  parse = require('csv-parse'),
  path = require('path');

// files
var pitFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'carnaval.pits.ndjson'),
	relationFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'carnaval.relations.ndjson');

try {
	fs.openSync(pitFileNameOut, 'r');
	fs.unlinkSync(pitFileNameOut);
} catch (e) {}

try {
	fs.openSync(relationFileNameOut, 'r');
	fs.unlinkSync(relationFileNameOut);
} catch (e) {}

// objects
var usedURIs = [], 
  edges = [];

parse(fs.readFileSync(argv.file, {encoding: 'utf8'}), {delimiter: ',', escape: '\\'}, function(err, data) {

  if (err) {
    console.log(err);
  } else {
  
    console.log("Parsing vertices...");
    data.shift(); // Skip CSV header

    data.forEach(function(obj){
      var internaluri = usedURIs.length;
                
      if (usedURIs.indexOf(internaluri) === -1) {
      
        var vertex = {
          id: internaluri,
          name: obj[0],
          type: "hg:Place",
        }

        fs.appendFileSync(pitFileNameOut, JSON.stringify(vertex, null, 0) + "\n");
        
        // EDGES
        if (obj[1] != "0" && obj[1] !== "" && obj[1] !== "NULL") {
          var tgnURI = obj[1];
          
          var edge = {
            from: internaluri,
            to: tgnURI,
            label: "hg:sameHgConcept"
          };

          edges.push(edge);
          fs.appendFileSync(relationFileNameOut, JSON.stringify(edge, null, 0) + "\n");

        }
        
        usedURIs.push(internaluri);
      }
    });

    console.log(usedURIs.length + " vertices parsed.");
    console.log(edges.length + " edges parsed.");
  }
});
