export default class AppController {
  constructor(AuthService, CategoriesService){
    "ngInject";

    Object.assign(this, {AuthService, CategoriesService})
  }

}