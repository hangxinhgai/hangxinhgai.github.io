window.onload = function() {
  //var context = new AudioContext();
  // Setup all nodes
  // ...
    document.getElementById("beep").pause();
	document.getElementById('beep').muted = false;
	document.getElementById("beep").play();
}
 
  function btn_ok() {
       
			 document.getElementById("beep").pause();
			 document.getElementById('beep').muted = false;
			  
            document.getElementById("beep").play();
             
 };