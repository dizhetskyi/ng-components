export default class AuthService {
  constructor($http){
    "ngAnnotate";

    this.$http = $http;
  }

  login(data){
    return this.$http.post('http://localhost:3663/login', data);
  }

}