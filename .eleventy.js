const markdownConfig = require("./_eleventy/config/markdown.js");
const collectionsConfig = require("./_eleventy/config/collections.js");
const filtersConfig = require("./_eleventy/config/filters.js");
const shortcodesConfig = require("./_eleventy/config/shortcodes.js");
const transformsConfig = require("./_eleventy/config/transforms.js");
const passthroughConfig = require("./_eleventy/config/passthrough.js");



const path = require("path");
const fs = require("fs");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  

  eleventyConfig.on('beforeBuild', () => {
    console.log('🔍 Chemins configurés:');
    console.log('Input:', 'content/text');
    console.log('Layouts:', '../_eleventy/layouts');
  });

  // Appliquer les configurations
  markdownConfig(eleventyConfig);
  collectionsConfig(eleventyConfig);
  filtersConfig(eleventyConfig);
  transformsConfig(eleventyConfig);
  shortcodesConfig(eleventyConfig);
  transformsConfig(eleventyConfig);
  passthroughConfig(eleventyConfig);

  
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
      input: "content/text",
      output: "_site",
      includes: "../../_eleventy/_includes",   // ✅ Deux niveaux vers le haut
      layouts: "../../_eleventy/_layouts",     // ✅ Deux niveaux vers le haut  
      data: "../../_eleventy/_data"           // ✅ Deux niveaux vers le haut
    }
  };





};