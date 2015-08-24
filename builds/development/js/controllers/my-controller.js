angular
  .module('myApp')
  .controller('myController',myController);

function myController(){
  var vm = this;

  vm.sixDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  vm.periods = [1,2,3,4,5,6,7,8];
  vm.courses = [
    {name:'name111', periodBegin:3, periodEnd:4},
    {name:'name222', periodBegin:7, periodEnd:7},
    {name:'name333', periodBegin:8, periodEnd:8}
  ];
}
