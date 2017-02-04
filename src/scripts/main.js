;(function($){
	"use strict";



	$(window).on('load', function(){

		$('.ba-slider--works').slick({
			infinite: true,
			dots: true,
			arrows: true
		});

		$('.ba-slider--team').slick({
			infinite: false,
			dots: false,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		var map;
		var mapContainer = $('#map')[0];
		var mapCenter = {lat: -7.931105, lng: 112.636845};
		map = new google.maps.Map(mapContainer, {
			center: mapCenter,
			zoom: 17,
			disableDefaultUI: true
		});

		var marker = new google.maps.Marker({
			position: mapCenter,
			map: map,
		});

		var infowindow = new google.maps.InfoWindow({
		});
		infowindow.open(map, marker);

		marker.addListener('click', function(){
			infowindow.open(map, marker);
		});
	});

})(jQuery);  