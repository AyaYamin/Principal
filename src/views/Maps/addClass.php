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

//if($input['level'] && $input['id_class'] ){

    $level=$input['level'];
    $id=$input['id_classs'] ;


$sql = "INSERT INTO class(level,id_class) VALUES ('$level','$id')";
echo $sql;
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";
    $input['level']=' ';
    $input['id_classs']=' ' ;
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}


//}
?>