export default class CategoriesService {

  categories = [];

  fetching = true;
  error = false;

  constructor($http){
    "ngInject";

    Object.assign(this, {$http});

    this.fetchData();
  }

  fetchData(){
    this.$http.get('http://localhost:3000/categories')
      .then(({data}) => {
        this.categories = data;
        this.fetching = false;
      })
      .catch(err => {        
        this.fetching = false;
        this.error = err;
      })
  }

}