// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {


let launchForm = this.document.getElementById("launchForm"); 
let pilotName = this.document.querySelector("input[name = pilotName]");
let fuelLevel = this.document.querySelector("input[name = fuelLevel]");
let cargoMass = this.document.querySelector("input[name = cargoMass]");
let copilotName = this.document.querySelector("input[name = copilotName]");
let faultyItems = this.document.getElementById("faultyItems");
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = this.document.getElementById("copilotStatus");
let fuelStatus = this.document.getElementById("fuelStatus");
let cargoStatus = this.document.getElementById("cargoStatus");
   console.log(faultyItems);
   
   
   this.console.log("yep");


launchForm.addEventListener("submit", function() {
   event.preventDefault();
   // pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
   
   if (isNaN(fuelLevel.value)) {
      alert("Please enter a number.");
   }

   if(isNaN(cargoMass.value)) {
      alert("Please enter a number.");
   }
   
   if(fuelLevel.value < 10000) {
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
      copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready.`;
      fuelStatus.innerHTML = "Fuel level too low for launch.";
   } 
   
   if(cargoMass.value > 10000) {
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
      copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready.`;
      cargoStatus.innerHTML = "Cargo mass too high for launch.";
   }
   
   
   
   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value ==="") {
      alert("All fields required!");   
   }

   });
});

