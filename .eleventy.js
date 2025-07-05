const collectionsConfig = require("./_eleventy/config/collections.js");
const markdownPlugin = require("./_eleventy/config/markdown.js");
const filtersConfig = require("./_eleventy/config/filters.js");
const shortcodesConfig = require("./_eleventy/config/shortcodes.js");
const transformsConfig = require("./_eleventy/config/transforms.js");
const passthroughConfig = require("./_eleventy/config/passthrough.js");
const yamlPlugin = require("./_eleventy/config/yaml.js"); 

const path = require("path");
const fs = require("fs");

module.exports = function (eleventyConfig) {

  // === HOOKS ===
  // eleventyConfig.on('beforeBuild', () => {
  //   console.log('🚀 Début de la génération...');
  //   console.log('🔍 Chemins configurés:');
  //   console.log('   Input:', 'content/text');
  //   console.log('   Layouts:', '../_eleventy/layouts');
  // });
  
  eleventyConfig.on('afterBuild', () => {
    console.log('✅ Site généré avec succès !');
  });

  // === APPLIQUER LES CONFIGURATIONS ===
  eleventyConfig.addPlugin(yamlPlugin);
  eleventyConfig.addPlugin(markdownPlugin);

  collectionsConfig(eleventyConfig);
  filtersConfig(eleventyConfig);
  shortcodesConfig(eleventyConfig);
  transformsConfig(eleventyConfig); 
  passthroughConfig(eleventyConfig);


  
  // === CONFIGURATION SERVEUR DE DEV ===
  eleventyConfig.setServerOptions({
    port: 3000,
    showAllHosts: true,
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
      includes: "../../_eleventy/_includes",
      layouts: "../../_eleventy/_layouts",
      data: "../../_eleventy/_data"
    }
  };
};