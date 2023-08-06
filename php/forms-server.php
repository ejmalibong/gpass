<?php
//initialize db info
$server = 'localhost';
$username = 'root';
$password = '';
$db_name = 'master_database';

//attempt to connect to the database
$conn = mysqli_connect($server, $username, $password, $db_name);

//connection check
if (!$conn) {
    die("Error: can't connect to the server" . mysqli_connect_error());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_string = file_get_contents('php://input');
    $data = json_decode($json_string, true);

    if ($data !== null) {
        // Access the individual values in the $data array
        $id_num = $data['id_nums'];
        $em_name = $data['em_names'];
        $dept_name = $data['dept_names'];
        $date_create = date('Y-m-d'); // Assuming you want to insert the current date as 'date_create'
        $date_trip = $data['date_trip'];
        $em_names = $data['em_names'];
        $res = $data['res'];
        $time_from = $data['time_from'];
        $time_to = $data['time_to'];
        $car_sel = $data['car_sel'];
        $locate = $data['locate'];
        $arra = $data['arra'];
        $prep = $data['prep'];
        $imm_super = $data['imm_super'];
        $dept = $data['dept'];
        $ackno = $data['ackno'];
        $car_status = $data['car_status'];
        $imm_status = $data['imm_status'];
        $dept_status = $data['dept_status'];
        $ack_status = $data['ack_status'];

        // Prepare and execute the INSERT statement
        $stmt = $conn->prepare("INSERT INTO gate_pass ( date_create, date_trip, id_num, em_name, dept_name, reason, time_input, 
        time_input2, car_select, locate, arrangement, prepare, immediate, department, 
        acknowledge, car_status, imm_status, dept_status, ack_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $id_combined = implode(',', $id_num);
        $em_names_combined = implode(',', $em_names);
        $dept_combined = implode(',' , $dept_name);
 

            $stmt->bind_param(
                "sssssssssssssssssss",
                $date_create,
                $date_trip,
                $id_combined,
                $em_names_combined,
                $dept_combined,
                $res,
                $time_from,
                $time_to,
                $car_sel,
                $locate,
                $arra,
                $prep,
                $imm_super,
                $dept,
                $ackno,
                $car_status,
                $imm_status,
                $dept_status,
                $ack_status
            );

            if ($stmt->execute()) {
                echo "Data inserted successfully.";
            } else {
                echo "Error inserting data: " . mysqli_error($conn);
            }
        

        $stmt->close();
    } else {
        // Invalid JSON data
        echo "Error decoding JSON.";
    }
}

$conn->close();
?>
