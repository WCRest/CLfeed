/*
Background.js 
1)listens for new saved searches via messages from a content script
2)stores searches and configuration data in JSON-based lawnchair.js
3)sends stored searches to popup script onload of popup.
*/
var searches = new Lawnchair({name:'searches', adapter:'dom'}, function(){ 
console.log("background loaded");
});

//Listens for messages from save button injected into Craigslist 
//search page. Messages contain a CL search to save. 
//Also listens from onload message from popup, and returns application
//data to be displayed in popup
var saveButtonListener = function(request, sender, sendResponse) {
if (request.greeting == "savesearch"){
    	toSave = {key:request.URL}; 
    	searches.save(toSave);
 		 }
else if(request.greeting == "popup"){
 	console.log("received message from popup");
 	searches.all(function(r){
		chrome.extension.sendMessage({
 			greeting:"hitest",
 			"lawnchair": r}); 
 	});
 }

  else {
    sendResponse({});    // Stop
  }
}.bind(this);

/*
//Listens from onload message from popup, and returns application
//data to be displayed in popup
var popupListener = function(request, sender, sendResponse) {
if(request.greeting == "popup"){
 	console.log("received message from popup");
 	searches.all(function(r){
		chrome.extension.sendMessage({
 			greeting:"hitest",
 			"lawnchair": r}); 
 	});
 }
  else {
    sendResponse({});    // Stop
  }
}.bind(this);
*/

chrome.extension.onMessage.addListener(saveButtonListener);
//chrome.extension.onMessage.addListener(popupListener);
	