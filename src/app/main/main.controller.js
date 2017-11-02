export class MainController {
  constructor ($http) {
    'ngInject';
      this.$http=$http;
      this.getMessages();
    
  }
    getMessages(){
        var vm=this
        this.$http.get('http://meanstack-env.pgtmywsvpp.ap-south-1.elasticbeanstalk.com:5000/api/getMessage').then(function(res){
            vm.messages=res.data;
        })
    }
    postMessage(){
       this.$http.post('http://meanstack-env.pgtmywsvpp.ap-south-1.elasticbeanstalk.com:5000/api/postMessage',{msg:this.text});
    }

 
}
