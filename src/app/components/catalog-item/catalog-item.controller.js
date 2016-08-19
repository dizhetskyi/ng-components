export default class CatalogItemController {
  constructor(CartService){
    "ngInject";

    Object.assign(this, {CartService})
  }

  addToCart(){
    this.CartService.add(this.item);
  }
}