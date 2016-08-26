export default class CartController {

  constructor(CartService){
    "ngInject";

    Object.assign(this, {CartService});

    console.log(this.items);
  } 

}