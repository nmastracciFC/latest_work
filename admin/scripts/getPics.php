<?php 
include('connect.php');
	//this is now connected

if(isset($_GET['allPics'])) {
$allPics = $_GET['allPics'];

$allPicsQ = "SELECT * FROM pieces p, likeness l WHERE p.pieces_id = l.piece_id AND p.pieces_id = '$allPics'";

$getAllPics = mysqli_query($link, $allPicsQ);

// var_dump($getAllPics);

$rows = array();

	while($row = mysqli_fetch_assoc($getAllPics)) {
		$rows[] = $row;
	}
echo json_encode($rows);
}

?>