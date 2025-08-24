addEventListener("keydown", e => {
	if (e.key != "]") {
		return;
	}

	for (const v of document.querySelectorAll("video")) {
		if (v.playbackRate == 1) {
			v.playbackRate = 2;
		} else {
			v.playbackRate = 1;
		}
	}
});
