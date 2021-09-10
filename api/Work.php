<?php

require 'conex.php';

function utf8_converter($array){
        array_walk_recursive($array, function(&$item, $key){
            if(!mb_detect_encoding($item, 'utf-8', true)){
                $item = utf8_encode($item);
            }
        }); 
        return $array;
}

$resultArray = array();

$sql = "SELECT * FROM `work` order by orden";


$querySer = $conect->query($sql);
$i=0;
foreach( $querySer as $work){
    $resultArray[] = utf8_converter($work); 
    $id=$work['id'];
    $sqlChild = "SELECT  * FROM workimg  WHERE  id_Work=$id order by orden";
    $res =  $conect->query($sqlChild);
    $lsImg=array();
    
    foreach ($res as $vl) {
        $lsImg[]=utf8_converter($vl);
    }
    $resultArray[$i]['imgurls']=$lsImg;
    $i++;
}
echo json_encode($resultArray);

//echo 'null';

?>

