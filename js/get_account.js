// Set login information in session storage
export function setLoginInfo(username,name) {
    const loginInfo = {
      username: username,
      name: name,
      loggedIn: true
    };
    sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
  }
 
  // Get login information from session storage
  
  // Clear login information from session storage
  function clearLoginInfo() {
    sessionStorage.clear();
  }
  $('#button_out').click(function(){
    clearLoginInfo();
    window.open('../php/index.php','_self');
  })
  // Example usage
 export function getLoginInfo() {
    const loginInfo = sessionStorage.getItem('loginInfo');
    return JSON.parse(loginInfo);
  }
  ;
  const storedLoginInfo = getLoginInfo();
  
  if (storedLoginInfo && storedLoginInfo.loggedIn) {
    console.log('User is logged in:', storedLoginInfo.username);
  } else {
    console.log('User is not logged in.');
  }
  
  var emp_name = [];
  var emp_dept = [];
  var emp_pos = [];
  var emp_code = [];
  var arrangement_set = [];
  var immediate_set = [];
  var department_set = [];
  var prepare_set = [];
  var all_id_set = [];
  var car_status = [];
  var imm_status = [];
  var dept_status = [];
  var role = [];
  var position; 
  var pos_check;

  function showToast(count, i){

    const toast = document.getElementById('contain-toast');
    const dynamic = document.createElement('div');
    const prepareName = String(prepare_set[count]);
    const getNameID = emp_name.indexOf(`${prepareName}`);
    console.log(getNameID)
    const id = parseInt(getNameID, 10);

    dynamic.innerHTML = `
    <div id="test-toast${count}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="../images/ui-checks.svg" class="rounded me-2" alt="...">
      <strong class="me-auto">Pending Applications</strong>
      <small>NBC</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      <strong>${prepare_set[count]}</strong> from <strong>${emp_dept[id]}</strong> has applied for a Gate pass
      <br><br>
      <strong>Role: ${role[i]}</strong>
    </div>
    </div>`
  toast.appendChild(dynamic);
  let toastOut = document.getElementById(`test-toast${count}`);
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastOut)
   toastBootstrap.show();
  }
  // Example usage
  var badgeCount = 0;
  var xhrb = new XMLHttpRequest();

  xhrb.open('POST', 'get_tableData.php', true);
  xhrb.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhrb.onreadystatechange = function() {
  
    if (xhrb.readyState === 4 && xhrb.status === 200) {
      var parsedData = JSON.parse(xhrb.responseText);
      for (var i = 0; i < parsedData.length; i++) {
      var arrangement = parsedData[i].arrangement;
      var immediate = parsedData[i].immediate;
      var department = parsedData[i].department;
      var car_stats = parsedData[i].car_status;
      var imm_stats = parsedData[i].imm_status;
      var dept_stats = parsedData[i].dept_status;
      var prep = parsedData[i].prepare;

      arrangement_set.push(arrangement);
      immediate_set.push(immediate);
      department_set.push(department);
      car_status.push(car_stats);
      imm_status.push(imm_stats);
      dept_status.push(dept_stats);
      prepare_set.push(prep);
      }
     
      
        var xhra = new XMLHttpRequest();
  xhra.open('POST', 'authentication.php', true);
 
  xhra.onload = function() {
      if (xhra.readyState === XMLHttpRequest.OPENED) {
          xhra.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      }
      if (xhra.readyState === XMLHttpRequest.DONE) {
          if (xhra.readyState == 4 && xhra.status == 200) {
              var res = JSON.parse(xhra.responseText);
              for (var i = 0; i < res.length; i++) {
                  var name = res[i].emp_full;
                  var dept = res[i].empt_dept;
                  var pos = res[i].emp_pos;
                  var code = res[i].emp_code; 
          
                  emp_code.push(code);
                  emp_name.push(name);
                  emp_dept.push(dept);
                  emp_pos.push(pos);
               
              } 
              if ((window.location.pathname) === ("/Gate-Pass-Login/php/")){

              }else{
                var user_in = getLoginInfo();
                position = emp_code.indexOf(user_in.username);
                console.log(position);
                document.getElementById('name').textContent = emp_name[position];
                document.getElementById('dept').textContent = emp_dept[position];
                document.getElementById('pos').textContent = emp_pos[position];
                pos_check = emp_pos[position].toLowerCase();
                name = emp_name[position];
                console.log(pos_check == 'guard');
                console.log(arrangement_set)
                for(let i=0;i<immediate_set.length;i++){

                  let userget = user_in.name;
                  let  carIdentifier = (arrangement_set[i]) && arrangement_set[i].includes(userget);
                  let listIdentifier = (immediate_set[i]) && immediate_set[i].includes(userget);
                  let roleIdentifier = (department_set[i]) && department_set[i].includes(userget);
                    if (listIdentifier == true){
                      all_id_set.push(i);
                      role.push('Immediate Superior');
                    }else if (roleIdentifier == true){
                      all_id_set.push(i);
                      role.push('Department Manager')
                    }else if (carIdentifier == true) {
                      all_id_set.push(i);
                      role.push('Car Assignee');
                    } 
                  }
                  let getToastStatus;
                  if ((window.location.pathname).includes('form')){
                    getToastStatus = sessionStorage.getItem('toastStatus');
                    console.log(getToastStatus)
                  
                  }
                  let Iteratecount;
                  for (let i = 0; i<all_id_set.length;i++){
                    let count = all_id_set[i];
                    let getRole = role[i];
                    Iteratecount++;
                    if (getRole.includes('Department')){
                      if (imm_status[count] == 'Approved' && dept_status[count] == 'Pending'){
                        badgeCount++;
                        if ((window.location.pathname).includes('form')){
                          if (getToastStatus == null){
                            showToast(count,i)
                          }
                        }
                      } 
                    } else if (getRole.includes('Immediate')){
                        if (imm_status[count] == 'Pending' && car_status[count] != 'Pending'){
                        badgeCount++;
                        if ((window.location.pathname).includes('form')){
                          if (getToastStatus == null){
                            showToast(count,i)
                          }
                        }
                        } 
                    } else if (getRole.includes('Car')){
                      if (car_status[count] == 'Pending'){
                        badgeCount++;
                        if ((window.location.pathname).includes('form')){
                          if (getToastStatus == null){
                            showToast(count,i)
                          }
                        }
                      } 
                    }
                }
                const toastInfo = {
                  status: 'loaded'
                }
                sessionStorage.setItem('toastStatus', JSON.stringify(toastInfo));
                
                if (pos_check.includes('manager')==true || pos_check.includes('senior') || pos_check.includes('supervisor')){
                  var new_li = $(`
                  <div class="option3" >
                  
                    <a class = "side-link" href = "table_admin.php" >  
                      <img class="house_img" src="../images/pc-display-horizontal.svg" alt="Logo">
                      <span class="badge bg-primary position-absolute ms-4 mb-5">${badgeCount}</span>
                      <span class="single-line-text" >Application Manager</span>
                  </a>
                </div>
                <div class="option4" >
                  
                <a class = "side-link" href = "table_all.php" >  
                  <img class="house_img" src="../images/pc-display-horizontal.svg" alt="Logo">
                  <span class="badge bg-primary position-absolute ms-4 mb-5">All</span>
                  <span class="single-line-text" >All Applications</span>
              </a>
              </div>`)
                  $('.vstack').append(new_li);
                  }else if (pos_check == 'guard'){
                    document.getElementById('')
                    var new_li = $(`
              
                <div class="option4" >
                  <a class = "side-link" href = "table_guard.php" >  
                    <img class="house_img" src="../images/person-badge.svg" alt="Logo">
                    <span class="single-line-text" >Gate Acknowledge</span>
                </a>
                </div>`)
                  $('.vstack').append(new_li);
                  }
                }
              }
               
                console.log(window.location.pathname);

          } else {
              console.log('Error: ' + xhra.status);
          }
  }; xhra.send();

      }
  };xhrb.send();


 