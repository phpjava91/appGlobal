(function(){


  var app = angular.module('services',[]);

  app.controller('servicesController',function(){
     this.tab = 1;	
    
    this.selectedTab = function(tab){
       this.tab = tab;
    };
  });

})();





