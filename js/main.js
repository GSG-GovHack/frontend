$(document).ready(function() {
    var mymap = L.map('mapid').setView([-35.0047759,117.8897894], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZ3NncmFtbWFyIiwiYSI6ImNrMGFuOWZxdzBsYnYzbG1vNXNmY3M0cHoifQ.X7S1kk9MpszP0givbMrmwQ'
    }).addTo(mymap);

    names = ["Owen","James","Kelvin","Elinor","Kieran","Matt","Philip","Edward"];
    surnames = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    $.getJSON("/api/api/poi/get_all",function(json) {
        for (j in json) {
            poi = json[j];

            first = names[Math.floor(Math.random()*names.length)];
            surname = surnames[Math.floor(Math.random()*surnames.length)];
            likes = Math.floor(Math.random()*20);

            var marker = L.marker([poi.lat, poi.lon]).addTo(mymap);
            marker.bindPopup("<b><i class='fas fa-building'></i> " + poi.name + "</b><br /><i>1 recommendation found</i><br /><ul><li><u>" + first + " " + surname + ".</u> (<i class='fas fa-thumbs-up'></i> " + likes + " people found this helpful)</li></ul>");
        }
    });

});