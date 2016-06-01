module quizzApp.common{
    angular.module('commonServices', ['ngResource'])
           .constant('appSettings', {serverPath: 'http://itschool.ocr-service.net:1337'});
}