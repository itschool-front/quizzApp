var quizzApp;
(function (quizzApp) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource, serverPath) {
                if (serverPath === void 0) { serverPath = 'http://itschool.ocr-service.net:1337'; }
                this.$resource = $resource;
                this.serverPath = serverPath;
            }
            DataAccessService.prototype.getQuestionsResource = function () {
                return this.$resource('http://itschool.ocr-service.net:1337/test');
            };
            DataAccessService.prototype.getTestResource = function () {
                var r = this.$resource('http://itschool.ocr-service.net:1337', {}, {
                    all: {
                        method: 'GET',
                        url: this.serverPath + '/test',
                        isArray: true
                    },
                    answers: {
                        method: 'GET',
                        url: this.serverPath + '/question/:id',
                        isArray: false
                    },
                    picture: {
                        method: 'GET',
                        url: this.serverPath + 'question/picture/:id',
                        isArray: false
                    }
                });
                return r;
            };
            DataAccessService.$inject = ['$resource'];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular.module('commonServices').service('dataAccessService', DataAccessService);
    })(common = quizzApp.common || (quizzApp.common = {}));
})(quizzApp || (quizzApp = {}));
//# sourceMappingURL=dataAccessService.js.map