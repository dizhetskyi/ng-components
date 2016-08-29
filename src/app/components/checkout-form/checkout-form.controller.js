export default class CheckoutFormController {
  
  constructor($http){
    "ngInject";

    Object.assign(this, {$http});
    
  }

  $onInit(){
  }

  submitHandler(){
    if (this.checkoutForm.$valid){

      this.$http.post('http://localhost:3663/api/order', this.serialize())
        .then(res => {
          this.onDone();
        })
        .catch(err => console.log(err));

    }
  }

  serialize(){
    return {
      user: this.formData.user,
      comment: this.formData.comment,
      products: this.products
    }
  }
}