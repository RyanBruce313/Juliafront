<?php

require 'conex.php';

$resultArray = array();

$sql = "SELECT * FROM `work`";

$querySer = $conect->query($sql);
$i=0;
foreach( $querySer as $work){
    $resultArray[] = $work; 
    $id=$work['ID'];
    $sqlChild = "SELECT  * FROM workimg  WHERE  Id_WorkR=$id";
    $res =  $conect->query($sqlChild);
    $lsImg=array();
    foreach ($res as $vl) {
        $lsImg[]=$vl;
    }
    $resultArray[$i]['ImgUrls']=$lsImg;
    $i++;
}
echo json_encode($resultArray);

?>

