const katex = require('katex');
const markdownIt = require('markdown-it');

console.log(markdownIt);

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/assets/figures');

  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      linkify: true,
      typographer: true,
    }),
  );

  eleventyConfig.addFilter('latex', (content) => {
    return content
      .replace(/\$\$((?:.|\n)+?)\$\$/g, (_, equation) => {
        const cleanEquation = equation
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&');
        return katex.renderToString(cleanEquation, {
          throwOnError: false,
          displayMode: true,
        });
      })
      .replace(/\$(.+?)\$/g, (_, equation) => {
        const cleanEquation = equation
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>');
        return katex.renderToString(cleanEquation, { throwOnError: false });
      });
  });

  return {
    dir: {
      input: 'src',
    },
  };
};
