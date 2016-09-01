(function(require){
    require.config({
      baseUrl: './',//定义根目录，请根据项目自行修改
      urlArgs: 'version=0.03',//更改这个可以解决浏览器缓存问题
      paths: {//定义依赖库js文件路径,不需要写后缀名
          angular:              'libs/angular.min',
          jquery:               'libs/jquery.min',
          bootstrap:            'libs/bootstrap.min',
          lodash:               'libs/lodash',
          'angular-ui-router':  'libs/angular-ui-router.min'
      },
      shim: {//shim 用来指定依赖模块之间的依赖关系,有两种方式
        //第一种方式 
        angular: {
          deps: ['jquery'],//依赖
          exports: 'angular'//导出的名称，在AMD模式的插件中可能有用
        },
        
        jquery: {
          exports: 'jQuery'
        },
        
        //第二种方式
        'bootstrap':        ['jquery'],
        'angular-ui-router': ['angular']

      },
      waitSeconds: 60//加载js的超时时间
    });
    
    //开始加载app.js,路径请自行修改
    require(['apps/app'], function (app) {
    });
})(require);