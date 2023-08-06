<!DOCTYPE html>
<html>
<head>
    <!--get bootstrap script-->
    <script src="../js/bootstrap.min.js"></script>

    <title>Gatepass System Login Page</title>

    <!--get bootstrap css-->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.scss">
    
    <style>
        .card {
            margin: 0 auto;
            width: 400px;
            height: 500px;
            padding: 20px;
            margin-top: 100px;
            border-radius: 0; 
        }
        #button_1 {
            border-radius: 0; 
        }
        #user_name {
            border-radius: 0; 
        }
    </style>
</head>
<body>
    <div class="container">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="nav_up container-fluid">
        <img src="../images/NBC LOGO.png" class="logo" onclick="">
      </div>
    </nav>
    <div class ="mt-6 container d-flex justify-content-center align-items-center">
        <div class="card mx-auto">
            <h2 class="text-center mt-5">Gatepass Application Login</h2>
            <form name="login" method="POST" action=""  class="row g-3 mt-5">
                <div class="d-grid gap-2 col-15 mx-auto">
                    <input type="text" class="form-control form-control-lg text-center" name="user_in" placeholder="Username" aria-describedby="emailHelp" id = "user_name">
  
                    <button type="submit" class="btn btn-primary btn-lg" onclick="" id="button_1" name="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    <script src="../js/jquery-3.7.0.min.js"></script>
    <script type = "module">
        import { setLoginInfo } from "../js/get_account.js";
       
        function fetchData() {
            var po = 0;
            user = document.login.user_in.value;
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'authentication.php', true);
           
            xhr.onload = function() {
                if (xhr.readyState === XMLHttpRequest.OPENED) {
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                }
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    var numOut = [];
                    var empOut = [];
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var res = JSON.parse(xhr.responseText);
                        for (var i = 0; i < res.length; i++) {
                            var username = res[i].emp_code;
                            var empname = res[i].emp_full;
                            empOut.push(empname);
                            numOut.push(username);
                        }
                        var userIndex =numOut.indexOf(user);
                        var em_name = empOut[userIndex];
                        setLoginInfo(user, em_name);
                        var userCheck = numOut.includes(user);
                        if (user.length == "") {
                            alert("Username cannot be empty!");
                        } else if (userCheck == true) {
                            if(user.includes('GUARD')){
                                window.open('table_guard.php', '_self');
                            }
                            else {
                                window.open('forms.php','_self')
                            }
                        } else if(user.length>9 || (userCheck == false)){
                            alert("Username or password is incorrect");
                            let username = document.getElementById('user_name');
                            username.value = "";
                        }
                    } else {
                        console.log('Error: ' + xhr.status);
                    }
                }
            }
            window.data = user;
            var data = "username=" + encodeURIComponent(user);
            xhr.send();
            return false;
        }
        const hostname = window.location.pathname;
        console.log("Hostname:", hostname);
        var user;
        var textField = document.getElementById('user_name');
        textField.addEventListener('input', function() {
        if (textField.value.length > 8) {
            textField.value = textField.value.slice(0, 8); // Truncate the input to 8 characters
        }
        if (textField.value.length == 8){
            fetchData();
        }
        });
        window.addEventListener('load', function() {
            textField.focus();
        });
        window.addEventListener('click', function(event) {
            textField.focus();
        });
        var butt = document.getElementById("button_1");
        var input = document.getElementById("user_name");
      
        butt.onclick = fetchData;
    
    </script>
    <script type = "module" src = "../js/get_account.js">
    </script>
</body>
</html>
