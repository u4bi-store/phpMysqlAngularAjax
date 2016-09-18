<?php 
	require_once '../database/db.php';

	$sql = "select * from user_table order by id desc";

	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows($result) == 0)echo mysqli_error($conn);
	setJson($result);
	mysqli_close($conn);


	function setJson($temp){
		$jsonArray = array();

		while($row = mysqli_fetch_assoc($temp)){
			$jsonArray[$tick] = array('id'=>$row["id"], 'name'=>$row["name"], 'age'=>$row["age"]);
			$tick++;
		}
		echo json_encode($jsonArray);
	}
?>