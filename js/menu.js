
var menu;
var items;
var curr;

window.addEventListener("load", menuScript, false);
function menuScript(){
	menu = document.getElementById("menu");
	items = [document.getElementById("menuHome"),document.getElementById("menuLips"),
				document.getElementById("menuNails"),document.getElementById("menuBrows"),
				document.getElementById("menuBlush"),document.getElementById("menuEyes"),
				document.getElementById("menuAbout"),document.getElementById("menuContact")];
	menu.addEventListener("mouseover", function(){
		for(var i = 0; i < items.length; i++){
			if (items[i].className == "active"){
				curr = i;
				deactivate(items[curr]);
			}
		}
	});
	menu.addEventListener("mouseout", function(){activate(items[curr])});
	
}
function deactivate(item){
	item.className = "";
}
function activate(item){
	item.className = "active";
}