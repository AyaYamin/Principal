
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
$sql="SELECT point FROM grades  ";

$myArray = array();

if ($result = $link->query($sql)) {
 
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
     // echo $result;
        
        $myArray[] = $row;    
}
   // echo (int)$myArray;
  // $x=json_encode($myArray);
  // echo $x;
    echo json_encode($myArray,JSON_NUMERIC_CHECK );
    echo"<br />";
}

 else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
$num = "1000.314"; 
  
// Convert string in number using  
// number_format(), function 
//echo number_format($num), "\n"; 

// Close connection

$count_less_25=0;

$n=count($myArray);
//echo $n."<br>";
$result=array();
foreach ($myArray as $value) {
  $arr=implode($value);
  if($arr>=50)echo json_encode($arr)."<br>";

  echo "<br>";
  if($arr >=50){
    $count_less_25++; 
  }
}


echo $count_less_25."<br>";
mysqli_close($link);
?>