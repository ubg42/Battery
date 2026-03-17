navigator.getBattery().then(function(battery) {

  function updateBattery() {
    let percent = Math.round(battery.level * 100);

    document.getElementById("level").style.width = percent + "%";
    document.getElementById("percentText").textContent = percent + "%";

    let levelDiv = document.getElementById("level");
    if (percent > 50) levelDiv.style.background = "limegreen";
    else if (percent > 20) levelDiv.style.background = "orange";
    else levelDiv.style.background = "red";
  }

  updateBattery();
  battery.addEventListener("levelchange", updateBattery);
});
