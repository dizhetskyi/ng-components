import appComponent from './app.component';
import uiRouter from 'angular-ui-router';  

const app = angular.module('app', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    
    "ngInject";

    $stateProvider
      .state('login', {
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

    $urlRouterProvider.otherwise('/app/home');

  })

  .component('app', appComponent)
  .component('login', {
    template: `
      <div class="login">
        <h2>login form</h2>
      </div>
    `
  })
  .component('home', {
    template: `
      <div class="home">
        <h2>home</h2>
      </div>
    `
  })

export default app;
