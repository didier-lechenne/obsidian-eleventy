module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("slug", function(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  });
  
  eleventyConfig.addFilter("extractTitle", function(content) {
    const match = content.match(/^#\s+(.+)$/m);
    return match ? match[1] : 'Sans titre';
  });
};