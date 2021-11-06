window.onload = function() {
  //var context = new AudioContext();
  // Setup all nodes
  // ...
  document.getElementById("beep").pause();
	document.getElementById('beep').muted = false;
	//document.getElementById("beep").play();
}
 
 
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }