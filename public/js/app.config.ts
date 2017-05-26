namespace chatroom{
     configuration.$inject = [
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider'
    ];

    export function configuration($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: 'js/views/home.html',
                controller: controllers.homeController,
                controllerAs: 'vm'
            })
            .state('anonchat', {
                url: '/anonchat',
                templateUrl: 'js/views/anonchat.html',
                controller: controllers.anonchatController,
                controllerAs: 'vm'
            });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
}           
