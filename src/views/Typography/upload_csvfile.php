<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: token, Content-Type');

$servername = "localhost";
$username = "root";
$password = "";


$conn = new mysqli($servername, $username, $password,"project_new");

var_dump($_FILES);
$filepath=$_FILES["file"]["name"];
$filename=$_FILES["file"];


echo file_get_contents($_FILES['file']['tmp_name']); 
$file=file_get_contents($_FILES['file']['tmp_name']);



//while(!feof($file)){
  // !feof($myfile)
   //flush();
   //while ( (!feof($file,1000))!==false)
  // {


   foreach(preg_split("/((\r?\n)|(\r\n?))/",$file) as $line){
     
      $emapData;
      $emapData = explode(",", $line);
      list ($name, $mname, $lname, $id,$level, $classid, $date, $part_id, $addresss, $phone) = $emapData;
      print_r($emapData);
      $sql = "INSERT into  student(name,mname,lname, id,level,classid,date ,part_id,addresss,phone) 
      values ('$name','$mname','$lname',' $id','$level','$classid','$date' ,'$part_id','$addresss','$phone')";
      mysqli_query($conn,$sql);
  
   }
 
  
  
  // if($emapData==''){
    //  $emapData= explode("\n",$file); 
  // }
 

          
         
            echo "\n";
      //  }
         echo "CSV File has been successfully Imported.";


?>
