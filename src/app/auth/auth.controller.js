export class AuthController {
    constructor($auth){
        'ngInject';
        this.$auth=$auth;
    }
    
    register(){
        var vm =this;
        vm.$auth.signup(this.user).then(function(res){
            console.log(res.data.token);
            vm.$auth.setToken(res.data.token);
        })
    }
    
    loginFn(){
        var vm=this;
        vm.$auth.login(vm.login).then(function(res){
            vm.$auth.setToken(res.data.token);
        })
    }
}