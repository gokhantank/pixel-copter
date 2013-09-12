# Air Wick Breathe Phase 3

## Including

* SASS
* Inuit.css
* CoffeeScript
* Backbone.js
* RequireJS
* Handlebars.js
* grunt.js

## Installation

### Configuration
Edit the name, version, and deployPath variables in package.json to suit the project.

### Local

1. [Install grunt 4.x](https://github.com/gruntjs/grunt/wiki/Getting-started)
2. `npm install`
3. `grunt watch`
4. Develop!

### Staging / Production

1. [Install grunt 4.x](https://github.com/gruntjs/grunt/wiki/Getting-started)
2. `npm install`
3. `grunt`

## Handlebars.js

[http://handlebarsjs.com/](http://handlebarsjs.com/)

Handlebars templates live in `src/handlebars`, with the `.hbs` extension. They should be organised into subdirectories mirroring the view structure of the Backbone.s application.

Handlebars templates are compiled into an AMD wrapped JS source file via *grunt.js*. They should be included into your Backbone views via RequireJS:

    define ['jquery', 'lodash', 'backbone', 'vent', 'templates'],
    ($, _, Backbone, vent, templates) ->

        class Carousel extends Backbone.View
            template: templates['carousel/main']

This will load the compiled version of Handlebars template stored in `src/templates/carousel/main.hbs`.

