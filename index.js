const map = L.map("map").setView([-27.063909, -52.631325],17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
  maxZoom: 19,
  attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-27.064, -52.631285]).addTo(map);
var circle = L.circle([-27.063825,-52.631385], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100
}).addTo(map);
var polygon = L.polygon([
  [-27.063825, -52.6313],
  [-27.064201, -52.6300],
  [-27.064295, -52.6313]
]).addTo(map);

marker.bindPopup("I am a marker popup.");
circle.bindPopup("I am a circle");
polygon.bindPopup("I am a polygon");
var popup = L.popup()
  .setLatLng([-27.0639, -52.633])
  .setContent("I am standalone popup.")
  .openOn(map);

function onMapClick(e){
  popup.setLatLng(e.latlng);
  popup.setContent("You clicked the map at " + e.latlng)
  popup.openOn(map);
}
map.on("click", onMapClick);