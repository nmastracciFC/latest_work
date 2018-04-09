<?php
	// $user = "nmastrac_alexand";
	// $pass = "PotatoTomato4$";
	// $url = "gator4091.hostgator.com";
	// $db = "nmastrac_db_nammie";
	$user = "root";
	$pass = "root";
	$url = "localhost";
	$db = "db_nammie";

	$link = mysqli_connect($url, $user, $pass, $db); 

	if(mysqli_connect_errno()) {
		printf("Connection Failed: %s\n", mysqli_connect_error());
		exit();
	}

	



?>