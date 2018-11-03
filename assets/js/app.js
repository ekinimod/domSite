/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */


// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss');

// NodeModules Installés par la commande :
// yarn add moduleName@4.1.3
var $ = require('jquery');
var $ = require('popper.js');
var $ = require('bootstrap');
// module ajouté à partir des assets
var $ = require('../js/dom.js');

console.log('Hello Webpack Encore!');


