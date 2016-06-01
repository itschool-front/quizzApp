var quizzApp;
(function (quizzApp) {
    angular.module('quizzApp', ['ngMaterial', 'ngMdIcons', 'commonServices'])
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet('assets/svg/avatars.svg', 128)
            .icon('menu', 'assets/svg/menu.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-orange')
            .accentPalette('red');
    });
})(quizzApp || (quizzApp = {}));
//# sourceMappingURL=boot.js.map