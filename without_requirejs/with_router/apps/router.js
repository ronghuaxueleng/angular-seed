angular.module('app').config(function($stateProvider, $urlRouterProvider, NavData) {
  $urlRouterProvider.when('', '/controller1');
  $urlRouterProvider.when('/', '/controller1');
  var states = {};
  // 把多级state弄成单级的，并自动补充父级路由，方便后续处理
  //这里的处理是根据NavData来的，之后可根据数据不同自行修改
  NavData.forEach(function(item) {
      var paths = item.state.split(/\./g);
      var currentPath = '';
      paths.forEach(function(path) {
        currentPath += path;
        states[currentPath] = item;
        currentPath += '.'
      });
  });
  
  // 遵循约定优于配置的原则自动批量注册路由
  for(var state in states){
      var item = states[state];
      var path = state.replace(/\./g, '/');
      var lastState = state.match(/(\w+)$/)[0];
      $stateProvider.state(state, {
        url: '/' + lastState,
        controller: state,
        templateUrl: 'apps/views/' + path + '.html',
        label: item.label
      });
  }
});
