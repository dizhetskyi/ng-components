import appComponent from './app.component';
import uiRouter from 'angular-ui-router';  
import 'angular-ui-router/release/stateEvents';
import modal from 'angular-ui-bootstrap/src/modal';

import components from './components';
import services from './services';


const app = angular.module('app', [
  uiRouter,
  'ui.router.state.events',
  components.name,
  services.name,
  modal
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

      .state('app.catalog.category.product', {
        url: "/{productId}",
        onEnter: ['$uibModal', '$state', '$stateParams', 
          function($uibModal, $state, $stateParams) {

            var $modal = $uibModal.open({
              component: 'productView',
              resolve: {
                product: ['ProductsService', function(ProductsService){
                  return ProductsService.getOne($stateParams.productId);
                }]
              }
            });
            
            $modal.result.then(null, () => $state.go('^'));

            this.onExit = function() {
              $modal.close();
            }
        }]
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
