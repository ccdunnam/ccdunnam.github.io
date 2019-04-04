let StateMap = L.map('map3').setView([40.18, -99.14], 3.5)
let basemapUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(StateMap)
let StateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(StateDemographicsUrl, function (data) {
	let StateStyle = function (feature) {
	  let age = feature.properties.MED_AGE // get the current state's Median Age attribute
	  let StateColor = 'olive' // let the initial color be a darker green
	  if ( age < 38 ) { StateColor = 'green' } // if the state's median age is less than the average, color it a lighter green
	  return {
	    color: StateColor, //use the color variable above for the value
	    weight: 1,
	    fillOpacity: 0.2
	  }
	}
	let onEachFeature = function (feature, layer) {
	     let name = feature.properties.STATE_NAME
	     let age = feature.properties.MED_AGE
	     layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
   }
	let geojsonOptions = {
style: StateStyle,
onEachFeature: onEachFeature
 }
	L.geoJSON(data, geojsonOptions).addTo(StateMap)
})
