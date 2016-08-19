export default class LoginController {

  constructor(AuthService){
    "ngInject";

    this.AuthService = AuthService;

    this.loginModel = {};
  }

  submitHandler(){
    this.AuthService.login(this.loginModel, this.onLogin);
  }

  onLogin = (err) => {
    console.log('After Login');
  }

}