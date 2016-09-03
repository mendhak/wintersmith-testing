module.exports = (env, callback) ->

  # Tries to extract the initial <h1>the title</h1> from the HTML, else returns page.title.
  # This is to allow MD files without any frontmatter.
  env.helpers.sortOfTitle = (page) ->
    if page.html.startsWith('<h1') 
      return page.html.substring(0, page.html.indexOf("</h1>")).replace(/<h1\b[^>]*>/i,"") 
    else 
      return  page.title

  callback()