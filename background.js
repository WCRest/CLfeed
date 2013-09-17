//load lawnchair storage w/ dummy/testing callback
//that just logs to console
var searches = new Lawnchair(function(){
console.log("background loaded");
});

var buttonListener = function(request, sender, sendResponse) {
if (request.greeting == "savesearch"){
    	toSave = {key:request.URL}; 
    	searches.save(toSave);
    	searches.each(function(r){
    		console.log(r)
    	});
 		 }
  else {
    sendResponse({});    // Stop
  }
};
var newListener = buttonListener.bind(this)
chrome.extension.onMessage.addListener(newListener);
	