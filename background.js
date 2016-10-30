var pandoraIsOpen = false;
var playing = true;

chrome.commands.onCommand.addListener(function(command){
	if (command == 'play-pause'){

		if(pandoraIsOpen){
			pushPlayPauseButton();
		}
	}

	if (command == "next-track"){
		pushNextButton();
	}

});

function pushPlayPauseButton() {
	    chrome.tabs.query({url: "*://www.pandora.com/*"}, function(tabs) {
	    	chrome.tabs.executeScript(tabs[0].id, {file: "pushPlayPauseButton.js"});
	});
};

function pushNextButton() {
	    chrome.tabs.query({url: "*://www.pandora.com/*"}, function(tabs) {
	    	chrome.tabs.executeScript(tabs[0].id, {file: "pushSkipButton.js"});
	});
};

function checkPandora() {
	chrome.tabs.query({url: "*://www.pandora.com/*"}, function(tabs){
		bkg.console.log("pandora is being checked!!!");

		if (tabs.length > 0){
			pandoraIsOpen = true;
			bkg.console.log("yes!!!! pandora open");
		}
		else {
			pandoraIsOpen = false;
			bkg.console.log("no pandora open :( ");
		}
	}); 
};

// runs on extension startup
checkPandora();

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	checkPandora();
});

chrome.tabs.onRemoved.addListener(function(){
	checkPandora();
});