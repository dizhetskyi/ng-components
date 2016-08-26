export default class CartService {

  items = [];

  constructor(){
    "ngInject";

    Object.assign(this, {});

    this.fetch();
  }

  fetch(){
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
  }

  save(){
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  add(product){
    this.items.push({product: angular.copy(product), amount: 1});

    this.save();
  }

  remove(pId){
    this.items = this.items.filter(p => p.product.id !== pId);

    this.save();
  }

  inc(pId){
    this.getItemById(pId).amount++;

    this.save();
  }

  dec(pId){
    var item = this.getItemById(pId);
    if (item.amount > 1) item.amount--;

    this.save();
  }

  getItemById(pId){
    return this.items.find(p => p.product.id === pId);
  }

  get total(){
    return this.items.reduce((acc, curr) => acc + curr.product.price * curr.amount, 0)
  }

  empty(){
    this.items = [];
    this.save();
  }

}