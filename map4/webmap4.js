let CrimeMap = L.map('map4').setView([30.5, -91], 11)
let basemapUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(CrimeMap)
let StateCrimeUrl = 'https://ccdunnam.github.io/map4/baton_rouge_crime_incidents_2018.geojson'
// jQuery.getJSON(StateCrimeUrl, function (data) {
// 	let CrimeStyle = function (feature) {
// 	  let crime = feature.properties.CRIME // get the current state's Median Age attribute
// 	  let color = '#ff0000' // let the initial color be a darker green
// 		let fillOpacity = .4;
// 	  if ( crime == 'HOMICIDE' ) {
// 				color = '#15560d' ,
// 			 	fillOpacity = .8
// 				} // if the state's median age is less than the average, color it a lighter green
// 	  return {
// 	    stroke: false, //use the color variable above for the value
// 	    radius: 10,
// 			fillColor: color,
// 			fillOpacity: 0.5
// 	  }
// 	}
// 	let StateCrimegeojsonOptions = {
// 		style: centerStyle,
// 		onEachFeature: createPopup,
// 		pointToLayer: createMarker
//  }
//  let createMarker = function (feature, latlng) {
// 		return L.circleMarker(latlng)
// 	}
