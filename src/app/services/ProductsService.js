class ProductsService {

  fetching = true;
  error = false;

  constructor($http){
    "ngInject";
    
    Object.assign(this, {$http});
  }

  getProducts(cId){
    return this.$http.get(`http://localhost:3000/products?categoryId=${cId}`)
      .then(({data}) => {
        this.fetching = false;
          return data;        
      })
      .catch(err => {        
        this.fetching = false;
        this.error = err;
      })
  }
}

export default ProductsService;