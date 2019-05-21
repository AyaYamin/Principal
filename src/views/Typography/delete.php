
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: http://localhost:3000');
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

$Last_name = $input['fname'];
$id = $input['id'];

$sql = "DELETE FROM student  WHERE id='$id' and  name='$Last_name'";
echo $sql;
if (mysqli_query($conn, $sql)) {
    echo "Records deleted successfully.";
} else {
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}




?>