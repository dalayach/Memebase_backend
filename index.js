"use strict";
let fs = require('fs');
let MemeGenerator = require("./MemeGenerator.js");


let tests = JSON.parse(fs.readFileSync("sample-memes.json", "utf-8"));

let promises = [];
let generator = new MemeGenerator("meme-data.json");
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


