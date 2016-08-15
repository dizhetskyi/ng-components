export default class LoginController {

  constructor(AuthService){
    "ngAnnotate";

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