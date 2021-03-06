var map = L.map('map').setView([39.74739, -105], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.light'
}).addTo(map);


function onEachFeature(feature, layer) {
			if (feature.properties && feature.properties.popupContent) {
				layer.bindPopup(feature.properties.popupContent);
			}
		}

L.geoJson([bicycleRental, campus], {

	style: function (feature) {
		return feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, {
			radius: 6,
			fillColor: "#ff7800",
			color: "#000",
			weight: 1,
			opacity: 1,
			fillOpacity: 0.8
		});
	}
}).addTo(map);

L.geoJson(freeBus, {onEachFeature: onEachFeature}).addTo(map);