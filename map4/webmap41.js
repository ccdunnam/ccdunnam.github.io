let StateMap = L.map('map3').setView([40.18, -99.14], 3.4)
let basemapUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(StateMap)
let StateCrimeUrl = 'https://ccdunnam.github.io/map4/BatonRougeCrimeIncidents2018.geojson'
jQuery.getJSON(StateCrimeUrl, function (data) {
	let MarkerStyle = function (feature) {
	  let crime = feature.properties.CRIME // get the current state's Median Age attribute
	  let MarkerColor = 'blue' // let the initial color be a darker green
	  if ( crime = homicide ) { MarkerColor = 'pink' } // if the state's median age is less than the average, color it a lighter green
	  return {
	    color: MarkerColor, //use the color variable above for the value
	    weight: 1.5,
	    fillOpacity: 0.5
	  }
	}
	let onEachFeature = function (feature, layer) {
	     let name = feature.properties.OFFENSE_DESCRIPTION
	     let crime = feature.properties.CRIME
	     layer.bindPopup('2016 Population of ' + offense_description + ': ' + crime + '<br>Compared to Population of: 2,000,000')
   }
	let geojsonOptions = {
style: MarkerStyle,
onEachFeature: onEachFeature
 }
	L.geoJSON(data, geojsonOptions).addTo(StateMap)
})
