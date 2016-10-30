function pushPlayPauseButton(){
	var playButton = document.getElementsByClassName("playButton")[0];
	
	if (playButton.style.display != "none"){
		playButton.click();
	}
	else {
		var pauseButton = document.getElementsByClassName("pauseButton")[0];
		pauseButton.click();
	}
}

pushPlayPauseButton();