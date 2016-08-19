export default class AppController {
  constructor(AuthService, CategoriesService){
    "ngInject";

    this.AuthService = AuthService;
    this.CategoriesService = CategoriesService;
  }
}