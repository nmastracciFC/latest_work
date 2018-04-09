<?php
function redirect_to($location){
	if($location != NULL) {
		header("Location: {$location}");
		exit;
	}

}



function submitMessage($name, $email, $message, $direct) {
	$to = "nmastracci@gator4091.hostgator.com"; 
	$subj = "Message from Portfolio Form"; 
	$extra = "Reply-To: ".$email; 
	$msg = "name: ".$name."\n\nEmail: ".$email."\n\nComments: ".$message;
	
	mail($to, $subj, $msg, $extra); 
	// $direct = $direct."?name={$name}";
	redirect_to($direct);
}





?>