const markdownIt = require('markdown-it');


module.exports = function(eleventyConfig) {
	// Markdown config
  let options = {
		html: true,
		breaks: true,
		linkify: false,
    typographer: true
	};
  var md = markdownIt(options);
  
  // letzgo
	md
    .use(markdownItAbbr)
    .use(markdownItSup)
    .use(markdownItMark)
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkAfterHeader({
        style: 'visually-hidden',
        assistiveText: title => `Lien vers “${title}”`,
        visuallyHiddenClass: 'visually-hidden visually-hidden--focusable',        
        wrapper: ['<div class="heading">', '</div>']
      }),
      slugify: sluglofi
    })
    .use(markdownItContainer, 'big')
    .use(markdownItContainer, 'gridlist')
    .use(markdownItContainer, 'scrollables') 
    .use(markdownItContainer, 'game') 
    .use(markdownItContainer, 'details', {
      validate: function(params) {
        return params.trim().match(/^details\s+(.*)$/);
      },    
      render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^details\s+(.*)$/);    
        if (tokens[idx].nesting === 1) {
          return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
        } else {
          return '</details>\n';
        }
      }
    })
    .use(markdownItFootnote)
    .use(markdownItFigures,{
      dataType: false,  // <figure data-type="image">, default: false
      figcaption: true,  // <figcaption>alternative text</figcaption>, default: false
      keepAlt: true, // <img alt="alt text" .../><figcaption>alt text</figcaption>, default: false
      lazyLoading: true, // <img loading="lazy" ...>, default: false
      link: false, // <a href="img.png"><img src="img.png"></a>, default: false
      tabindex: false, // <figure tabindex="1+n">..., default: false
    })
    .use(markdownItAttrs,{
      allowedAttributes: ['id', 'class']
    });


  // markdownify filter to parse frontmatter stuff
  // don’t know why I need ?? "" …
  eleventyConfig.addFilter('markdownify', (markdownString) =>
    md.render(markdownString ?? "")
  );

  eleventyConfig.setLibrary("md", md)

}
