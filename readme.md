
# Documentation

Documentation is in [`src`](src).  Actual generated HTML is right here in `docs`, for Github Pages to serve. 


## Build it 
    cd assets/docs
    npm install
    # serve in web server using wintersmith preview
    ./node_modules/.bin/grunt preview
    # build directly in this docs folder using wintersmith build
    ./node_modules/.bin/grunt production  

## Android

Real question is - to share the MD between Android and the site, where should it sit?

It could sit in `docs\src` - have Android Gradle copy from there, have generated files in `docs`

It could sit in `assets\docs` - have Android Gradle and wintermsith copy from there

Other ideas... 

## Tweaks

This is based off the site that `wintersmith new` generates.  Modified so that it can work without any front matter. 

`plugins/paginator.coffee` - Changed `getArticles` to read from content directory, not just subdirectories. Sorted by filename.  Uses first part of filename to set anchor on index.html

`plugins/blog.coffee` - Allows setting defaults, specifically `filenameTemplate` (where it outputs to) and the `template` (which jade it uses)

`templates/index.jade` - Changed to show entire contents of every file, effectively a single page

Problem - The `filenameTemplate` only applies to the .html file, so any accompanying images still go to the old location - `pages/blah/abc.png`.  Reverted to original filenameTemplate by not specifying it.  