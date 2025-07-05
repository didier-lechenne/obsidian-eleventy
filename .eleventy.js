const markdownPlugin = require("./config/markdown.js");


const path = require("path");
const fs = require("fs");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  
  
  // === COLLECTIONS ===
  
  // Collection de toutes les pages
  eleventyConfig.addCollection("allPages", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.endsWith('.md') && !item.inputPath.includes('README');
    });
  });
  

  
  // === FILTRES ===
  
  // Filtre pour nettoyer les slugs
  eleventyConfig.addFilter("slug", function(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  });
  
  // Filtre pour extraire le titre depuis le contenu
  eleventyConfig.addFilter("extractTitle", function(content) {
    const match = content.match(/^#\s+(.+)$/m);
    return match ? match[1] : 'Sans titre';
  });
  
  // === SHORTCODES ===
  
  // Shortcode pour inclure des fichiers
  eleventyConfig.addShortcode("include", function(filename) {
    const fs = require('fs');
    const includePath = path.join('./src/_includes', filename);
    try {
      return fs.readFileSync(includePath, 'utf8');
    } catch (e) {
      console.error(`Erreur inclusion ${filename}:`, e.message);
      return `[Erreur: fichier ${filename} non trouvé]`;
    }
  });
  
  // Shortcode pour les liens internes
  eleventyConfig.addShortcode("link", function(page, text = null) {
    const slug = page.toLowerCase().replace(/\s+/g, '-');
    const displayText = text || page;
    return `<a href="/${slug}/" class="internal-link">${displayText}</a>`;
  });
  
  // === TRANSFORMATIONS ===
  
  // Transformer pour ajouter des classes CSS aux éléments
  eleventyConfig.addTransform("addClasses", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      // Ajouter des classes aux blockquotes
      content = content.replace(/<blockquote>/g, '<blockquote class="custom-quote">');
      
      // Ajouter des classes aux tables
      content = content.replace(/<table>/g, '<table class="content-table">');
      
      return content;
    }
    return content;
  });
  
  // === COPIES STATIQUES ===
  
  // Copier les assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/files");
  
  // === CONFIGURATION SERVEUR DE DEV ===
  
  eleventyConfig.setServerOptions({
    port: 3000,
    showAllHosts: true,
  });
  
  // === HOOKS ===
  
  // Hook avant le build
  eleventyConfig.on('beforeBuild', () => {
    console.log('🚀 Début de la génération...');
  });
  
  // Hook après le build
  eleventyConfig.on('afterBuild', () => {
    console.log('✅ Site généré avec succès !');
  });
  
  // === CONFIGURATION DES DOSSIERS ===
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: "",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  };
};