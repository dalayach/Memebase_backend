"use strict";
var fs = require('fs');
var MemeGenerator = require("./MemeGenerator.js");


var tests = JSON.parse(fs.readFileSync("sample-memes.json"));

var promises = [];
var generator = new MemeGenerator("meme-data.json");
tests.memes.forEach(function (meme) {
    promises.push(generator.generateMeme(meme));
});
Promise.all(promises).catch(err => {
    console.log(err);
}).then(
    () => {
        console.log("Done!");
    }
);


