import auth from './AuthService';
import categories from './CategoriesService';
import products from './ProductsService';

const module = angular.module('app.services', [])
  .service('AuthService', auth)
  .service('CategoriesService', categories)
  .service('ProductsService', products)

export default module;