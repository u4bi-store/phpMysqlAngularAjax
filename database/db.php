<?php 
$dbHost = 'localhost';
$dbUser = 'root';
$dbPass = '';
$dbName = 'u4bi';

$conn = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);
if (mysqli_connect_errno($conn)) echo mysqli_error($conn);

?>
