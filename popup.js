var popupLoader = function(){
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse){
			if(request.greeting == "hitest"){
				console.log(request.lawnchair);
				console.log("Popup received " + request.lawnchair.length + " searches");
			
			for(var i = 0; i <  request.lawnchair.length; i++){
				saved = request.lawnchair[i];
				var a = document.createElement('a');
				var linkText = document.createTextNode(saved.key);
				a.appendChild(linkText);
				a.href = saved.key;
				document.body.appendChild(a);
			}
		}
		}
	)
	console.log("popup loaded at least");
	chrome.extension.sendMessage({
		"greeting": "popup"
	})
};
document.addEventListener('DOMContentLoaded', popupLoader);
