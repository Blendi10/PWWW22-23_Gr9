
let startTime;
let intervalId;

// Listen for messages from the main thread
self.addEventListener("message", event => {
  const {type} = event.data;

  if (type === "start") {
    startTime = Date.now();
    intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      self.postMessage(elapsedTime);
    }, 1000); // Send elapsed time every 1 second
  } else if (type === "stop") {
    clearInterval(intervalId);
  }
});