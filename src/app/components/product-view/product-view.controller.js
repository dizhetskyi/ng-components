class ProductViewController {

  constructor(){
    "ngInject";
  }

  $onInit(){
    this.product = this.resolve.product;
  }

}

export default ProductViewController;