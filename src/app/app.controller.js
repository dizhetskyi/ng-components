export default class AppController {
  constructor(AuthService, ProductService){
    "ngAnnotate";

    this.AuthService = AuthService;
    this.ProductService = ProductService;
  }
}