<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: http://localhost:3000');
$link = mysqli_connect("localhost", "root", "", "project_new");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$payload = file_get_contents('php://input');
$input = json_decode($payload, true);

mysqli_select_db($link,'project_new');
$query=("SELECT * FROM teacher");

$result=mysqli_query($link,$query);
$row=mysqli_fetch_array($result);
//$id=$row['id'];

$ID=$_GET['id'];
echo $id;
mysqli_query($link,"DELETE from teacher WHERE id='$ID'");

    //echo "ERROR: Could not able to execute $qu. " . mysqli_error($link);
echo "done";
 
// Close connection
mysqli_close($link);
?>