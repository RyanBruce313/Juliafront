<?php

require 'conex.php';

$resultArray = array();

$mobil = $_GET['mobil'];

$orderBy = ($mobil) ? 'orden_movil' : 'orden';

$sql = "SELECT * FROM laboratories order by ".$orderBy;

$querySer = $conect->query($sql);
$i=0;
foreach( $querySer as $lab){
    $resultArray[] = $lab;  
}
echo json_encode($resultArray);

?>

