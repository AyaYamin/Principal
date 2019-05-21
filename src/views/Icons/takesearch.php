
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: token, Content-Type');

$db = new mysqli("localhost","root","","project_new");
if(!$db) die("database connection error");

$servername = "localhost";
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password,"project_new");


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo "<br>";
}else{
  echo "Connected successfully";
  echo "<br>";
} 




$payload = file_get_contents('php://input');
$input = json_encode($payload, TRUE);

$search=$input['search'];
$sql ="SELECT * FROM teacher where id='$search'";

json_encode($myArray);
$myArray = array();

if ($result = $link->query($sql)) {
   
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        
        $myArray[] = $row;    
        
    }
    echo json_encode($myArray);
}


echo "<br>";
echo $sql;
if(mysqli_query($conn, $sql)){
    echo "<br>";
    echo "Records added successfully.";
    echo "<br>";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
    echo "<br>";
}
 


?>