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



$conn = new mysqli($servername, $username, $password, "project_new");


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}


$payload = file_get_contents('php://input');
$input = json_decode($payload, true);

$passs="SELECT password FROM principal ";


$id=$input['id'];

$city = $input['city'];
$add = $input['address'];
$phone = $input['phone'];

$old_password=$input['pwd'];
$old=SHA1($old_password);

$new_password=$input['new_pwd'];
$con_password=$input['ConfirmPassword'];
$new_password_d=SHA1($new_password);

$result = mysqli_query($conn,"SELECT password FROM principal WHERE id='$id'");

$r= mysqli_fetch_assoc($result);
if($r['password'] != $old){
   echo "You entered an incorrect password";
}else if(!$r['password'])
{
echo "The username you entered does not exist";
}



if($new_password==$con_password)
$sql=mysqli_query($conn,"UPDATE principal SET password='$new_password_d', city='$city', address='$add' ,phone='$phone' where id='$id'");

if($sql)
{
echo "Congratulations You have successfully changed your password";
}
else
{
echo "Passwords do not match";
}  


echo "done";
/*
    
if (mysqli_query($conn, $update_pwd)) {
    echo "Records updated successfully";
} else {
    echo "ERROR: Could not able to execute $update_pwd ".mysqli_error($conn);
}


*/


?>

       
        
      