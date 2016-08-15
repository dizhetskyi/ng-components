import auth from './AuthService';
import product from './ProductService';

const module = angular.module('app.services', [])
  .service('AuthService', auth)
  .service('ProductService', product)

export default module;