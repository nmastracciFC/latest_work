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
	<style type="text/css">
		body {
			color: #555;
			font-family: 'oswaldextralight', sans-serif;

		}
	</style>
</head>
<body>
	<h1>Thank you for your email, <?php echo $name ?></h1>
	<h2>you can expect a response within two days.</h2>
	<!-- <h2>Did you see my portfolio? Return to <a href="index.php">NatalieMastracci.com</a></h2> -->
	<h2>Did you see my portfolio? Return to <a href="index.php">NatalieMastracci.com</a></h2>

	
</body>
</html>