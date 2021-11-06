let timer = setInterval(function() {
  //btn_ok();

}, 1000);
 
  function btn_ok() {
       
			 document.getElementById("beep").pause();
			 document.getElementById('beep').muted = false;
			  
            document.getElementById("beep").play();
             
 };