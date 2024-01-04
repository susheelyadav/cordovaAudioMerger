var exec = require("cordova/exec");

var AudioMerger = {
	mergeAudioFiles: function (audioFiles, success, error, parallelMixing) {
		exec(success, error, "cordovaAudioMerger", "mergeAudioFiles", [
			audioFiles,
			parallelMixing,
		]);
	},
};

module.exports = AudioMerger;
