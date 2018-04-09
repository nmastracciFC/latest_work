<?php
function redirect_to($location){
	if($location != NULL) {
		header("Location: {$location}");
		exit;
	}

}



function submitMessage($name, $email, $message, $direct) {
	$to = "nmastracci@gator4091.hostgator.com"; //who the email is going to ALWAYS hosting
	$subj = "Message from Portfolio Form"; //this prevents it from looking like spam
	$extra = "Reply-To: ".$email; //gives you the email to respond to. Click it in the body of the email to be able to respond to the person and not to yourself. Do not click reply it will email yourself.
	$msg = "name: ".$name."\n\nEmail: ".$email."\n\nComments: ".$message;
	//\n\n is a line break <br>
	mail($to, $subj, $msg, $extra); //order matters $extra does not matter
	$direct = $direct."?name={$name}";
	redirect_to($direct);
}





?>