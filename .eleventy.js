const dateFormat = require('dateformat');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.setDataDeepMerge(true);

    // convert dates to readable format
    eleventyConfig.addFilter("readableDate", dateObj => {
        return dateFormat(dateObj, "fullDate");
    });

    return {
        markdownTemplateEngine: "njk"
    };
};
