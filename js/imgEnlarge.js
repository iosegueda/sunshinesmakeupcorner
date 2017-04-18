
window.addEventListener("load", startImgEnlarge, false);
function startImgEnlarge(){
	var amtImages = 5;

	var thumb = new Array(amtImages);
	var elem;
	

	for(var i = 0; i < amtImages; i++)
	{
		elem = "thumb" + String(i+1);
		thumb[i] = document.getElementById(String(elem));
	}
	for(var i = 0; i < amtImages; i++)
	{
		thumb[i].addEventListener("mouseover", function(){
			enlarge(this);
		});
	}
}
function enlarge(small){
	var big = small.src.split("_small")[0] + ".jpg";
	document.getElementById("enlarged").src = big;
}