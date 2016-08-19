import appComponent from './app.component';
import uiRouter from 'angular-ui-router';  
import 'angular-ui-router/release/stateEvents';

import components from './components';
import services from './services';



const app = angular.module('app', [
  uiRouter,
  'ui.router.state.events',
  components.name,
  services.name
])
  .config(($stateProvider, $urlRouterProvider) => {
    
    "ngInject";

    $stateProvider
      .state('app', {
        url: "/app",
        abstract: true,
        component: `app`
      })
      .state('app.home', {
        url: "/home",
        component: `home`
      })
      .state('app.catalog', {
        url: "/catalog",
        component: `catalog`
      })
      .state('app.catalog.category', {
        url: "/{categoryId}",
        component: 'catalogProducts',
        resolve: {
          items: function(ProductsService, $stateParams) {
            return ProductsService.getProducts($stateParams.categoryId)
          }
        }
      })
      .state('login', {
        url: "/login",
        component: `login`
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
