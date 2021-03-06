let crimeMap = L.map('map4').setView([30.45, -91.1], 12)
let basemapUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_labels_under/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(crimeMap)
let stateCrimeUrl = 'https://ccdunnam.github.io/map4/baton_rouge_crime_incidents_2018.geojson'
jQuery.getJSON(stateCrimeUrl, function (data) {
	function createCircles (feature, latlng) {
		console.log(feature)
			let crime = feature.properties.CRIME // get the current state's Median Age attribute
			console.log(crime)
			let color = '#6CB6FF' // let the initial color be a darker green
			let fillOpacity = .4;
			if ( crime == 'HOMICIDE' ) {
				color = '#ff0000',
				fillOpacity = .8
			} // if the state's median age is less than the average, color it a lighter green
			if ( crime == 'THEFT' || crime == 'RESIDENTIAL BURGLARY' || crime == 'NON-RESIDENTIAL BURGLARY' || crime == 'VEHICLE BURGLARY' || crime == 'INDIVIDUAL ROBBERY' || crime == 'BUSINESS ROBBERY' ) {
				color = 'ORANGE',
				fillOpacity = .8
			} // if the state's median age is less than the average, color it a lighter green
			let crimeStyle = {
				stroke: false, //use the color variable above for the value
				radius: 10,
				fillColor: color,
				fillOpacity: fillOpacity
			}
		return L.circleMarker(latlng, crimeStyle)
	}
	let onEachFeature = function (feature, layer) {
     let name = feature.properties.CRIME
     layer.bindPopup('Crime Committed : ' + name)
   }
	let myLayerOptions = {
  	pointToLayer: createCircles,
		onEachFeature: onEachFeature
	}
	L.geoJSON(data, myLayerOptions).addTo(crimeMap)
})
