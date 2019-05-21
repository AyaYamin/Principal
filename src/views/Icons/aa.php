
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
$first_name = $input['fname'];
$Mid_name = $input['mname'];
$Last_name = $input['lname'];
$teacherid = $input['id_t'];
$city=$input['city'];
$date = $input['DateofBirth'];
$subject = $input['sub'];
$address = $input['address'];
$phone = $input['phone'];
//$myArray = array('a'=>$input[phone]);
// Attempt insert query execution
//$checked_count = count($_POST["check"]);
//echo "You have selected following ".$checked_count." option(s): <br/>";
$check=$input['check'];
echo "successfully uploaded!..";

$query=("SELECT * FROM class");
/*
$result=mysqli_query($conn,$query);
$row=mysqli_fetch_array($result);
$level=$row['level'];
$s=$row['id_class'];
echo $level;
echo $s;
//mysqli_query($conn,"INSERT into teacher WHERE level='$level' and section='$s'");
*/
$level=$_GET['level'];
$idC=$_GET['idC'];
//$ln=$_GET['ln'];
$sql = "INSERT INTO teacher(fname,mname,lname, id,subject,city,phone ,address,DateBirth,level,section) VALUES ('$first_name','$Mid_name','$Last_name','$teacherid','$subject','$city','$phone','$address','$date','$check')  ";
//mysqli_query($conn,$sql);

$result = $conn->query($query);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       $level= $row["level"];
       $id_class= $row["id_class"];
       $sql = "INSERT INTO teacher(fname,mname,lname, id,subject,city,phone ,address,DateBirth,level,section) VALUES ('$first_name','$Mid_name','$Last_name','$teacherid','$subject','$city','$phone','$address','$date','$level','$id_class')  ";
       mysqli_query($conn,$sql);
    }
} 


?>