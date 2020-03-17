const dateFormat = require('dateformat');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.setDataDeepMerge(true);

    // convert dates to readable format
    eleventyConfig.addFilter("readableDate", dateObj => {
        return dateFormat(dateObj, "fullDate");
    });

    // configure markdown compiling
    let markdownIt = require("markdown-it");
    let options = {
        typographer: true
    };
    eleventyConfig.setLibrary("md", markdownIt(options));

    return {
        markdownTemplateEngine: "njk"
    };
};
