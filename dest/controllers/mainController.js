var quizzApp;
(function (quizzApp) {
    var mainController = (function () {
        function mainController(userService, $mdSidenav, dataAccessService, allTests, allTestsTyped, testResource) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.dataAccessService = dataAccessService;
            this.allTests = allTests;
            this.allTestsTyped = allTestsTyped;
            this.testResource = testResource;
            this.users = [];
            this.selected = null;
            var self = this;
            self.testResource = this.dataAccessService.getTestResource();
            self.allTestsTyped = self.testResource.all(function () {
                self.allTestsTyped.forEach(function (test) {
                    test.questions.forEach(function (question) {
                        var answers = self.testResource.answers({ id: question.id }, function () {
                            question.answers = answers.answers;
                        });
                    });
                });
                console.log(self.allTestsTyped);
            });
            self.userService.loadAllUsers().then(function (users) {
                self.users = users;
                self.selected = users[0];
            });
        }
        mainController.prototype.toggleSideNav = function (who) {
            who === "user" ?
                this.$mdSidenav('left').toggle() :
                this.$mdSidenav('left_2').toggle();
        };
        mainController.prototype.selectUser = function (user) {
            console.log('click');
            this.selected = user;
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen())
                sidenav.close();
        };
        mainController.prototype.openSidebar = function () {
            this.$mdSidenav('left').open();
        };
        mainController.prototype.closeSidebar = function () {
            this.$mdSidenav('left').close();
        };
        mainController.$inject = ['userService', '$mdSidenav', 'dataAccessService'];
        return mainController;
    }());
    quizzApp.mainController = mainController;
    angular.module('quizzApp').controller('mainController', mainController);
})(quizzApp || (quizzApp = {}));
//# sourceMappingURL=mainController.js.map