
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: token, Content-Type');

$db = new mysqli("localhost","root","","project_new");
if(!$db) die("database connection error");

$servername = "localhost";
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password,"project_new");

//$sql = "INSERT INTO teacher(fname,mname,lname, id,subject,city,phone ,address,DateBirth,level,section) VALUES ('$first_name','$Mid_name','$Last_name','$teacherid','$subject','$city','$phone','$address','$date','$check')";
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo "<br>";
}else{
  echo "Connected successfully";
  echo "<br>";
} 




$payload = file_get_contents('php://input');
$input = json_decode($payload, TRUE);

        $first_name =  $input['fname'];
        $mid_name=$input['mname'];
        $lname=$input['lname'];
        $studentid = $input['id_st'];


      $date = $input['DateofBirth'];
       /*   date_default_timezone_set('Europe/Warsaw');
        $d_current = date("Y/m/d", time());
        echo "current=".$d_current;
        echo "<br>";
        //$d2=date_create("1998-02-22");
        //$d2_1= date_format($d2,"Y/m/d");
        //echo $d2_1;
        echo "<br>";
        $diff = $d_current - $date;
        echo "diff=".$diff;
        
      */

      // $_POST[$input['level']]=$diff;
      
     

        $level=$input['sel_s'];

        $id = $input['id'];
        $p_id=$input['p_id'];
        $address=$input['address'];
        $phone=$input['phone'];
        $city=$input['city'];
       





// Attempt insert query execution
$sql = "INSERT INTO student(name,mname,lname, id,level,classid,date ,part_id,addresss,phone) VALUES ('$first_name','$mid_name' ,'$lname','$studentid','$level', '$id' ,'$date','$p_id','$address','$phone')";
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

