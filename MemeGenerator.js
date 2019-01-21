var fs = require('fs')
    , gm = require('gm'); //fs is File System for Node, and gm is gm


module.exports = class MemeGenerator
{

    //APPARENTLY, you do not declare instance fields for classes, just
    //use them without declaring them

    /**
     * Creates a new meme generator, parsing the meme config file in
     */
    constructor(configFile)
    {//REMEMBER that data coming in is in the form of meme_data - name/loc

        let contents_of_configFile = fs.readFileSync(configFile);

        this.list_of_memes = JSON.parse(contents_of_configFile);

        //console.log("\na\n" + JSON.stringify(this.list_of_memes, null, 2) + "\na\n");



    }

    /**
     * Adds a new meme configuration to the supported set of memes
     * @param memeTemplate a new meme, as a JS object in the same format as the meme data file
     */
    addMemeTemplate(memeTemplate)
    {//REMEMBER, the data coming in is in the form of meme-data - name/loc

        let response = this.validateMeme(memeTemplate);

        if(response === false)
        {

            console.log("\n\nwoohoo " + memeTemplate.meme + "\n\n");

        }

        else
        {

            console.log("\nb\n" + response + "\nb\n");

        }

    }


    /**
     * Checks that a request to generate a meme is valid, specifically:
     *      That the meme referenced is defined
     *      That the text blocks defined in the requested meme are all valid (exist) for that meme referenced
     *      That the referenced graphic file exists
     * @param meme meme object to check
     * @returns String if there is an error, false if there is no error
     */
    validateMeme(meme)
    {//REMEMBER, the data coming in is in the form of sample-memes - whole

        let meme_meme = meme["meme"];

        if (this.list_of_memes.hasOwnProperty(meme_meme))
        {/* continue */}

        else
            return "Error: meme " + meme_meme + " does not exist";


        /*
        TODO -  this for loop only checks that all of the text values in
            the parameter.text also exist in the master list. It
            does not check that all the values in the master list are
            also in parameter.text - if the parameter wanted to
            include a blank text field, they should just use an empty
            string, but with the key defined, not an undefined key.
        */
        for (let text_val in meme.text)
        {

            if(this.list_of_memes[meme_meme].text.hasOwnProperty(text_val))
            {/* continue */}

            else
                return "Error: unexpected text block";

        }

        /*
        TODO - make a post on SO asking how to properly document multiple
            return values - notice how this method return either bool or
            string? How would the documentation reflect that?
        */
        if (fs.existsSync(meme.name))
            return false;

        else
            return "Error: graphic file " + meme.name + " does not exist";

    }





    /**
     * Given a meme configuration, generates the composite graphic (layering the text atop of the graphic)
     * A meme configuration references a "base meme" template --- the template defines where text will be positioned
     * and its font/stroke/color; the meme configuration specifies which template to use and what text to put in the
     * different positions. The meme is written directly out to the image file specified in the configuration.
     *
     * Note that this function returns a PROMISE representing the generation of the image, as generating the image is an
     * async operation.
     *
     * @param meme configuration for the meme to generate
     * @returns Promise that is completed when the image is successfully written out to disk
     */
    generateMeme(meme)
    {

        this.validateMeme(meme);

        return new Promise(function (resolve, reject) {
    	});
    }
}
