
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
$link = mysqli_connect("localhost", "root", "", "project_new");
 
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$payload = file_get_contents('php://input');
$input = json_decode($payload, true);
$sql = "SELECT * FROM student"; 

    $result = mysqli_query($link,$sql);
    $row = $result->fetch_array(MYSQLI_ASSOC);
    $num_records = mysqli_num_rows($result);
    $numRec = array();
    if($num_records >= 0){
       $numRec[]=$num_records;
        echo json_encode($numRec,JSON_NUMERIC_CHECK);   
    }

mysqli_close($link);
?>






















































