
var amtAds = 4;
var ad = new Array(amtAds);
var n = 1;

for(var i = 0; i < amtAds; i++)
	ad[i] = new Image();

ad[0].src = "images/ad1.png";
ad[1].src = "images/ad2.png";
ad[2].src = "images/ad3.png";
ad[3].src = "images/ad4.png";
window.addEventListener("load", startAds, false);
function startAds(){
	setInterval("swapAds()", 5000);
}
function swapAds(){
	document.getElementById("bann").src = ad[n].src;
	n++;
	if(n>3) n = 0;
}