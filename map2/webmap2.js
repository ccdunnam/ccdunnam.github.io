let WorldImageMap = L.map('map2').setView([40.18, -99.14], 3.5)
//L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(WorldImageMap)
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(WorldImageMap);
// L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
//   layers: 'nexrad-n0r-900913',
//   format: 'image/png',
//   transparent: true,
//   attribution: 'NOAA, Iowa State University'
// }).addTo(WorldImageMap)
// L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
//   layers: 'nexrad-n0r-900913',
//   format: 'image/png',
//   transparent: true,
//   attribution: 'NOAA, Iowa State University'
// }).addTo(WorldImageMap)
// L.esri.dynamicMapLayer({
//   url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer'
// }).addTo(WorldImageMap)
L.esri.featureLayer({
	url: 'https://services9.arcgis.com/SDQDNhpG8jikA0D1/arcgis/rest/services/Top_50_US_Cities_List/FeatureServer/0'
}).addTo(WorldImageMap)
L.esri.featureLayer({
	url: 'https://services9.arcgis.com/SDQDNhpG8jikA0D1/arcgis/rest/services/Higher_Education_US_2010_2014/FeatureServer/0'
}).addTo(WorldImageMap)
