"use strict";

let MemeGenerator = require("./MemeGenerator.js");
let fs = require('fs'),
    PNG = require('pngjs').PNG,
    pixelmatch = require('pixelmatch');
let os = require('os');

test('Invalid meme name generates an exception',
    () => {
        //Try to create a meme with whatever config is specified by the test
        //Expect that the exception is exactly what is specified in the assignment spec
    });

test('Meme with invalid text generates an exception',
    () => {

    });

test('Meme with invalid text (from the default template) generates an exception',
    () => {

    });

test('Missing meme image generates an exception',
    () => {
    });


test('Gru meme generates correctly', () => {
    let meme = {
        "name": "output/Gru_HW.png",
        "meme": "Gru",
        "text": {
            "step1": "Make a new NPM\nProject",
            "step2": "Generate lots\nof memes",
            "step3": "Forget to actually\ndo the\nassignment",
            "step4": "Forget to actually\ndo the\nassignment"
        }
    };
    let g = new MemeGenerator("meme-data.json");
    expect.assertions(2);
    return g.generateMeme(meme).then(() => {
            let testData = fs.readFileSync('output/Gru_HW.png');
            let testImg = PNG.sync.read(testData);
            let refData = fs.readFileSync('reference-images/' + (os.platform() != 'darwin' ? 'windows/' : '') + 'Gru_HW.png');
            let refImg = PNG.sync.read(refData);

            expect({'width': testImg.width, 'height': testImg.height}).toEqual({
                'width': refImg.width,
                'height': refImg.height
            });

            let diff = new PNG({width: testImg.width, height: testImg.height});


            let diffPixels = pixelmatch(testImg.data, refImg.data, diff.data, testImg.width, testImg.height, {threshold: 0.1});

            if (diffPixels > 10) {
                diff.pack().pipe(fs.createWriteStream('failed-test-diff-gru.png'));
            }
            expect(diffPixels, 'Both images should match exactly. See failed-test-diff-gru.png for visual guide of what is different').toBeLessThan(10);

        }
    )
});

test('NewsCat meme generates correctly', () => {
    let meme = {
        "name": "output/NewsCat_MemeFirst.png",
        "meme": "NewsCat",
        "text": {
            "top": "",
            "bottom": "Maybe I should\nmake a Meme Generator"
        }
    };
    let g = new MemeGenerator("meme-data.json");
    expect.assertions(2);
    return g.generateMeme(meme).then(() => {
            let testData = fs.readFileSync('output/NewsCat_MemeFirst.png');
            let testImg = PNG.sync.read(testData);
            let refData = fs.readFileSync('reference-images/' + (os.platform() != 'darwin' ? 'windows/' : '') + 'NewsCat_MemeFirst.png');
            let refImg = PNG.sync.read(refData);

            expect({'width': testImg.width, 'height': testImg.height}).toEqual({
                'width': refImg.width,
                'height': refImg.height
            });

            let diff = new PNG({width: testImg.width, height: testImg.height});


            let diffPixels = pixelmatch(testImg.data, refImg.data, diff.data, testImg.width, testImg.height, {threshold: 0.1});

            if (diffPixels > 10) {
                diff.pack().pipe(fs.createWriteStream('failed-test-diff-newscat.png'));
            }
            expect(diffPixels, 'Both images should match exactly. See failed-test-diff-newscat.png for visual guide of what is different').toBeLessThan(10);

        }
    )
});

test('Philosoraptor meme generates correctly', () => {
    let meme = {
        "name": "output/Philosoraptor_Closures.png",
        "meme": "Philosoraptor",
        "text": {
            "top": "If \"this\" is not this",
            "bottom": "What is _this?"
        }
    };
    let g = new MemeGenerator("meme-data.json");
    expect.assertions(2);
    return g.generateMeme(meme).then(() => {
            let testData = fs.readFileSync('output/Philosoraptor_Closures.png');
            let testImg = PNG.sync.read(testData);
            let refData = fs.readFileSync('reference-images/' + (os.platform() != 'darwin' ? 'windows/' : '') + 'Philosoraptor_Closures.png');
            let refImg = PNG.sync.read(refData);

            expect({'width': testImg.width, 'height': testImg.height}).toEqual({
                'width': refImg.width,
                'height': refImg.height
            });

            let diff = new PNG({width: testImg.width, height: testImg.height});


            let diffPixels = pixelmatch(testImg.data, refImg.data, diff.data, testImg.width, testImg.height, {threshold: 0.1});

            if (diffPixels > 10) {
                diff.pack().pipe(fs.createWriteStream('failed-test-diff-raptor.png'));
            }
            expect(diffPixels, 'Both images should match exactly. See failed-test-diff-raptor.png for visual guide of what is different').toBeLessThan(10);

        }
    )
});


test('Oprah meme generates correctly', () => {
    let meme = {
        "name": "output/You-Get-a-Meme.png",
        "meme": "Oprah",
        "text": {
            "top": "YOU GET A MEME!\nYOU GET A MEME!",
            "bottom": "EVERYONE GETS A MEME!"
        }
    };
    let g = new MemeGenerator("meme-data.json");
    expect.assertions(2);
    return g.generateMeme(meme).then(() => {
            let testData = fs.readFileSync('output/You-Get-a-Meme.png');
            let testImg = PNG.sync.read(testData);
            let refData = fs.readFileSync('reference-images/' + (os.platform() != 'darwin' ? 'windows/' : '') + 'You-Get-a-Meme.png');
            let refImg = PNG.sync.read(refData);

            expect({'width': testImg.width, 'height': testImg.height}).toEqual({
                'width': refImg.width,
                'height': refImg.height
            });

            let diff = new PNG({width: testImg.width, height: testImg.height});


            let diffPixels = pixelmatch(testImg.data, refImg.data, diff.data, testImg.width, testImg.height, {threshold: 0.1});

            if (diffPixels > 10) {
                diff.pack().pipe(fs.createWriteStream('failed-test-diff-oprah.png'));
            }
            expect(diffPixels, 'Both images should match exactly. See failed-test-diff-oprah.png for visual guide of what is different').toBeLessThan(10);

        }
    )
});