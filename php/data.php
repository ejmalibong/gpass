<?php
    //initialize db info
    $server = 'localhost';
    $username = 'roots';
    $password = '';
    $db_name = 'master_database';

    //attempt to connect to the database
    $conn = (mysqli_connect($server,$username,$password,$db_name));

    //connection check
    if($conn==false){
        die("Error: can't connect to the server".mysqli_connect_error());
    }else{
    }
    
?>