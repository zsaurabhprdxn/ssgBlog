const striptags = require('striptags');
const moment = require('moment');
moment.locale('en');


module.exports = function(config) {

    config.addPassthroughCopy('assets');
    config.setQuietMode(true);
    // config.setFrontMatterParsingOptions({
    //     excerpt: true,
    //     excerpt_alias: 'excerpt',
    // });
    
    config.addShortcode('excerpt', (article) => extractExcerpt(article));

    config.addFilter('date_ISO', data => {
        return moment(data).toISOString();
    });

    config.addFilter('date_UTC', data => {
        return moment(data).utc().format('LL');
    });
    
    return {
        markdownTemplateEngines: 'njk',
        templateFormats: ['html','njk','md'],
        dir:{
            input:'src'
            
        }
    }

    function extractExcerpt(article) {
        if (!article.hasOwnProperty("templateContent")) {
          console.warn(
            'Failed to extract excerpt: Document has no property "templateContent".'
          );
          return null;
        }
      
        let excerpt = null;
        const content = article.templateContent;
      
        excerpt = striptags(content)
          .substring(0, 50) 
          .replace(/^\\s+|\\s+$|\\s+(?=\\s)/g, "")
          .trim()
          .concat("...");
        return excerpt;
      }
}