import * as angular from 'angular';
import HomeCtl from './controllers/home';
import App from './components/app';
angular.module('ng-app', ['react'])
    .controller('homeCtl', ['$scope', HomeCtl])
    .value('app', App)
    ;
