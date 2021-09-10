<?php

require 'conex.php';

$resultArray = array();

$isMovil = $_GET['mobil'];

if($isMovil){
    $sql = "SELECT * FROM covers where mvideo=1 order by orden";
} else {
    $sql = "SELECT * FROM covers order by orden ";
}



$querySer = $conect->query($sql);
$i=0;
foreach( $querySer as $lab){
    $resultArray[] = $lab;  
}
echo json_encode($resultArray);

?>

