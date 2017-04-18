
var timestamp;
window.addEventListener("load", startClock, false);
function startClock(){
	timestamp = document.getElementById('time');
	refreshTime();
	setInterval("refreshTime()", 1000);
}
function refreshTime(){
	var now = new Date();	
	var h = now.getHours();
	var	m = now.getMinutes();
	var s = now.getSeconds();
	var	pm        = false;

	if(h > 11){
	   h = h - 12;
	   pm = true;
	}

	if(h == 0) h = 12;
	if(m.length == 1) m = '0' + m;

	timestamp.innerHTML = h + ':' + m + ':' + s + ' ' + (pm ? 'pm' : 'am');
}