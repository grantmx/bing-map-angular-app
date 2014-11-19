/*===============================================================================================================
* AngularJS Bing Directive
*
*	Purpose:
*		- creates a Bing maps directive to be used in conjunctoin with AngularJS = <bing-map></bing-map>
*
*	Dependencies:
*		- Libraries: AngularJS 1.10, Bing Maps REST Locations API v1
*
*	Originally written by: Marshall Grant (mxg6082)
* =================================================================================================================*/

!function (angular, Microsoft){

	var bingMapsModule = angular.module("bing-maps", []),
		bingKey = "AnyJ1pJIM0uk8kD5sxuanwFUoU6qtwh-HpPg0xXtV4j-L10QLFss6qf9lWMfDnWh";


	/* Bing Map Directive Definition
	-------------------------------------------*/
	bingMapsModule.directive("bingMap", ["$log", "$timeout", function ($log, $timeout){
		return {
			priority: 100,
			scope: {
				center: "=center", // required
				pins: "=pins", // optional
				latitude: "=latitude", // required
				longitude: "=longitude", // required
				zoom: "=zoom", // required
				events: "=events",
				bounds: "=bounds",
				infoWindow: "=infoWindow"
			},
			restrict: "EAC",
			template: ['<div class="bing-container">',
							'<div id="bingMap" class="map-cntr">',
								'<a href="#" class="map-button btn hide traffic" id="trafficToggle">Traffic</a>',
								'<a href="#" class="map-button btn hide traffic-reset" id="mapReset">Reset Map</a>',
							'</div><!-- end map directive -->',
				
							'<traffic-options></traffic-options>',
						'</div>'].join(""),
			replace: true,
			transclude: true,
			link: function(scope, element, attrs) {
				
			}
		};
	}]);



	/* Bing Map Traffic Directive Definition
	-------------------------------------------*/
	bingMapsModule.directive('trafficOptions', [function () {
		return {
			restrict: 'ECA',
			template: [	'<div id="trafficOptions" class="grid_8 pad traffic-options">',
							'<h5 class="traffic-title">Live Traffic</h5>',
							'<ul class="traffic-scale grid_4 align-right">',
								'<li class="traffic-scale-label grid_2">Slow</li>',
								'<li class="traffic-scale-label grid_2">Fast</li>',
								'<li class="grid_3">',
									'<div class="traffic-scale-colors">',
										'<div class="traffic-scale-color traffic-black">&nbsp;',
											'<div class="traffic-black-stripes">&nbsp;</div>',
										'</div>',
										'<div class="traffic-scale-color traffic-red">&nbsp;</div>',
										'<div class="traffic-scale-color traffic-yellow">&nbsp;</div>',
										'<div class="traffic-scale-color traffic-green">&nbsp;</div>',
									'</div>',
								'</li>',
							'</ul>',
						'</div>'].join(""),
			replace: true,
			link: function (scope, element, attrs) {
				
			}
		};

	}]);

}(window.angular, window.Microsoft);