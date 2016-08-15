import decode from 'jwt-decode';

export default class AuthService {

  token = null;

  user = {
    login: null,
    admin: null
  }

  constructor($http){
    "ngAnnotate";

    this.$http = $http;
    
    this.invalidateToken();
  }

  isLoggedIn(){
    return this.token !== null;
  }

  login(data, cb){
    this.$http.post('http://localhost:3663/api/auth/signin', data)
      .then(({data}) => {

        const { success, token, message} = data;
        
        if (success) {
          this.setToken(token);
          this.parseToken();
          cb(null);
        } else {
          cb(message);
        }

      })
  }

  setToken(token){
    this.token = token;
    localStorage.setItem('token', token);
  }

  removeToken(){
    this.token = null;
    localStorage.removeItem('token');
  }

  invalidateToken(){
    var token = localStorage.getItem('token');
    if (token === null) return;

    this.$http.post('http://localhost:3663/api/auth/validateToken', {token})
      .then(({data}) => {

        const { success, token } = data;

        if (success){
          this.setToken(token);
          this.parseToken();
        } else {
          this.removeToken();
        }
      })
  }

  parseToken(){
    const {login, admin} = decode(this.token);
    
    this.user = {
      login,
      admin
    }
  }

}