var popupLoader = function(){
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse){
			//console.log(request.greeting + " is the greeting for poplistener");
			if(request.greeting == "hitest"){
				console.log("#######received test URL from background page");
				alert("received test URL");
			}
		}
	)
	console.log("popup loaded at least");
	chrome.extension.sendMessage({
		"greeting": "popup"
	})
};
document.addEventListener('DOMContentLoaded', popupLoader);
