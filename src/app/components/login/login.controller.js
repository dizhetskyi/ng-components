export default class LoginController {

  constructor(AuthService){
    "ngAnnotate";

    this.AuthService = AuthService;    

    this.loginModel = {};
  }

  submitHandler(){
    this.AuthService.login(this.loginModel)      
      .then(({data}) => {
        
        if (data.success){
          alert('ok');
        } else {
          alert(data.message);
        }
      
      })
  }

}