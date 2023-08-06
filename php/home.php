<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Gatepass Application List</title>
  <!-- Bootstrap CSS -->
  <link href="../css/bootstrap.min.css" rel="stylesheet">
  <script src="../js/bootstrap.min.js"></script>

  <link rel="stylesheet" href="../css/style.scss">
  <link rel="stylesheet" href="../css/custom.scss">
</head>
<body>

  <div class="check overflow-x-hidden">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="nav_up container-fluid">
      <img src="../images/NBC LOGO.png" class="logo" onclick="window.open('home.php','_self')">
        <div class="collapse navbar-collapse ms-2" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item a">
              <a class="nav-link a" ><strong id = "name"></strong></a>
            </li>
            <li class="nav-item a">
              <a class="nav-link" id = "dept"></a>
            </li>
            <li class="nav-item a">
              <h4><a class="nav-link badge text-bg-light mt-1 ms-2" id = "pos"></a></h4>
            </li>
          </ul> 
        </div>
        <button type="submit" class="btn btn-danger position-absolute end-0 me-3" onclick="" id="button_out" name="submit">Logout</button>
      </div>
    </nav>
    <div class="side row">
      <div class="sidebar-open" id="sidebar">
      <div class="vstack ms-3 gap-1 fixed">
        <div class="option1"> 
          <a class = "side-link" href = "../php/home.php" >
            <img class="house_img" src="../images/house-door-fill.svg" alt="Logo">
            <span class="single-line-text">Personal Monitor</span>
          </a>
        </div>
        <div class="option2">
          <a class = "side-link" href = "../php/forms.php" >
            <img class="house_img" src="../images/ui-checks.svg" alt="Logo">
            <span class="single-line-text">Request Form</span>
          </a>
        </div>
      </div>
      </div>
      <!-- Content -->
      <div class="content" id="content_bar">
        <div class="heading container-fluid">
          <h4>Personal Gate Pass Monitor</h4>
        </div>
        <!-- Transparent Backdrop Modal -->
        <div class="modal modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Transparent Backdrop Modal</h5>
                <button type="button" class="btn-close closeButt" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" id = "modal_body">
                <div id="modal_body_content">

                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary closeButt" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal modal-md fade" id="cancelCheckModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel"><h5><strong>Gatepass Cancellation</strong></h5>
                <button type="button" class="btn-close closeButt" data-bs-dismiss="modal" aria-label="Close"></button>
                
              </div>
              <div class="modal-body" id = "modal_body">
                <div id="modal_body_content">
                    <h4>Do you really want to cancel your application?</h4>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger cancelModalButt" data-bs-dismiss="modal">YES</button>
                <button type="button" class="btn btn-success closeButt" data-bs-dismiss="modal">NO</button>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="container-fluid cont0">
            <table class="table table-light table-borderless" id="table_id">
            <thead class="position-sticky">
            <tr class="sticky-thead table-dark">
              <th scope="col col-auto">Request #</th>
              <th scope="col col-auto">Request by</th>
              <th scope="col col-auto">Employees</th>
              <th scope="col col-auto">Approved by</th>
              <th scope="col col-auto">Date</th>
              <th scope="col col-auto">Time</th>
              <th scope="col col-auto">Reason</th>
              <th scope="col col-auto">Service?</th>
              <th scope="col col-xxl-4">Remarks</th>
              <th scope="col col-auto">Status</th>
            </tr>
          </thead>

          <tbody id="table_body">
            <!-- Rows will be dynamically added here -->
          </tbody>

            </table>
          </div>
        </div> 
      </div>
    </div>
  </div>
</body>
<!-- Bootstrap JS -->
<script src="../js/jquery-3.7.0.min.js"></script>
<script type = "module" src="../js/get_account.js">




</script>
<script type = "module" src="../js/get_table_home.js">
</script>
</html>
