$(document).ready(function() {
    var mymap = L.map('mapid').setView([-35.0047759,117.8897894], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZ3NncmFtbWFyIiwiYSI6ImNrMGFuOWZxdzBsYnYzbG1vNXNmY3M0cHoifQ.X7S1kk9MpszP0givbMrmwQ'
    }).addTo(mymap);

    url = "/api/api/poi/get_all";
    $.getJSON(url,function(xhr) {
        console.log(typeof xhr);
    }) ;
    

});