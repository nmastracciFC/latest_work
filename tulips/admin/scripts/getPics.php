<?php 

include('connect.php');

if(isset($_GET['allPics'])) {
$allPics = $_GET['allPics'];

$allPicsQ = "SELECT p.pieces_name, p.pieces_desc, GROUP_CONCAT(l.likeness_path), l.likeness_name, c.cat_name FROM pieces p, likeness l, cat c WHERE p.pieces_id = l.piece_id AND c.cat_id = l.cat_id GROUP BY p.pieces_name";

$getAllPics = mysqli_query($link, $allPicsQ);

$rows = array();

	while($row = mysqli_fetch_assoc($getAllPics)) {
		$rows[] = $row;
	}
echo json_encode($rows);
}

?>