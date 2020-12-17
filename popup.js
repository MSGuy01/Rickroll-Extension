var sendToContent = function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	    console.log("reloaded");
	  });
	});
}

var changeText = function() {
	if (localStorage.getItem("on") == "off") {
		document.getElementById("status").innerHTML = "Extension is: off";
		document.getElementById("change").innerHTML = "Turn on";
	}
	else {
		document.getElementById("status").innerHTML = "Extension is: on";
		document.getElementById("change").innerHTML = "Turn off";
	}
}
changeText();
document.getElementById("change").addEventListener("click", function() {
	console.log("clicked");
	 var port = chrome.extension.connect({
      name: "Sample Communication"
	 });
	 port.postMessage("Hi BackGround");
	 port.onMessage.addListener(function(msg) {
	      console.log("message recieved" + msg);
	      changeText();
	 });
	 sendToContent();
});
