const storageKey = 'cart';

export default class CartService {

  items = [];

  constructor() {
    "ngInject";

    this.fetch();
  }

  fetch() {
    var data = localStorage.getItem(storageKey);
    this.items = data === null ? [] : JSON.parse(data);
  }

  save() {
    localStorage.setItem(storageKey, JSON.stringify(this.items));
  }

  add(product, amount = 1) {
    this.items.push({
      product: angular.copy(product),
      amount
    });

    this.save();
  } 

  remove(itId) {
    this.items = this.items.filter((item) => item.product.id !== itId);
    this.save();
  }

  get sum() {
    return this.items.reduce((sum, {product, amount}) => {
      return sum + +product.price * amount; 
    }, 0);
  }

  increment(itId) {
    var targetItem = this.findItemByProductId(itId);
    targetItem.amount++;
    this.save();
  }

  decrement(itId) {
    var targetItem = this.findItemByProductId(itId);
    if(targetItem.amount > 1) {
      targetItem.amount--;
      this.save();
    }
  }

  findItemByProductId(prodId) {
    return this.items.find((item) => item.product.id === prodId);
  }

  empty() {
    this.items = [];
    this.save();
  }

}