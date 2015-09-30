/* global angular, console */
angular.module('hascodeTagWizard')
    .factory('overviewService', function ($http) {
        "use strict";

        var url = 'http://data.cSkool.hol.es/getSchool.php';
        /* var url = 'http://10.251.191.147/cSkool/index.php/senarai-sekolah2'; */

        return {
            fetchAll: function () {
                return $http({method: 'GET', url: url});
            }
        };
    })


    .factory('searchService', function ($http) {
        "use strict";

        /*var blogUrl = 'http://www.hascode.com/wp-content/byTag.php?tag='; -->*/
            var blogUrl = 'http://data.cSkool.hol.es/getSchool.php?poskod=';

        return {
            searchByTag: function (tag) {
                var searchUrl = blogUrl + tag;
                console.log('searching articles for tag ' + tag);

                return $http({method: 'GET', url: searchUrl});
            }
        };
    })


 .factory('searchBusService', function ($http) {
        "use strict";

        /*var blogUrl = 'http://www.hascode.com/wp-content/byTag.php?tag='; -->*/
            var blogUrl = 'http://data.cSkool.hol.es/getBus.php?daerah=';

        return {
            searchByTag: function (tag) {
                var searchUrl = blogUrl + tag;
                console.log('searching articles for tag ' + tag);

                return $http({method: 'GET', url: searchUrl});
            }
        };
    })

    ;
