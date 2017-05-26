namespace chatroom{
    angular.module('app', [ 'ui.router' ])
        .config(configuration)
        .service('anonService', services.anonService)
}
