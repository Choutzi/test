var bombs = [];

function dropBomb(radb){

	var pos = marker.getPosition();
	
	//LOADING THE PICTURES
	var iconExpl = 'Images/explosion.gif';
	var iconBomb = 'Images/bomb.png';
	
	//GET THE BOMB LOCATION
	var markerBomb = new google.maps.Marker({
		draggable: false,
		position: pos,
		map: map,
		icon: iconBomb
	});
	
	//CREATING THE BOMB OBJECT
	var bomb = ({markerb: markerBomb, timeDetonation: 5000, radius: 100, damage: 1});
	
	
	//DRAW A RED CIRCLE
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
	
	//PUTTING A BOMB ON THE GROUND REMOVES ONE OF YOUR BAG
	player.numberBomb=player.numberBomb-1;
	
	//BOMB TIMER 
	setTimeout(function(){
		markerBomb.setIcon(iconExpl);
		//TAKING OUT THE BOMB
		setTimeout(function(){
			markerBomb.setMap(null);
			radiusBomb.setMap(null);
		}, 1800);
		
		//ADDING A NEW BOMB TO THE BOMB CARRYING CAPACITY
		player.numberBomb=player.numberBomb+1;
		
		//IF THE PLAYER IS IN A BOMB RADIUS , HE LOSES A LIFE
		var posPlayer = marker.getPosition();
		if(google.maps.geometry.spherical.computeDistanceBetween(posPlayer, pos)<= bomb.radius){
			looseHealth(player, bomb.damage);
		}
		
	}, bomb.timeDetonation);
	

}
