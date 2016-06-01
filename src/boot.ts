/// <reference path="_all.ts" />

module quizzApp{

    angular.module('quizzApp', ['ngMaterial', 'ngMdIcons', 'commonServices'])
        .config(($mdIconProvider: angular.material.IIconProvider,
                 $mdThemingProvider: angular.material.IThemingProvider) => {
            
            $mdIconProvider
                .defaultIconSet('assets/svg/avatars.svg', 128)
                .icon('menu', 'assets/svg/menu.svg', 24);
            
            $mdThemingProvider.theme('default')
                .primaryPalette('deep-orange')
                .accentPalette('red');
        });
                
}
