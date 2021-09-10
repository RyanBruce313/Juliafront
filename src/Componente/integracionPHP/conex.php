<?php 
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

    $host_name = 'localhost';
    $database = 'proyecto_julia';
    $user_name = 'root';
    $password = '';
  
    $conect = new mysqli($host_name, $user_name, $password, $database);
  
    if ($conect->connect_error) {
      die('<p>Error al conectar con servidor MySQL: '. $conect->connect_error .'</p>');
    }

?>