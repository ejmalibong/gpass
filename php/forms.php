<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gate Pass Application Form</title>
  <!-- Bootstrap CSS -->
  <link href="../css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.scss">
  <link rel="stylesheet" href="../css/forms.scss">
  <script src="../js/jquery-3.7.0.min.js"></script>
  <script src="../js/popper.min.js"></script>
  <script src="../js/bootstrap.min.js"></script>
  <!-- Your other JavaScript files (if any) -->
  <script type="module" src="../js/get_account.js"></script>
  <script type="module" src="../js/get_forms.js"></script>
</head>
<body>
  <div class="check">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="nav_up container-fluid">
      <img src="../images/NBC LOGO.png" class="logo" onclick="window.open('../php/home.php','_self')">
        <div class="collapse navbar-collapse ms-2" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item a">
              <a class="nav-link a"><strong  id="name"></strong></a>
            </li>
            <li class="nav-item a">
              <a class="nav-link" id="dept"></a>
            </li>
            <li class="nav-item a">
            <h4><a class="nav-link badge text-bg-light mt-1 ms-2" id = "pos"></a></h4>
            </li>
          </ul>
        </div>
      </div>
      <button type="submit" class="btn btn-danger position-absolute end-0 me-3" onclick="" id="button_out" name="submit">Logout</button>
    </nav>
    <div class="toast-container position-fixed bottom-0 end-0 p-3" id = "contain-toast"onclick="window.open('table_admin.php','_self')">
  
    </div>
        <div class="side row">
      <div class="sidebar-open" id="sidebar">
      <div class="vstack for_checking ms-sm-3 gap-1 fixed">
          <div class="option1"> 
            <a class = "side-link" href = "home.php" >
              <img class="house_img" src="../images/house-door-fill.svg" alt="Logo">
              <span class="single-line-text">Personal Monitor</span>
            </a>
          </div>
          <div class="option2">
            <a class = "side-link" href = "forms.php" >
              <img class="house_img" src="../images/ui-checks.svg" alt="Logo">
              <span class="single-line-text">Request Form</span>
            </a>
          </div>
        </div>
      </div>
      <div class="content" id="content_bar">
        <div class="outcard card container-fluid ms-2 pt-5 pb-5">
          <div class="heading container">
            <h1>Employee's Gate Pass Application</h1>
          </div>
        <form method="POST" action="" class = 'container needs-validation' id = "validate">
          <div class="outsidecontainer" id = 'outCont'>
            <div class="body_inside container">
              <div class="date_part row">
                <div class="col-auto">
                  <label for="date_input" class="form-label">Request Date</label>
                  <input type="text" class="form-control" maxlength="10" id="date_input" disabled >
                </div>
                <div class="col-auto ml-auto">
                  <label for="date_input2" class="form-label">Date of Trip</label>
                  <input type="date" class="form-control" id="date_input2" required>
                </div>
              </div>

              <div class="row info_necessary">
                <div class="d-flex flex-row">
                  <div class="col-lg-2">
                    <label for="id-num" class="form-label">ID Number</label>
                    <input type="text" class="form-control" id="id_num" required disabled>
                  </div>
                  <div class="user_search col-lg-4">
                    <div class="container-fluid ">
                      <label for="em_name" class="form-label">Employee Name</label>
                      <input type="text" class="form-control inp" placeholder="" id="em_name" required>
                        <div class="invalid-feedback">
                          Please enter employee name
                        </div>
                      <div id="auto_em_name" class="auto-items"></div>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <label for="dept_name" class="form-label">Department</label>
                    <input type="text" class="form-control " id="dept_name" required disabled >
                  </div>
                  <div class="ms-2 btn-group col-auto align-self-end" role="group" aria-label="test">
                    <button type="button" class="btn btn-primary" id="addLineButton">+</button>
                    <button type="button" class="btn btn-danger" id="remove-button">-</button>
                  </div>
                </div>
              </div>

              <div class="row">
                <div id="reason_cont" class="col-lg-4">
                  <label for="reason" class="form-label">Reason/Purpose</label>
                  <input type="text" class="form-control" id="reason" required>
                </div>
                <div class="col-lg-2">
                  <label for="car_select" class="form-label">Will use company car?</label>
                  <select class="form-select" id="car_select" required>
                    <option selected disabled>----</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
                <div class="col-auto">
                  <label for="time_input" class="form-label">From</label>
                  <input type="time" class="form-control" id="time_input" required>
                </div>
                <div class="col-auto">
                  <label for="time_input2" class="form-label">To</label>
                  <input type="time" class="form-control" id="time_input2" required>
                </div>
              </div>
              <div class="row">
                 
                <div class="col-lg-5">
                  <label for="locate" class="form-label">Location</label>
                  <input type="text" class="form-control car_get "  id="locate">
                </div>
                  <div id="arrange" class="col-lg-4">
            

                    <label for="arrangement" class="form-label">Arranged By</label>
                    <input type="search" class="form-control inp car_get" id="arrangement" value = "">
                    <div class="arr">
                      <div id="auto_arrangement" class="auto-items"></div>
                    </div>
                </div>
              </div>
             
            </div>

            <!-- <div class="car_info container my-4" id="car_requisition" style="display: none;">
              <h4>Company vehicle usage requisition</h4>
              <div class="row">

                <div class="col-auto">
                  <label for="service_select" class="form-label">Service select</label>
                  <select class="form-select" id="service_select">
                    <option selected disabled>----</option>
                    <option value="1">Drop-off only</option>
                    <option value="2">Pick-up only</option>
                    <option value="3">Drop-off and pickup</option>
                  </select>
                </div>
              
                <div class="row">
                  <div id="specify" class="col-8">
                    <label for="speci" class="form-label">Specify</label>
                    <input type="text" class="form-control col-lg-2 car_get" id="speci">
                   
                  </div>
                </div>
              </div>
            </div> -->
          <div class="signies container" id = 'reviews_out'>
            <div class="row">
              <div id="rev-up" class="col-3">
                <label for="prepare" class="form-label">Prepared by</label>
                <input type="search" class="form-control inp" id="prepare" disabled>
                <div id="auto_prepare" class="auto-items"></div>
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div class="col-3">
                <label for="immediate" class="form-label">Checked by: (Immediate Superior)</label>
                <input type="search" class="form-control inp" id="immediate">
                <div id="auto_immediate" class="auto-items "></div>
              </div>
              <div class="col-3">
                <label for="department" class="form-label">Approved by: (Department Manager)</label>
                <input type="search" class="form-control inp" id="department" required>
                <div id="auto_department" class="auto-items"></div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary mt-lg-5 col-2" id="submit_but" aria-describedby="submitNow" onclick="">Submit</button>
            </div>
            
          </form>
          
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->

  <script type="module">

   
    var contentbar = document.getElementById('content_bar');
    contentbar.style.paddingLeft = "16vw";
    $(document).ready(function() {
      // Initial padding update

      var click = 0;
      // Hide/show the sidebar when clicked
      $('.sidebar-open').click(function() {

        click++;
        console.log(click);
        $(this).toggleClass('sidebar');

        if (click == 1) {
          contentbar.style.paddingLeft = 5 + "vw";
        } else if (click == 2) {
          contentbar.style.paddingLeft = "16vw";
          click = 0;
        }

      });

    });
  </script>
</body>
</html>
