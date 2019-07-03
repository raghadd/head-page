var InitDemo = function () {
	console.log('This is meee');

	var canvas = document.getElementById('floaty');

	var gl = canvas.getContext('webgl');

	if (!gl) {
		gl = canvas.getContext('experimental-webgl');
	}
	if (!gl) {
		alert('Your browser does not support WebgGL')
	}
};