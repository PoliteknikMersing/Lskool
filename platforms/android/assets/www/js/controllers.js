/* global angular, console */
angular.module('hascodeTagWizard')//, ['ionic','firebase'])
    .controller('SearchController', function (searchService, $scope) {
        "use strict";

        $scope.term = '';
        $scope.hits = [];
        $scope.showResults = false;

        $scope.searchTerm = function () {
            searchService.searchByTag(this.term).then(function (response) {
                $scope.hits = response.data || [];
                console.log('hits received: ' + $scope.hits.length);
                $scope.showResults = true;
            });
        };

        $scope.resetResults = function () {
            $scope.showResults = false;
            $scope.hits = [];
        };
    })

     .controller('BusController', function (searchBusService, $scope) {
        "use strict";

        $scope.term = '';
        $scope.hits = [];
        $scope.showResults = false;

        $scope.searchBus = function () {
            searchBusService.searchByTag(this.term).then(function (response) {
                $scope.hits = response.data || [];
                console.log('hits received: ' + $scope.hits.length);
                $scope.showResults = true;
            });
        };

        $scope.resetResults = function () {
            $scope.showResults = false;
            $scope.hits = [];
        };
    })

     /*Code asal di bawah sebelum masuk code push ionic
    .controller('AboutController', function () { */
    .controller('AboutController', function () {

        "use strict";

        this.year = new Date().getFullYear();

        this.browseBlog = function () {
            window.open('http://www.hascode.com/', '_blank', 'location=yes');
        };
    })


    .controller('MapController', function($scope, $ionicLoading) {
     
        google.maps.event.addDomListener(window, 'load', function() {
            
            var myLatlng = new google.maps.LatLng(2.9304184, 101.6589654);
     
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
     
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
     
            navigator.geolocation.getCurrentPosition(function(pos) {
                map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                var myLocation = new google.maps.Marker({
                    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                    map: map,
                    title: "My Location"
                });

                var request = {
                    location: myLocation,
                    radius: '500',
                    types: ['school']
                    };

                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback);

                function callback(results, status) {
                  if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                      var place = results[i];
                      createMarker(results[i]);
                    }
                  }
                }
            });

            
     
            $scope.map = map;
        });
     
    })

    
    /*.controller('MapController', function($scope, $state, $cordovaGeolocation) {
        var options = {timeout: 10000, enableHighAccuracy: true};
 
        $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     
        var mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
     
        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
     
      }, function(error){
        console.log("Could not get location");
      });
 
})

    .controller('MapCtrl', ['$scope','$firebase','$ionicPopup', function($scope,$firebase,$ionicPopup) {

        $scope.user = {};

        $scope.showAlert = function() {
            $ionicPopup.alert({
                title: 'iMapApp',
                template: 'Your location has been saved!!'
            });
        };

        $scope.saveDetails = function(){
            var lat = $scope.user.latitude;
            var lgt = $scope.user.longitude;
            var des = $scope.user.desc;

            var firebaseObj = new Firebase("https://scorching-inferno-2870.firebaseio.com/MapDetails");
            var fb = $firebase(firebaseObj);

            fb.$push({
                latitude: lat,
                longitude: lgt,
                description: des
            }).then(function(ref) {
                $scope.user = {};
                $scope.showAlert();
            }, function(error) {
                console.log("Error:", error);
            });

        // Code to write to Firebase will be here
        }
    }])*/

    .controller('OverviewController', function ($scope, overviewService) {
        "use strict";

        $scope.tags = [];

        $scope.loadTags = function(){
            overviewService.fetchAll().then(function(response){
                $scope.tags = response.data || [];
                console.log('tags received: '+$scope.tags.length);
            });
        };
    });



    /*.controller('SchoolViewController', function ($scope, $stateParams) {
        $scope.changePage = function($id.id){
            $state.go('detail-school', detailsid:id)
        }
    }); */
