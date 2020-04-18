const dateFormat = require('dateformat');
const markdownIt = require("markdown-it");
const markdownOptions = {
    typographer: true
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.setDataDeepMerge(true);

    // convert dates to readable format
    eleventyConfig.addFilter("readableDate", dateObj => {
        return dateFormat(dateObj, "fullDate");
    });

    // markdown filter since 11ty doesn't have one for some reason
    eleventyConfig.addFilter("markdownify", content => {
        let markdown = new markdownIt(markdownOptions);
        return markdown.render(content);
    });

    // configure markdown compiling
    eleventyConfig.setLibrary("md", markdownIt(markdownOptions));

    return {
        markdownTemplateEngine: "njk"
    };
};
