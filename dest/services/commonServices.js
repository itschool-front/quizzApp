var quizzApp;
(function (quizzApp) {
    var common;
    (function (common) {
        angular.module('commonServices', ['ngResource'])
            .constant('appSettings', { serverPath: 'http://itschool.ocr-service.net:1337' });
    })(common = quizzApp.common || (quizzApp.common = {}));
})(quizzApp || (quizzApp = {}));
//# sourceMappingURL=commonServices.js.map