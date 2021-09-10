<?php 
    header('Access-Control-Allow-Origin: *'); 
    //header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

    //header('Access-Control-Max-Age: 1000');
   // header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

    //header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    //header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header("Content-type: application/json; charset=utf-8");

    $host_name = 'mysql.peticlick.com';
    $database = 'apid_ev';
    $user_name = 'topdevapi';
    $password = 'Des@fioX2021';
  
    $conect = new mysqli($host_name, $user_name, $password, $database);
  
    if ($conect->connect_error) {
      die('<p>Error al conectar con servidor MySQL: '. $conect->connect_error .'</p>');
    }

?>