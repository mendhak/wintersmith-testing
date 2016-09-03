
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