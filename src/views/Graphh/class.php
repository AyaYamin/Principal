
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
$link = mysqli_connect("localhost", "root", "", "project_new");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$payload = file_get_contents('php://input');
$input = json_decode($payload, true);


//$param1=$_GET['param1'];
//$param2=$_GET['param2'];
$sql="SELECT level FROM class";


$myArray = array();

if ($result = $link->query($sql)) {
 
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
     // echo $result;
        
        $myArray[] = $row;    
    }
    echo json_encode($myArray);
}

mysqli_close($link);
?>