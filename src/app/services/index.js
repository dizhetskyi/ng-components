import auth from './AuthService';
import categories from './CategoriesService';
import products from './ProductsService';
import cart from './CartService';

const module = angular.module('app.services', [])
  .service('AuthService', auth)
  .service('CategoriesService', categories)
  .service('ProductsService', products)
  .service('CartService', cart)

export default module;