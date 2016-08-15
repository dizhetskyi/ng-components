export default class ProductService {

  items = [];
  fetching = true;
  error = false;

  constructor($http, $timeout){
    "ngAnnotate";

    this.$http = $http;
  }

  fetchProducts(){
    this.$http.get('http://localhost:3000/products?_expand=category')
      .then(({data}) => {
        this.items = data;
        this.fetching = false;
      })
      .catch(err => {        
        this.fetching = false;
        this.error = err;
      })
  }
}