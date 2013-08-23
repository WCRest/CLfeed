buttonLocation = document.getElementById("searchtable").childNodes[1];
var btn = document.createElement("BUTTON");
var t = document.createTextNode("Supersave");
btn.appendChild(t);
btn.onclick = function(){
	chrome.extension.sendRequest({
  	"greeting": "savesearch",
  	"URL": document.URL, 
}); 
};
document.getElementById("searchtable").childNodes[3].appendChild(btn);