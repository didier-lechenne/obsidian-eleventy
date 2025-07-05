module.exports = function(eleventyConfig) {
  
  // Transformer pour ajouter des classes CSS aux éléments
  eleventyConfig.addTransform("addClasses", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      // Ajouter des classes aux blockquotes
      content = content.replace(/<blockquote>/g, '<blockquote class="custom-quote">');
      
      // Ajouter des classes aux tables
      content = content.replace(/<table>/g, '<table class="content-table">');
      
      // Ajouter des classes aux images
      content = content.replace(/<img(?![^>]*class=)/g, '<img class="content-image"');
      
      return content;
    }
    return content;
  });

  // Transformer pour les liens externes
  eleventyConfig.addTransform("externalLinks", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      // Ajouter target="_blank" aux liens externes
      content = content.replace(
        /<a href="(https?:\/\/[^"]*)"([^>]*)>/g, 
        '<a href="$1"$2 target="_blank" rel="noopener">'
      );
      return content;
    }
    return content;
  });
};