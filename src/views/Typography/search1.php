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

// Attempt select query execution
$search=$input['search'];
//where id='$search'
$sql = "SELECT * FROM student";

$myArray = array();

if ($result = $link->query($sql)) {
   
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        
        $myArray[] = $row;    
        
    }
    echo json_encode($myArray);
}
//if($result = mysqli_query($link, $sql)){
    //if(mysqli_num_rows($result) > 0){
        // echo "<table>";
        //     echo "<tr>";
        //         echo "<th>fname</th>";
        //         echo "<th>mname</th>";
        //         echo "<th>lname</th>";
        //         echo "<th>id</th>";
        //         echo "<th>subject</th>";
        //         echo "<th>city</th>";
        //         echo "<th>phone</th>";
        //         echo "<th>address</th>";
        //         echo "<th>DateBirth</th>";
        //     echo "</tr>";
        //while($row = mysqli_fetch_array($result)){
            //$myArray[] = $row;
            // echo "<tr>";
            //     echo "<td>" . $row['fname'] . "</td>";
            //     echo "<td>" . $row['mname'] . "</td>";
            //     echo "<td>" . $row['lname'] . "</td>";
            //     echo "<td>" . $row['id'] . "</td>";
            //     echo "<td>" . $row['subject'] . "</td>";
            //     echo "<td>" . $row['city'] . "</td>";
            //     echo "<td>" . $row['phone'] . "</td>";
            //     echo "<td>" . $row['address'] . "</td>";
            //     echo "<td>" . $row['DateBirth'] . "</td>";
            // echo "</tr>";
        //}
        //echo "</table>";
        // Free result set
        //echo json_encode($myArray);
        //mysqli_free_result($result);
    //} else{
        //echo "No records matching your query were found.";
    //}
//}
 else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>