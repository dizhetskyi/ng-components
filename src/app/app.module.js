import appComponent from './app.component';

const app = angular.module('app', [
  // 'ui.router'
])
  .component('app', appComponent);

export default app;