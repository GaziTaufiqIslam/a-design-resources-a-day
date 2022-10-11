module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/assets/img');
    eleventyConfig.addPassthroughCopy('src/assets/js');

    // Currenty Tailwind is doing this for me in development
    // eleventyConfig.addPassthroughCopy('src/assets/styles');

    return {
        dir: {
            input: 'src',
            outpur: '_site'
        }
    }
}