import login from './login/login.component';

const module = angular.module('app.components', [])
  .component('login', login);

export default module;