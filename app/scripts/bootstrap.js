require.config({
    baseUrl: '/scripts',
    paths: {
		'angular': '/bower_components/angular/angular',
     'angular-route': '/bower_components/angular/angular-route.min',
		// 'angular-route': '/bower_components/angular-route/angular-route', commented for testing purpose
		'bootstrap': '../lib/bootstrap/js/bootstrap.min',
		'jquery': '/bower_components/angular/jquery'
    },
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'bootstrap',]
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

require(['app'],function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);
