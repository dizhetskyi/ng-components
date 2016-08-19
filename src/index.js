import 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';
global.jQuery = require('jquery');
require('bootstrap');

import app from './app/app.module';

angular.bootstrap(document, [app.name]);