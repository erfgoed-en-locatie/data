/*
 * Conversion script for Atlas van de Verstedelijking places data set
 * Converts input nwb JSON-LD to two separate ndjson files for vertices and edges
 */

var argv = require('optimist')
      .usage('Transforms Atlas van de Verstedelijking data set into Histograph input format.\nUsage: $0')
      .demand('f')
      .alias('f', 'file')
      .describe('f', 'Load a file')
      .argv,
    fs = require('fs'),
    path = require('path');

var JSONStream = require('JSONStream');

// files
var pitFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'atlas-verstedelijking.pits.ndjson'),
	relationFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'atlas-verstedelijking.relations.ndjson');

try {
	fs.openSync(pitFileNameOut, 'r');
	fs.unlinkSync(pitFileNameOut);
} catch(e) {}

try {
	fs.openSync(relationFileNameOut, 'r');
	fs.unlinkSync(relationFileNameOut);
} catch(e) {}

// objects
var edges = [],
    vertex = {};
console.log('Parsing vertices...');

fs.createReadStream(argv.file).pipe(JSONStream.parse('features.*')).on('data', function(feature) {

  var pit = {
    id: feature.properties.id,
    name: feature.properties.stad,
    type: feature.properties.type,
    geometry: feature.geometry,
    "hasBeginning": feature.properties.jaar + '-01-01',
    "hasEnd": feature.properties.jaar + '-12-31'
  };

  fs.appendFileSync(pitFileNameOut, JSON.stringify(pit, null, 0) + '\n');

  // EDGES
  // geonames
  if (feature.properties.geonames && feature.properties.geonames !== "") {
    var geonamesURI = feature.properties.geonames;

    var relation = {
      from: feature.properties.id,
      to: geonamesURI,
      label: "hg:sameHgConcept"
    };

    fs.appendFileSync(relationFileNameOut, JSON.stringify(relation, null, 0) + "\n");
  }
});
