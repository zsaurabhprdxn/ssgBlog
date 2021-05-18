module.exports = function(config) {

    config.addPassthroughCopy('assets');
    
    return {
        markdownTemplateEngines: 'njk',
        templateFormats: ['html','njk','md'],
        dir:{
            input:'src'
            
        }
    }
}