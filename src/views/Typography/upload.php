
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: token, Content-Type');

$db = new mysqli("localhost","root","","project_new");
if(!$db) die("database connection error");

$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password,"project_new");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "Connected successfully";
} 

//if(isset($_POST["Import"])){
    $payload = file_get_contents('php://input');

$filename=$_FILES["file"]["tmp_name"];		
if($_FILES["file"]["size"]){
	$file = fopen($filename, "r");
	 while (($getData = fgetcsv($file, 10000, ",")) !== FALSE) {
        $sql = "INSERT into student (name, id,classid,date ,password,part_id,parn_pass,addresss,phone) 
            values ('".$getData[0]."','".$getData[1]."','".$getData[2]."','".$getData[3]."','".$getData[4]."','".$getData[5]."','".$getData[6]."'
                   ,'".$getData[7]."','".$getData[8]."')";
        $result = mysqli_query($con, $sql);
		if(!isset($result))	echo "failed";		
	
				else {
					  echo "CSV File has been successfully Imported";
						
				}
	         }
			
	         fclose($file);	
         }
        
 
 
 ?>