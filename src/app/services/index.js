import auth from './AuthService';

const module = angular.module('app.services', [])
  .service('AuthService', auth);

export default module