export default class CheckoutController {

  done = false;

  constructor(CartService){
    "ngInject";

    Object.assign(this, {CartService});
  }

  onDone(){
    this.done = true;
    this.CartService.empty();
  }

}