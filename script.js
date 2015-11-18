var map = new L.Map('leaflet', {
  'center': [43.473095, -80.533393],
  'zoom': 14,

  'layers': [L.tileLayer('https://api.tiles.mapbox.com/v4/elwazirali.cih03mzr30wjjw9m5dvwwuua3/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWx3YXppcmFsaSIsImEiOiJjaWgwM24xMmUwd2U1NG1tM2VicmRyNmkzIn0._nNXvpfqsgwj30MP5bbr6A#4/43.70/-79.65')]
});

var secondCupInfo = '<img src="http://i.imgur.com/eVDArTV.jpg" class="images"><p>Second Cup</p>';
var williams = '<img src = "https://brandspiel.files.wordpress.com/2011/10/wfclogo.jpg" class="images"> <p>Williams</p>';
var coffeeCulture =  '<img src = "http://media-cdn.tripadvisor.com/media/photo-s/02/5c/41/1e/filename-mg-5833-jpg.jpg" class="images"> <p>Coffee Culture<br>Cafe&Eatery</p>';
var myIcon = L.divIcon({className:'fa fa-coffee fa-2x'},{html:'<i class="fa fa-coffee fa-2x"></i>'});
var content = function(description)
{
	return description;
}

var coordinates = function(lat,lng)
{
	return [lat,lng];
}
var coffePlace = function(lat,lng,description)
{
	return L.marker(coordinates(lat,lng),{icon:myIcon})
	.bindPopup(content(description))
	.addTo(map)
};

var secondCup = new coffePlace(43.472523,-80.5359252,secondCupInfo);
var Williams = new coffePlace(43.4720791,-80.5394689,williams);
var coffeeCultureCafeAndEatery = new coffePlace(43.465996, -80.522759,coffeeCulture);


/*new L.circleMarker([40.6804279, -122.37084190000002]).bindPopup(content, {'value':"hello"}).addTo(map)
new L.circleMarker([40.6804279, -122.37084190000002],{'color':'red'}).bindPopup(content).addTo(map)
new L.circleMarker([39.5624753,-121.45133140000002]).bindPopup(content).addTo(map)
new L.circleMarker([38.6779591,-121.17605830000002]).bindPopup(content, {'value': 977, 'value2': 15, 'value3': 1, 'value4': 30}).addTo(map)
*/


