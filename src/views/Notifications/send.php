
<?php
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');


$db = new mysqli("localhost", "root", "", "project_new");
if (!$db) die("database connection error");
$servername = "localhost";
$username = "root";
$password = "";
// Create connection
$conn = new mysqli($servername, $username, $password, "project_new");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}
$payload = file_get_contents('php://input');
$input = json_decode($payload, true);

$id = $input['id'];
$msg = $input['message'];



$sql = "INSERT INTO msg(id,msg) VALUES ('$id','$msg')";


$result = $conn->query($sql);



?>