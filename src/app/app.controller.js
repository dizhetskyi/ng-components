export default class AppController {
  constructor(AuthService){
    "ngAnnotate";

    this.AuthService = AuthService;
  }
}