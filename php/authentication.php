<?php 
    include ('data.php');
        $query = "SELECT * from update_employees";
        $result = mysqli_query($conn,$query);

        if (!$result){
            die('Query Not Found: ' .mysqli_error($conn));
        }

        $data1= array();

        while ($row = mysqli_fetch_assoc($result)) {    
            $data1[] = $row;
        }
        $response = $data1;
        
        header('Content-Type:application/json');
        echo json_encode($response);
        $conn->close();
?>