document.getElementById("check-button").addEventListener("click", function() {
    let speed = document.getElementById("speed-input").value;

    const speedLimit = 70;
    const kmPerPoint = 5;

    let output;
    if (speed < speedLimit + kmPerPoint) {
      output = "Ok";
    } else {
      let points = Math.floor((speed - speedLimit) / kmPerPoint);
      if (points >= 12) {
        output = "License suspended";
      } else {
        output = "Points: " + points;
      }
    }

    document.getElementById("output2").textContent = output;
  });
  
  checkSpeed(69);