export default class CatalogController {
  constructor(ProductService){
    "ngAnnotate";

    this.ProductService = ProductService;

    this.ProductService.fetchProducts();
  }
}