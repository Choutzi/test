var bombs = [];
function dropBomb(){

	var pos = marker.getPosition();
	
	var iconExpl = 'Images/explosion.gif';
	var iconBomb = 'Images/bomb.png';
	
	var markerBomb = new google.maps.Marker({
		draggable: false,
		position: pos,
		map: map,
		icon: iconBomb
	});
	
	var bomb = {markerb: markerBomb, timeDetonation: 5000, radius: 100};
	
	var radiusBomb = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: {lat: pos.lat(), lng: pos.lng()},
        radius: bomb.radius
    });
	
	bombs.push(bomb);
	
	setTimeout(function(){
		markerBomb.setIcon(iconExpl);
		
		setTimeout(function(){
			markerBomb.setMap(null);
			radiusBomb.setMap(null);
		}, 1800);
	}, bomb.timeDetonation);

}

