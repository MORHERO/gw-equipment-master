<?php
include './db.php';

if(isset($_GET['task'])) {
	//$p_uid = (isset($_GET['uid'])) ? $_GET['uid'] : '';
	$p_task = (isset($_GET['task'])) ? $_GET['task'] : '';
	//$p_data = (isset($_GET['data'])) ? $_GET['data'] : '';
	
	$new_data = '';
	/*if($p_data != '' && $p_task == 'save_character_by_uid') {
		$new_data = $p_data;
	}*/

	// Create connection
	$db_conn = new mysqli($db_servername, $db_username, $db_password, $db_name);

	// Check connection
	if ($db_conn->connect_error) {
		die("Connection failed: " . $db_conn->connect_error);
	}
	//echo "Connected successfully";

	$sql_query = [
		'get_items' => "SELECT * FROM gw_items",
		'get_item_types' => "SELECT uid, title FROM gw_item_types WHERE entry_hidden != '1'"
	];

	$sql_result = $db_conn->query($sql_query[$p_task]);
	if ($sql_result->num_rows > 0) {
		$return_array = array();
		// output data of each row
		while($row = $sql_result->fetch_assoc()) {
			//var_dump($row);
			array_push($return_array, $row);
		}
		echo(json_encode($return_array));
	} else {
		echo "0 results";
	}

	$db_conn->close();
} else {
	echo("Connection failed: No Task set");
	return;
}


?>