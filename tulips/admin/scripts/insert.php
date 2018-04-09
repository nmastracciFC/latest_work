<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
require_once("connect.php");
require_once("config.php");


if (isset($_POST['name'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$street = $_POST['street'];
	$direct = "../../thankyou.php";
	
	if($street === ""){
		$querysert = "INSERT INTO visitors (visitors_name, visitors_email, visitors_message) VALUES ('$name', '$email', '$message')";
		$postit = $link->query($querysert);
		$sendMail = submitMessage($name, $email, $message, $direct);
		
		
	} 
}

?>