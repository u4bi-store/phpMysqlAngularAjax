<?php
	$num = $_GET["p_id"]; 

	require_once '../database/db.php';
	$sql = "select * from user_table where id=".$num;

	$result = mysqli_query($conn, $sql);
	if (!$result) echo mysqli_error($conn);
	setJson($result);
	mysqli_close($conn);


	function setJson($temp){
		$row = mysqli_fetch_assoc($temp);
		$json = array('id'=>$row['id'], 'name'=>$row['name'], 'pwd'=>$row["pwd"]);
		echo json_encode($json);
	}
?>