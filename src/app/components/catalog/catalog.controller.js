export default class CatalogController {
  products = [];

  constructor(ProductsService, $state){
    "ngInject";

    Object.assign(this, {ProductsService, $state})
  }

  $onInit(){
    this.ProductsService.getProducts(this.$state.params.categoryId)
      .then(products => {
        this.products = products;
      })
  }
}