
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: localStorage.getItem("on")});
  }
);

chrome.extension.onConnect.addListener(function(port) {
    console.log("Connected .....");
    port.onMessage.addListener(function(msg) {
        console.log("message recieved" + msg);
        if (localStorage.getItem("on") == "on") {
        	console.log("NOW OFF");
        	localStorage.setItem("on", "off");
        }
        else {
        	console.log("NOW ON");
        	localStorage.setItem("on", "on");
        }
        port.postMessage(localStorage.getItem("on"));
    });
})