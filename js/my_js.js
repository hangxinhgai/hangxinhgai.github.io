window.onload = function() {
  //var context = new AudioContext();
  // Setup all nodes
  // ...
  document.getElementById("beep").pause();
	document.getElementById('beep').muted = false;
	document.getElementById("beep").play();
}
 
 
 var promise = document.querySelector('beep').play();

if (promise !== undefined) {
    promise.then(_ => {
        // Autoplay started!
    }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
    });
}