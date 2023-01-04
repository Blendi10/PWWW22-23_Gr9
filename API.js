//GeolocationAPI

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

//Creating a web worker

  const worker = new Worker("timer.js");

// Listen for messages from the web worker
worker.addEventListener("message", event => {
  const elapsedTime = event.data;
  const elapsedTimeInSeconds = Math.round(elapsedTime / 1000);
  document.getElementById("elapsed-time").textContent = `Time spent on site: ${elapsedTimeInSeconds} seconds`;
});

// Start the timer when the page loads
worker.postMessage({type: "start"});

// Stop the timer when the user leaves the page
window.addEventListener("beforeunload", () => {
  worker.postMessage({type: "stop"});
});