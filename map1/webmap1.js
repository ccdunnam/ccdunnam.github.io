let MyMap = L.map('map1').setView([32.18, -99.14], 4)
//L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(MyMap)
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(MyMap);
let NOLApoint = L.marker([21, -87]).addTo(MyMap)
let MyShape = L.polygon([[21,-87],[20,-81],[18,-84]]).addTo(MyMap);
let MyLine = L.polygon([[30,-90],[21,-87]]).addTo(MyMap);
NOLApoint.bindPopup('<em>Cancun</em>,Mexico')
MyShape.bindPopup('Clear Water <em>Polygon</em>')
MyLine.bindPopup('<em>Line</em> from NOLA to Cancun')
