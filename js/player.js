var player = ({life: 1 , firepower : 0 , numberBomb:1});

function playerbomb() {
	if(player.number_bomb>0) {
		dropBomb();
	}
}

function looseHealth(entity, damage){
	entity.life=entity.life-damage;
	console.log("Player a perdu "+damage+" point(s) de vie.");
	console.log(player);
}


	
