(function(){
    'use strict';
    angular.module('gridshore.c3js.pie', [
        'ui.router'
    ]);
})();

(function(){
    'use strict';
    angular.module('gridshore.c3js.pie')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pie', {
                url: '/pie',
                templateUrl: 'assets/js/pie/pie.tpl.html',
                controller: 'PieCtrl',
                controllerAs: 'vm'
            });
    }
})();

(function(){
    'use strict';
    angular.module('gridshore.c3js.pie')
        .controller('PieCtrl', PieCtrl);

    PieCtrl.$inject = [];
    function PieCtrl() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();