let StateMap = L.map('map3').setView([40.18, -99.14], 3.4)
let basemapUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(StateMap)
let StateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(StateDemographicsUrl, function (data) {
	let StateStyle = function (feature) {
	  let population = feature.properties.POPULATION // get the current state's Median Age attribute
	  let StateColor = 'blue' // let the initial color be a darker green
	  if ( population < 2000000 ) { StateColor = 'pink' } // if the state's median age is less than the average, color it a lighter green
	  return {
	    color: StateColor, //use the color variable above for the value
	    weight: 1.5,
	    fillOpacity: 0.5
	  }
	}
	let onEachFeature = function (feature, layer) {
	     let name = feature.properties.STATE_NAME
	     let population = feature.properties.POPULATION
	     layer.bindPopup('2016 Population of ' + name + ': ' + population + '<br>Compared to Population of: 2,000,000')
   }
	let geojsonOptions = {
style: StateStyle,
onEachFeature: onEachFeature
 }
	L.geoJSON(data, geojsonOptions).addTo(StateMap)
})
