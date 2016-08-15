import login from './login/login.component';
import catalog from './catalog/catalog.component';
import catalogProducts from './catalog-products/catalog-products.component';
import catalogItem from './catalog-item/catalog-item.component';

const module = angular.module('app.components', [])
  .component('login', login)
  .component('catalog', catalog)
  .component('catalogProducts', catalogProducts)
  .component('catalogItem', catalogItem)

export default module;