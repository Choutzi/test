    var map;
	var marker;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			clickableIcons: false,
          zoom: 16
        });
		
		
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
		  
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
			
			var iconBase = 'Images/marker.png';
			marker = new google.maps.Marker({
			draggable: true,
			position: pos,
			map: map,
			icon: iconBase
			});
			
            map.setCenter(pos);
			
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } 
		
		else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
		
      }
	  

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' :'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
