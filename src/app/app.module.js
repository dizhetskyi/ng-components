import appComponent from './app.component';
import uiRouter from 'angular-ui-router';  

import components from './components';
import services from './services';

const app = angular.module('app', [
  uiRouter,
  components.name,
  services.name
])
  .config(($stateProvider, $urlRouterProvider) => {
    
    "ngInject";

    $stateProvider
      .state('app.login', {
        url: "/login",
        template: `<login></login>`
      })
      .state('app', {
        url: "/app",
        abstract: true,
        template: `<app></app>`
      })
      .state('app.home', {
        url: "/home",
        template: "<home></home>"
      })
      .state('app.catalog', {
        url: "/catalog",
        template: `<catalog></catalog>`
      })

    $urlRouterProvider.otherwise('/app/home');

  })

  .component('app', appComponent)
  .component('home', {
    template: `
      <div class="home">
        <h2>home</h2>
      </div>
    `
  })

export default app;
