        
 var newUser, users, mapquest, firstUser, secondUser, thirdUser;
 
 newUser, secondUser, thirdUser = new L.LayerGroup();
 
 users = new L.MarkerClusterGroup({spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: true});
 
 mapquest = new L.TileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
 maxZoom: 18,
 subdomains: ["otile1", "otile2", "otile3", "otile4"],
 attribution: 'Easymaps Inc.'
 });

 //map = L.map('map').setView([-41.2858, 174.78682], 14);
 map = new L.Map('map', {
     center: new L.LatLng(39.90973623453719, -93.69140625),
     zoom: 8,
     layers: [mapquest, users, newUser, firstUser, secondUser, thirdUser]
 });

 mapLink = 'My OpenStreetMap';
 L.tileLayer(
     'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 18,
     }).addTo(map);
 
 var marker = L.marker([-41.29040, 174.78218])
     .addTo(map)
     .bindPopup("<b>Te Papa</b><br>Museum of New Zealand.")
     .openPopup();
 

 L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(firstUser),
 L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(secondUser),
 L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(secondUser),
 L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(thirdUser);


 // Initialise the FeatureGroup to store editable layers
 //var drawnItems = new L.FeatureGroup();
 //map.addLayer(drawnItems);


 var baseLayers = {
     "Homes": firstUser,
     "Lands": secondUser,
     "Landmarks": thirdUser
 };

 var overlays = {
     "Personal": newUser
 };

 L.control.layers(baseLayers, overlays).addTo(map);

 // Initialise the draw control and pass it the FeatureGroup of editable layers
 var drawControl = new L.Control.Draw({
     edit: {
         featureGroup: drawnItems
     }
 });
 map.addControl(drawControl);

 map.on('draw:created', function (e) {
     var type = e.layerType,
         layer = e.layer;

     if (type === 'marker') {
         layer.bindPopup('A popup!');
     }
     drawnItems.addLayer(layer);
 });

 ap.on('contextmenu', function(e) {
     var markerLocation = new L.LatLng(e.latlng.lat, e.latlng.lng);
     marker = new L.Marker(markerLocation);
     newUser.clearLayers();
     newUser.addLayer(marker);
     //alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
     var form =  '<form id="inputform" enctype="multipart/form-data" class="well">'+
       '<label><strong>Name:</strong> <i>marker title</i></label>'+
       '<input type="text" class="span3" placeholder="Required" id="name" name="name" />'+
       '<label><strong>Email:</strong> <i>never shared</i></label>'+
       '<input type="text" class="span3" placeholder="Required" id="email" name="email" />'+
       '<label><strong>City:</strong></label>'+
       '<input type="text" class="span3" placeholder="Optional" id="city" name="city" />'+
       '<label><strong>Website:</strong></label>'+
       '<input type="text" class="span3" placeholder="Optional" id="website" name="website" value="http://" />'+
       '<input style="display: show;" type="text" id="lat" name="lat" value="'+e.latlng.lat.toFixed(6)+'" />'+
       '<input style="display: show;" type="text" id="lng" name="lng" value="'+e.latlng.lng.toFixed(6)+'" /><br><br>'+
       '<div class="row-fluid">'+
         '<div class="span6" style="text-align:center;"><button type="button" class="btn" onclick="cancelRegistration()">Cancel</button></div>'+
         '<div class="span6" style="text-align:center;"><button type="button" class="btn btn-primary" onclick="insertUser()">Submit</button></div>'+
       '</div>'+
       '</form>';
       marker.bindPopup(form).openPopup();
 });
 
 /draggable marker
  ar marker = L.marker([-41.29092, 174.78219],
 {
     draggable: true
 })
 addTo(map);
 
 .control.scale().addTo(map);
 map.attributionControl.setPrefix('<a href="http://www.Aqarholic.org/">Aqarholic</a>');

 // create fullscreen control
 var fullScreen = new L.Control.FullScreen();
 
 // add fullscreen control to the map
 map.addControl(fullScreen);

 // detect fullscreen toggling
 map.on('enterFullscreen', function(){
     if(window.console) window.console.log('enterFullscreen');
 });
 map.on('exitFullscreen', function(){
     if(window.console) window.console.log('exitFullscreen');
 });

 //Add collection
 var planes = [
 ["7C6B07",-40.99497,174.50808],
 ["7C6B38",-41.30269,173.63696],
 ["7C6CA1",-41.49413,173.5421],
 ["7C6CA2",-40.98585,174.50659],
 ["C81D9D",-40.93163,173.81726],
 ["C82009",-41.5183,174.78081],
 ["C82081",-41.42079,173.5783],
 ["C820AB",-42.08414,173.96632],
 ["C820B6",-41.51285,173.53274]
 ];
 /*
 var form =  '<form id="inputform" enctype="multipart/form-data" class="well">'+
       '<label><strong>Name:</strong> <i>marker title</i></label>'+
       '<input type="text" class="span3" placeholder="Required" id="name" name="name" />'+
       '<label><strong>Email:</strong> <i>never shared</i></label>'+
       '<input type="text" class="span3" placeholder="Required" id="email" name="email" />'+
       '<label><strong>City:</strong></label>'+
       '<input type="text" class="span3" placeholder="Optional" id="city" name="city" />'+
       '<label><strong>Website:</strong></label>'+
       '<input type="text" class="span3" placeholder="Optional" id="website" name="website" value="http://" />'+
       '<input style="display: none;" type="text" id="lat" name="lat" value="' + e.latlng.lat.toFixed(6) + "' />'"+
       '<input style="display: none;" type="text" id="lng" name="lng" value="' + e.latlng.lng.toFixed(6) + "' /><br><br>'"+
       '<div class="row-fluid">'+
         '<div class="span6" style="text-align:center;"><button type="button" class="btn" onclick="cancelRegistration()">Cancel</button></div>'+
         '<div class="span6" style="text-align:center;"><button type="button" class="btn btn-primary" onclick="insertUser()">Submit</button></div>'+
       '</div>'+
       '</form>';
 marker.bindPopup(form).openPopup();

 for (var i = 0; i < planes.length; i++) {
     marker = new L.marker([planes[i][1],planes[i][2]])
         //.bindPopup(planes[i][0])
         .bindPopup(form).openPopup()
         .addTo(map);
 }*/


 //Using GeoJSON in Leaflet Library
 var geojsonFeature = {
     "type": "Feature",
     "properties": {
         "name": "Coors Field",
         "amenity": "Baseball Stadium",
         "popupContent": "This is where the Rockies play!"
     },
     "geometry": {
         "type": "Point",
         "coordinates": [-104.99404, 39.75621]
     }
 };



 var baseballIcon = L.icon({
     iconUrl: 'baseball-marker.png',
     iconSize: [32, 37],
     iconAnchor: [16, 37],
     popupAnchor: [0, -28]
 });

 function onEachFeature(feature, layer) {
     var popupContent = "<p>I started out as a GeoJSON " +
             feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

     if (feature.properties && feature.properties.popupContent) {
         popupContent += feature.properties.popupContent;
     }

     layer.bindPopup(popupContent);
 }

 L.geoJson([bicycleRental, campus], {

     style: function (feature) {
         return feature.properties && feature.properties.style;
     },

     onEachFeature: onEachFeature,

     pointToLayer: function (feature, latlng) {
         return L.circleMarker(latlng, {
             radius: 8,
             fillColor: "#ff7800",
             color: "#000",
             weight: 1,
             opacity: 1,
             fillOpacity: 0.8
         });
     }
 }).addTo(newUser);


 L.geoJson(freeBus, {

     filter: function (feature, layer) {
         if (feature.properties) {
             // If the property "underConstruction" exists and is true, return false (don't render features under construction)
             return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
         }
         return false;
     },

     onEachFeature: onEachFeature

 }).addTo(map);

 var coorsLayer = L.geoJson(coorsField, {

     pointToLayer: function (feature, latlng) {
         return L.marker(latlng, {icon: baseballIcon});
     },

     onEachFeature: onEachFeature

 }).addTo(map);

 function cancelRegistration() {
 newUser.clearLayers();
 $('#map').css('cursor', '');
 map.removeEventListener('click', onMapClick);
 }