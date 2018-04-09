<?php
// ini_set('display_errors', 1);
// error_reporting(E_ALL);
// require_once("connect.php");
$name = $_GET['name'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Thank you!</title>
	<link rel="stylesheet" type="text/css" href="prod/css/styles.css">
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
	<style type="text/css">
		body {
			color: #555;
			font-family: 'oswaldextralight', sans-serif;

		}
	</style>
</head>
<body>
	<div class="thankyou">
	<h1>Thank you for your email, <?php echo $name ?></h1>
	<h2>You can expect a response within two days.</h2>
	<!-- <h2>Did you see my portfolio? Return to <a href="index.php">NatalieMastracci.com</a></h2> -->
	<h2>Did you see my portfolio? Return to <a href="index.php">NatalieMastracci.com</a></h2>
	</div>
	
</body>
</html>