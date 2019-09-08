$(document).ready(function() {
    var mymap = L.map('mapid').setView([-35.0047759,117.8897894], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZ3NncmFtbWFyIiwiYSI6ImNrMGFuOWZxdzBsYnYzbG1vNXNmY3M0cHoifQ.X7S1kk9MpszP0givbMrmwQ'
    }).addTo(mymap);

    json = {
        "recordsFound": 1,
        "records": [{
            "id": 2,
            "type": "BUISS",
            "name": "Albany Public Library",
            "lat": -35.0230447,
            "lon": 117.8810094,
            "time": "2019-09-08 10:03:10"
        }]
    };

    $.getJSON("/api/api/poi/get_all",function(json) {
        for (j in json) {
            poi = json[j];

            var marker = L.marker([poi.lat, poi.lon]).addTo(mymap);
            marker.bindPopup("<b><i class='fa fas-building'></i> " + poi.name + "</b><br /><i>1 recommendation found</i><br /><ul><li><u>Owen B</u> (<i class='fa fas-thumbs-up'></i> 3 people found this helpful)</li></ul>");
        }
    });

});