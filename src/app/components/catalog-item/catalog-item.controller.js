export default class CatalogItemController {
  amount = 1;

  constructor(CartService){
    "ngInject";

    Object.assign(this, {CartService})
  }

  add() {
    this.CartService.add(this.item, this.amount);
  }
}