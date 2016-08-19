export default class Controller {
  constructor(CategoriesService, $stateParams){
    "ngInject";

    Object.assign(this, {CategoriesService, $stateParams});
  }

  get categories(){
    return this.CategoriesService.categories;
  }

  get activeCategory(){
    return this.$stateParams.categoryId;
  }
}