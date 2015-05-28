#!/usr/local/bin/node

/* 
 * Conversion script for poorterboeken data set
 * Converts input poorterboeken csv to two separate ndjson files for vertices and edges
 */
 
// dependencies
var argv = require('optimist')
    .usage('Transforms poorterboeken data set into Histograph input format.\nUsage: $0')
    .demand('f')
    .alias('f', 'file')
    .describe('f', 'Load a file')
    .argv,
  fs = require('fs'),
  parse = require('csv-parse'),
  path = require('path');

// files
var pitFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'poorterboeken.pits.ndjson'),
	relationFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'poorterboeken.relations.ndjson');

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
      var internaluri = obj[0];
      
      if (usedURIs.indexOf(internaluri) === -1) {

		// Geometries are not taken from the source file because all pits are
		// related to GeoNames/TGN, with better geometries than these

        var vertex = {
          id: internaluri,
          name: obj[1],
          type: "hg:Place",
          data: {
              currentPlaceName: obj[2],
              provincie: obj[7]
          },              
        }

		if (!obj[3] == "0") {
			vertex["hasBeginning"] = obj[3] + "-01-01";
		}
		if (!obj[4] == "heden") {
			vertex["hasEnd"] = obj[4] + "-01-01";
		}
 
        fs.appendFileSync(pitFileNameOut, JSON.stringify(vertex, null, 0) + "\n");
        
        // EDGES
        if (obj[9] != "0" && obj[9] !== "") {
          var geonamesURI = obj[9];
          
          var edge = {
            from: internaluri,
            to: geonamesURI,
            label: "hg:sameHgConcept"
          };

          edges.push(edge);
          fs.appendFileSync(relationFileNameOut, JSON.stringify(edge, null, 0) + "\n");
        }
              
        if (obj[10] != "0" && obj[10] !== "") {
          var tgnURI = obj[10];
          
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
