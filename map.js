function initMap() {

    const uluru = { 
        lat: 42.65556409832706,
        lng: 21.16122570108263 
    };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;