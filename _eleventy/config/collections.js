module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("allPages", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.endsWith('.md') && !item.inputPath.includes('README');
    });
  });
  
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/text/blog/*.md")
      .sort((a, b) => b.date - a.date);
  });
};