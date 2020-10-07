document.getElementById("change").addEventListener("click", function() {
	if (! localStorage.getItem("on") || localStorage.getItem("on") == "on") {
		document.getElementById("change").innerHTML = "Turn On";
		localStorage.setItem("on", "off");
	}
	else{
		document.getElementById("change").innerHTML = "Turn Off";
		localStorage.setItem("on", "on");
	}
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {greeting: localStorage.getItem("on")}, function(response) {
	    console.log(response.farewell);
	  });
	});
});
