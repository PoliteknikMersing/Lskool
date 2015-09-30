/* global angular, console */
angular.module('hascodeTagWizard')

    .directive('blogarticle', function () {
        "use strict";

        return {
            restrict: 'E',
            scope: {
                article: '=data'
            },
            link: function (scope, element, attrs) {

                /*scope.browse = function (url) {
                    console.log('opening link: '+url);
                    window.open(url, '_blank', 'location=yes');
                };*/
            },
            /*template: '<a class="item item-thumbnail-left item-text-wrap" ng-click="browse(article.kod_sekolah)">' +*/
            template: '<a class="item item-thumbnail-left item-text-wrap" href="http://cSkool.hol.es/index.php/senarai-sekolah2/details/24/{{article.id}}">' +
                '<img src="img/University.png">' +
                '<h2>School Name: {{article.nama_sekolah}}</h2><p>Address: {{article.alamat_surat}}, {{article.poskod}} {{article.bandar_surat}}, {{article.negeri}}<br/>School Level: {{article.peringkat_sekolah}}<br/><i class="icon iconic-lg ion-ios-telephone"></i>: {{article.no_telefon}}</p></a>'
        };
    })

    .directive('tag', function () {
        "use strict";

        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function (scope, element, attrs) {
                scope.browse = function (id) {
                    console.log('opening link: http://cSkool.hol.es/index.php/senarai-sekolah2/details/24/'+id);
                    var url = 'http://cSkool.hol.es/index.php/senarai-sekolah2/details/24/' + id;
                    window.open(url, '_blank', 'location=yes');
                };
            },
            template: '<a class="item item-text-wrap" ng-click="browse(data.id)">' +
            '<span>{{data.nama_sekolah}}</span><span class="badge badge-dark">{{data.no_telefon}}</span></a>'
        };
    })

    .directive('bus', function () {
            "use strict";

            return {
                restrict: 'E',
                scope: {
                    article: '=data'
                },
                link: function (scope, element, attrs) {

                    /*scope.browse = function (url) {
                        console.log('opening link: '+url);
                        window.open(url, '_blank', 'location=yes');
                    };*/
                },
                /*template: '<a class="item item-thumbnail-left item-text-wrap" ng-click="browse(article.kod_sekolah)">' +*/
                template: '<a class="item item-thumbnail-left item-text-wrap" href="http://cSkool.hol.es/index.php/pengendali-bas-sekolah2/details/25/{{article.id}}">' +
                     '<img src="img/bus.jpg">' +
                     '<h2>{{article.nama_syarikat}}</h2><p>Plat No: {{article.no_kenderaan}}<br/>Contact No: {{article.noTel}} <br/><i class="icon ion-thumbsup larger">  5 <i class="icon ion-thumbsdown">  3</p></a>'
                    
            };
        })

    /*.directive('map', function() {c
        return {
        restrict: 'A',
        link:function(scope, element, attrs){

          var zValue = scope.$eval(attrs.zoom);
          var lat = scope.$eval(attrs.lat);
          var lng = scope.$eval(attrs.lng);


          var myLatlng = new google.maps.LatLng(lat,lng),
          mapOptions = {
                zoom: zValue,
                center: myLatlng
            },
              map = new google.maps.Map(element[0],mapOptions);


        }
    };
})*/

;