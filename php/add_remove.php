<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gate Pass Application Form</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../home/style.scss">
  <link rel="stylesheet" href="forms.scss">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
  <!-- Your other JavaScript files (if any) -->
  <script type="module" src="../home/get_account.js"></script>
  <script type="module" src="get_forms.js"></script>
</head>
<body>
  <div class="check">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="nav_up container-fluid">
        <img src="../images/NBC LOGO.png" class="logo" onclick="window.open('../home/index.php','_self')">
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
    <div class="toast-container position-fixed bottom-0 end-0 p-3" id = "contain-toast"onclick="window.open('../table/table_new.php','_self')">
  
    </div>
        <div class="side row">
      <div class="sidebar-open" id="sidebar">
      <div class="vstack for_checking ms-sm-3 gap-1 fixed">
          <div class="option1"> 
            <a class = "side-link" href = "../home/index.php" >
              <img class="house_img" src="../images/house-door-fill.svg" alt="Logo">
              <span class="single-line-text">Personal Monitor</span>
            </a>
          </div>
          <div class="option2">
            <a class = "side-link" href = "../forms/test_forms.php" >
              <img class="house_img" src="../images/ui-checks.svg" alt="Logo">
              <span class="single-line-text">Request Form</span>
            </a>
          </div>
        </div>
      </div>
      <div class="content" id="content_bar">
        <div class="outcard card container-fluid ms-2 pt-5 pb-5">
          <div class="heading container">
            <h1>Employee Add or Remove </h1>
          </div>
        <form method="POST" action="" class = 'container needs-validation' id = "validate">
            <div class="outsidecontainer" id = 'outCont'>
                <div class="body_inside container">
                
                  <div class="row">
                    <div class="col-lg-4">
                      <label for="car_select" class="form-label">Select Action</label>
                      <select class="form-select" id="car_select" required>
                        <option selected disabled>----</option>
                        <option value="1">Add Employee</option>
                        <option value="0">Remove Employee</option>
                      </select>
                    </div>
                  
                  </div>
                </div>

            
                <button type="submit" class="btn btn-primary mt-lg-5 col-2" style="height: 5vh;" id="submit_but" aria-describedby="submitNow" onclick="">Submit</button>

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
