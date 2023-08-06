<?php
include ('data.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the necessary parameters are set
    $sql;
    if (isset($_POST['id_count'])) {
        $idCount = $_POST['id_count'];  
        // Check which status is being updated (car_status, imm_status, or dept_status)
        if (isset($_POST['car_status'])) {
            $newStatus = $_POST['car_status'];
            $remark = $_POST['remark_app'];
            $columnName = 'car_status';
            if (strlen($remark)<2){
                $role = '';
            }else{
                $role = '-(Car Assignee)';
            }
            if ($newStatus == 'Approved'){
                if (strlen($remark)<2){
                    $role = '';
                }else{
                    $role = '-(Car Assignee)';
                }
                $sql = "UPDATE gate_pass SET car_status = 'Approved' ,remarks_approver = CONCAT(remarks_approver, '\r\n $remark \r\n $role') WHERE id='$idCount'";
            }else if($newStatus == 'Denied'){
                $sql = "UPDATE gate_pass SET driver = 'N/A', plate_no = 'N/A', depart = 'N/A', arrive = 'N/A', car_status = 'Denied',remarks_approver = CONCAT(remarks_approver, '\r\n $remark \r\n $role') WHERE id='$idCount'";
            }
        } elseif (isset($_POST['imm_status'])) {
            $remark = $_POST['remark_app'];
            $newStatus = $_POST['imm_status'];
            $columnName = 'imm_status';
            if (strlen($remark)<2){
                $role = '';
            }else{
                $role = '-(Immediate Superior)';
            }
            if($newStatus == 'Denied'){
                $sql = "UPDATE gate_pass SET imm_status = 'Denied', dept_status = 'Denied', ack_status = 'Denied',remarks_approver = CONCAT(remarks_approver, '\r\n -$remark \r\n $role') WHERE id='$idCount'";
            }else{
                $sql = "UPDATE gate_pass SET $columnName='$newStatus',remarks_approver = CONCAT(remarks_approver, '\r\n -$remark \r\n $role')WHERE id='$idCount'";
            }
        } elseif (isset($_POST['dept_status'])) {
            $remark = $_POST['remark_app'];
            $newStatus = $_POST['dept_status'];
            $columnName = 'dept_status';
            if (strlen($remark)<2){
                $role = '';
            }else{
                $role = '-(Department Manager)';
            }
            if($newStatus == 'Denied'){
                $sql = "UPDATE gate_pass SET dept_status = 'Denied', ack_status = 'Denied',remarks_approver = CONCAT(remarks_approver, '\r\n -$remark \r\n $role') WHERE id='$idCount'";
            }else{
                $sql = "UPDATE gate_pass SET $columnName='$newStatus',remarks_approver = CONCAT(remarks_approver, '\r\n -$remark \r\n $role') WHERE id='$idCount'";
            }
        } elseif (isset($_POST['ack_status'])) {
            $newStatus = $_POST['ack_status'];
            $columnName = 'ack_status';
            $ackName = $_POST['ack_by'];
         
            if($newStatus == 'Denied'){
                $sql = "UPDATE gate_pass SET ack_status = 'Denied', acknowledge = '$ackName' WHERE id='$idCount'";
            }else{
                $sql = "UPDATE gate_pass SET $columnName='$newStatus', acknowledge = '$ackName' WHERE id='$idCount'";
            }
        } elseif (isset($_POST['applicant_status'])) {
            $newStatus = $_POST['applicant_status'];
            $columnName = 'applicant_status';
         
            $sql = "UPDATE gate_pass SET $columnName = '$newStatus', car_status = 'Denied', imm_status = 'Denied', dept_status = 'Denied', 
            ack_status = 'Denied' WHERE id='$idCount'";
    
        } elseif (isset($_POST['driver'])&& !isset($_POST['car_status'])) {
            $driver = $_POST['driver'];
            $service = $_POST['service'];
            $plate_no = $_POST['plate_no'];
            $depart = $_POST['depart'];
            $arrive = $_POST['arrive'];
            $sql = "UPDATE gate_pass SET plate_no = '$plate_no', driver = '$driver', depart = '$depart',
            arrive = '$arrive', service_select = '$service' WHERE id='$idCount'";
    
        } else {
            // Invalid request
            echo json_encode(array('message' => 'Invalid request.'));
            exit();
        }
        $result1 = $conn->query($sql);
        if ($result1) {
            echo json_encode(array('message' => 'Status updated successfully!'));
        } else {
            echo json_encode(array('message' => 'Error updating status: ' . mysqli_error($conn)));
        }
    } else {
        echo json_encode(array('message' => 'Missing parameters.'));
    }
} else {
    echo json_encode(array('message' => 'Invalid request method.'));
}

// Close the database connection
$conn->close();
?>
