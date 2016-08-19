export default class AppController {
  constructor(AuthService, CategoriesService, CartService){
    "ngInject";

    Object.assign(this, {AuthService, CategoriesService, CartService})
  }

  get cartItems(){
    return this.CartService.items;
  }

  removeFromCart(id){
    this.CartService.remove(id);
  }
}