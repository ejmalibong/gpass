<?php 
    include ('data.php');

    $query = "SELECT emp_full,emp_pass,emp_code,empt_dept,emp_pos FROM update_employees";

    $result = $conn->query($query);
    if (!$result){
        die('Query Not Found: ' .mysqli_error($conn));
    }

    $data = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $data[] = $row; // Adjust 'column_name' to match your table structure
      }
    }
    
    $conn->close();
    
    // Send the data as JSON response
    header("Content-Type: application/json");
    echo json_encode($data);
    ?>