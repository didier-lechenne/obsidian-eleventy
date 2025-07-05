module.exports = function(eleventyConfig) {
  
  // Copier les assets depuis _eleventy
  eleventyConfig.addPassthroughCopy({
    "_eleventy/assets": "assets"
  });
  
  // Copier les images du contenu (si elles existent)
  eleventyConfig.addPassthroughCopy({
    "content/images": "images"
  });
  
  // Copier les fichiers du contenu (PDFs, etc.)
  eleventyConfig.addPassthroughCopy({
    "content/files": "files"
  });

  // Fichiers spéciaux à la racine
  eleventyConfig.addPassthroughCopy({
    "_eleventy/assets/favicon.ico": "favicon.ico"
  });

  eleventyConfig.addPassthroughCopy({
    "_eleventy/assets/modes": "assets/modes"
  });
};