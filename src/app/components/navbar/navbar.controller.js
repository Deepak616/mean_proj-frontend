export class NavbarController{
    constructor($auth){
        'ngInject';
        this.$auth=$auth;
    }
    isAuthenticated(){
       return this.$auth.isAuthenticated();
    }
    logout(){
       this.$auth.logout();
    }
}