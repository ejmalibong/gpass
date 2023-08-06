
function setDropdownValue(value, color) {
  document.getElementById('status-dropdown').textContent = value;
  document.getElementById('status-dropdown').style.backgroundColor = color;
}


import { getLoginInfo } from "../js/get_account.js";


var contentbar = document.getElementById('content_bar');
contentbar.style.paddingLeft = "16vw"
var click = 0;

// Hide/show the sidebar when clicked
$('.sidebar-open').click(function() {
  click++;
  $(this).toggleClass('sidebar');
  if (click == 1){
      contentbar.style.paddingLeft = 5 + "vw"
  }else if (click == 2){
      contentbar.style.paddingLeft = "16vw"
      click = 0;
  }
});
// Update padding when window is resized
var id_set = [];
var date_create_set = [];
var date_trip_set = [];
var id_num_set = [];
var em_name_set = [];
var dept_name_set = [];
var remarks_set = [];
var reason_set = [];
var service_select_set = [];
var time_input_set = [];
var time_input2_set = [];
var car_select_set = [];
var speci_set = [];
var locate_set = [];
var plate_no_set = [];
var driver_set = [];
var depart_set = [];
var arrive_set = [];
var arrangement_set = [];
var prepare_set = [];
var immediate_set = [];
var department_set = [];
var acknowledge_set = [];
var applicant_status = [];
var car_status = [];
var imm_status = [];
var dept_status = [];
var all_id_set = [];
var remark_app_set = [];
var role = [];
var tableRowsArray = []; 
var lastNames = {};
var count = 0;
document.addEventListener("DOMContentLoaded", function() {

  fetchFromDatabase();
  setDropDefault();
  function updateDataArrays(parsedData) {
    id_set = [];
    date_create_set = [];
    date_trip_set = [];
    id_num_set = [];
    em_name_set = [];
    dept_name_set = [];
    remarks_set = [];
    reason_set = [];
    service_select_set = [];
    time_input_set = [];
    time_input2_set = [];
    car_select_set = [];
    speci_set = [];
    locate_set = [];
    plate_no_set = [];
    driver_set = [];
    depart_set = [];
    arrive_set = [];
    arrangement_set = [];
    prepare_set = [];
    immediate_set = [];
    department_set = [];
    acknowledge_set = [];
    applicant_status = [];
    car_status = [];
    imm_status = [];
    dept_status = [];
    all_id_set = [];
    remark_app_set = [];
    role = [];
    lastNames = {};

// Your remaining code...

  
    // Update the data arrays with the new data
    for (var i = 0; i < parsedData.length; i++) {
          
      var id = parsedData[i].id;
      var date_create = parsedData[i].date_create;
      var date_trip = parsedData[i].date_trip;
      var id_num = parsedData[i].id_num;
      var em_name = parsedData[i].em_name;
      var dept_name = parsedData[i].dept_name;
      var remarks = parsedData[i].remarks;
      var reason = parsedData[i].reason;
      var service_select = parsedData[i].service_select;
      var time_input = parsedData[i].time_input;
      var time_input2 = parsedData[i].time_input2;
      var car_select = parsedData[i].car_select;
      var speci = parsedData[i].speci;
      var locate = parsedData[i].locate;
      var plate_no = parsedData[i].plate_no;
      var driver = parsedData[i].driver;
      var depart = parsedData[i].depart;
      var arrive = parsedData[i].arrive;
      var arrangement = parsedData[i].arrangement;
      var prepare = parsedData[i].prepare;
      var immediate = parsedData[i].immediate;
      var department = parsedData[i].department;
      var acknowledge = parsedData[i].acknowledge;
      var app_stats = parsedData[i].applicant_status;
      var car_stats = parsedData[i].car_status;
      var imm_stats = parsedData[i].imm_status;
      var dept_stats = parsedData[i].dept_status;
      var remarks_in = parsedData[i].remark_set;

      id_set.push(id);
      date_create_set.push(date_create);
      date_trip_set.push(date_trip);
      id_num_set.push(id_num);
      em_name_set.push(em_name);
      dept_name_set.push(dept_name);
      remarks_set.push(remarks);
      reason_set.push(reason);
      service_select_set.push(service_select);
      time_input_set.push(time_input);
      time_input2_set.push(time_input2);
      car_select_set.push(car_select);
      speci_set.push(speci);
      locate_set.push(locate);
      plate_no_set.push(plate_no);
      driver_set.push(driver);
      depart_set.push(depart);
      arrive_set.push(arrive);
      arrangement_set.push(arrangement);
      prepare_set.push(prepare);
      applicant_status.push(app_stats);
      immediate_set.push(immediate);
      department_set.push(department);
      acknowledge_set.push(acknowledge);
      car_status.push(car_stats);
      imm_status.push(imm_stats);
      dept_status.push(dept_stats);
      remark_app_set.push(remarks_in)
    }
  }
  

  function approveRequest(statusType, idSet) {
      var dataSend;
      for (let i = 0; i < id_set.length; i++){
        if (id_set[i] == idSet){
          const remark = document.getElementById(`remark_in${idSet}`)
          const remarks = remark.value;
          if (statusType == 'Car Assignee') {
            dataSend = {
              car_status: 'Approved',
              id_count: idSet,
              remark_app: remarks
            };
          } else if (statusType == 'Immediate Superior') {
            dataSend = {
              imm_status: 'Approved',
              id_count: idSet,
              remark_app: remarks
            };
          } else if (statusType == 'Department Manager') {
            dataSend = {
              dept_status: 'Approved',
              id_count: idSet,
              remark_app: remarks
            };
          }
          $.post("send_gpass_status.php", dataSend).done(function (response) {
            console.log(response.message);
          }).fail(function (xhr1 , textStatus, error) {
            console.error("Error:", error);
          });
        }
      }
    
  }
  function denyRequest(statusType, idCount) {
    var dataSend = {}
    const remark = document.getElementById(`remark_in${idCount}`)
    const remarks = remark.value;
      if (statusType == 'Car Assignee') {
        dataSend = {
          car_status: 'Denied',
          id_count: idCount,
          remark_app: remarks
        };
      } else if (statusType == 'Immediate Superior') {
        dataSend = {
          imm_status: 'Denied',
          id_count: idCount,
          remark_app: remarks
        };
      } else if (statusType == 'Department Manager') {
        dataSend = {
          dept_status: 'Denied',
          id_count: idCount,
          remark_app: remarks
        };
      }
    
      $.post("send_gpass_status.php", dataSend).done(function (response) {
        console.log(response.message);
      }).fail(function (xhr1, textStatus, error) {
        console.error("Error:", error);
      });
  }
    
  function createTableRow(count) {
    console.log(count);
      var row = document.createElement('tr');
      const getLog = getLoginInfo();
      const logName = getLog.name
      row.id = `row${id_set[count]}`;
      row.innerHTML = `
        <th scope="row">GPASS-23-${id_set[count]}</th>
        <td>${prepare_set[count]}</td>
        <td>
          <ul class="list-group list-group-flush" id="em_list${count}"></ul>
          </td>
          <td id="role${count}"></td>
          <td id="date_actual${count}">07/12/23</td>
          <td id="time_span${count}">12:00PM - 3:00PM</td>
          <td id="reason${count}">Masakit pwet</td>
          <td id="service${count}">${car_select_set[count]}</td>
          <td id="status${count}"></td>

        `;
        if ((window.location.pathname).indexOf('table_admin') != -1) {

          row.innerHTML += `<td>
            <div class="btn-group col-auto align-self-end" id = "buttonList${id_set[count]}" role="group" aria-label="test">
              <button type="button" class="btn btn-success approvePass" data-div-id="${id_set[count]}">✓</button>
              <button type="button" class="btn btn-danger denyPass" data-div-id="${id_set[count]}">x</button>
            </div>
            </td>`
        }
        var toggleRow = document.createElement('tr');
        toggleRow.id = `car_row${id_set[count]}`
        toggleRow.classList = 'border-bottom border-top' 
        toggleRow.innerHTML = `
            <td colspan="11">
            <div class="button-container buttContain${id_set[count]}">
              <button type="button" class="btn btn-primary pb-2 reviewButton btnstyle" data-bs-toggle="modal" data-bs-target="#exampleModal" id = "reviewButt${id_set[count]}">
                Review
              </button>
              <button type="button" class="btn btn-primary pb-2 assignButton btnstyle" data-bs-toggle="modal" data-bs-target="#exampleModal" id = "assign_car${id_set[count]}">
                Assign Car
              </button>
              <div class="input-group mb-3 remstyle" id = "rem${id_set[count]}">
                <span class="input-group-text" disabled id="basic-addon1">Remarks</span>
                <input type="text" class="form-control" placeholder="Type here" aria-label="Username" aria-describedby="basic-addon1" id = "remark_in${id_set[count]}">
              </div>
            </div>
          </td>
        `;      
       
        var row1 = document.createElement('tr');
        row1.innerHTML = `
          <tr scope="col" class="collapse" id="collapseExample${id_set[count]}">
            <td colspan="10"></td>
          </tr>
        `;
        
        var tableCont = document.getElementById('table_id');
        tableCont.appendChild(row);
        if (car_select_set[count] == 1) {
          tableCont.appendChild(toggleRow);
          document.getElementById(`service${count}`).textContent = "Yes";
        } else {
          tableCont.appendChild(toggleRow);
          document.getElementById(`service${count}`).textContent = "No";
         
        }

        
        const login = getLoginInfo();
        const name = login.name;
        document.getElementById(`assign_car${id_set[count]}`).style.display = "none";
        if (arrangement_set[count]==name&&car_status[count]!='Denied'){
          document.getElementById(`assign_car${id_set[count]}`).style.display = "";
          if (car_status[count]&&car_status[count].includes('Approved')){
            document.getElementById(`assign_car${id_set[count]}`).textContent = "Edit car data";
          }
        }
        const em_listid = document.getElementById(`em_list${count}`);
    
      
          var splitname = em_name_set[count];
          var spliteach = splitname.split(",");
          if (spliteach.length == 1){
            em_listid.textContent = splitname;
          } else {
            var x;
            for (x = 0; x < spliteach.length; x++) {
              const listItem = document.createElement('li');
              listItem.classList.add('list-group-item');
              listItem.textContent = spliteach[x];
              em_listid.appendChild(listItem);
            }     
          }     
          
          var immediate = immediate_set[count];
          var department = department_set[count];
          var date_act = date_trip_set[count];
          var from = time_input_set[count];
          var to = time_input2_set[count];
          var rason = reason_set[count];
          var carstat = car_status[count];
          const immstat = imm_status[count];
          var deptstat = dept_status[count];

          const listItem = document.createElement('li');
          const deptItem = document.createElement('li');
          const dateGroup = document.getElementById(`date_actual${count}`);
          const timeUp = document.getElementById(`time_span${count}`);
          const reasonUp = document.getElementById(`reason${count}`);
          const [year, month, day] = date_act.split('-');
          
          dateGroup.textContent = `${month}-${day}-${year}`;
      
          listItem.classList.add('list-group-item');
          deptItem.classList.add('list-group-item');
          
          timeUp.textContent = `${from}-${to}`
          reasonUp.textContent = rason;

          tableRowsArray.push(row);
          tableRowsArray.push(toggleRow);
          

          if (count.length == 0){
            tableCont.textContent = "No Values Found"
          }    
  }
        
        
        var myDropdown = document.getElementById("status-dropdown");
        var dropValue;
        var preValue; 

        myDropdown.addEventListener('ready', function () {
          filterTable('Pending');
        });
        
        myDropdown.addEventListener("shown.bs.dropdown", function () {
          console.log("Dropdown opened");
          preValue = myDropdown.textContent;
         
        });

        myDropdown.addEventListener("hidden.bs.dropdown", function () {
          dropValue = myDropdown.textContent;
          
          if (preValue != dropValue){
            fetchFromDatabase();
            filterTable(dropValue);
          }
          
        });
    
        
    function filterTable(dropValue) {
        
      removeAllRows();
      console.log(dropValue);
      console.log(all_id_set);
      for (let i = 0; i < all_id_set.length; i++) {
        var count = all_id_set[i];
        console.log(count);
        if (dropValue.includes('Pending')|| dropValue == 'Pending') {
          if (role[i] == 'Car Assignee'){
            if (car_status[count] == 'Pending' && imm_status[count] != 'Denied' && dept_status[count] != 'Denied'){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Pending');
              setRole(count, role[i]);
            }
            
          }else if (role[i] == 'Immediate Superior'){
            if (car_status[count]!='Pending' && imm_status[count] == 'Pending' && imm_status[count] != 'Denied' && dept_status[count] != 'Denied'){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Pending');
              setRole(count, role[i]);
              $(`#car-dropdown${i}`).remove();
            }
            
          }else if (role[i] == 'Department Manager'){
            if (imm_status[count]=='Approved'&& dept_status[count] == 'Pending' ){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Pending');
              setRole(count, role[i]);
              $(`#car-dropdown${i}`).remove();
            }
          }
        
        } else if (dropValue.includes('Approved')) {
            if (role[i] == 'Car Assignee'){
              if (car_status[count] == 'Approved' && imm_status[count] != 'Denied' && dept_status[count] != 'Denied'){
                console.log(count);
                createTableRow(count);
                setStatus(count,'Approved');
                setRole(count, role[i]);
              }
              
            }else if (role[i] == 'Immediate Superior'){
              if (imm_status[count] == 'Approved' && dept_status[count] != 'Denied' ){
                console.log(count);
                createTableRow(count);
                setStatus(count,'Approved');
                setRole(count, role[i]);
              }
             
            }else if (role[i] == 'Department Manager'){
              if (dept_status[count] == 'Approved'){
                console.log(count);
                createTableRow(count);
                setStatus(count,'Approved');
                setRole(count, role[i]);
              }
            }
            $(`#buttonList${id_set[count]}`).remove();
            $("#resp").remove();
            $(`#rem${id_set[count]}`).remove();
        } else if (dropValue.includes('Denied')) {
          if (role[i] == 'Car Assignee'){
            if (car_status[count] == 'Denied' || applicant_status[count] == 'Cancelled'){
              console.log(count);
              createTableRow(count);
              if (applicant_status[count] && applicant_status[count] == 'Cancelled'){
                setStatus(count,'Cancelled by user');
              }else{
                setStatus(count,'Denied');
              }
             
              setRole(count, role[i]);
            }
          }else if (role[i] == 'Immediate Superior'){
            if (imm_status[count] == 'Denied'){
              console.log(count);
              createTableRow(count);
              if (applicant_status[count] && applicant_status[count] == 'Cancelled'){
                setStatus(count,'Cancelled by user');
              }else{
                setStatus(count,'Denied');
              }
              setRole(count, role[i]);
            }
          }else if (role[i] == 'Department Manager'){
            if (dept_status[count] == 'Denied'){
              console.log(count);
              createTableRow(count);
              if (applicant_status[count] && applicant_status[count] == 'Cancelled'){
                setStatus(count,'Cancelled by user');
              }else{
                setStatus(count,'Denied');
              }
              setRole(count, role[i]);
            }
          }
          $(`#buttonList${id_set[count]}`).remove();
          $("#resp").remove();
          $(`#rem${id_set[count]}`).remove();
        }else if (dropValue.includes('All')){
          if (role[i] == 'Car Assignee'){
            if (car_status[count] == 'Pending' && imm_status[count] != 'Denied' && dept_status[count] != 'Denied'){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Pending');
              setRole(count, role[i]);
            } else if (car_status[count] == 'Approved' && imm_status[count] != 'Denied' && dept_status[count] != 'Denied'){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Approved');
              setRole(count, role[i]);
            $(`#buttonList${id_set[count]}`).remove();
            $(`#rem${id_set[count]}`).remove();
            } else if (car_status[count] == 'Denied'){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Denied');
              setRole(count, role[i]);
              $(`#buttonList${id_set[count]}`).remove();
              $(`#rem${id_set[count]}`).remove();
            }
          }else if (role[i] == 'Immediate Superior'){
            if (car_status[count]=='Approved' && imm_status[count] == 'Pending' && imm_status[count] != 'Denied' && dept_status[count] != 'Denied'){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Pending');
              setRole(count, role[i]);
            
            }else if (imm_status[count] == 'Approved' && dept_status[count] != 'Denied' ){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Approved');
              setRole(count, role[i]);
              $(`#buttonList${id_set[count]}`).remove();
              $(`#rem${id_set[count]}`).remove();
            }else if (imm_status[count] == 'Denied'){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Denied');
              setRole(count, role[i]);
              $(`#buttonList${id_set[count]}`).remove();
              $(`#rem${id_set[count]}`).remove();
            }
          }else if (role[i] == 'Department Manager'){
            if (imm_status[count]=='Approved'&& dept_status[count] == 'Pending' ){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Pending');
              setRole(count, role[i]);
            }else if (dept_status[count] == 'Approved'){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Approved');
              setRole(count, role[i]);
              $(`#buttonList${id_set[count]}`).remove();
              $(`#rem${id_set[count]}`).remove();
            }else if (dept_status[count] == 'Denied'){
              console.log(count);
              createTableRow(count);
              setStatus(count,'Denied');
              setRole(count, role[i]);
              $(`#buttonList${id_set[count]}`).remove();
              $(`#rem${id_set[count]}`).remove();
            }
          }
          if (dept_status[count] != 'Pending' && imm_status[count] != 'Pending' && car_status[count] != 'Pending'){
          }
        }
      }
    }
    function createModal(count){  
      const saveButt = document.getElementById('saveCar');
      saveButt.style.display = "none";
      const modal_full = document.getElementById('exampleModal');
      if (modal_full.classList.contains('modal-lg')){
        modal_full.classList.remove('modal-lg');
        modal_full.classList.add('modal-xl');
      }

      const inModal = document.getElementById('modal_body');
      var testModal = document.getElementById('modal_body_content');
      const modalCar = document.createElement('div');
      const modalHighUps = document.createElement(`div`);
      const label = document.getElementById('ModalLabel');
      const login = getLoginInfo();
      const name = login.name;
      let car_sel;
      let service_sel;
      let serv_switch = Number(service_select_set[count]);
      if (car_select_set[count] == 1){
        car_sel = "YES"
      }else {
        car_sel = "NO"
      }
  
      switch (serv_switch){
        case 1:
          service_sel = 'Drop-off Only'
          break;
        case 2: 
          service_sel = 'Pick-up Only'
          break;
        case 3: 
          service_sel = 'Drop-off and Pick-up'
          break;
        case 4: 
          service_sel= 'Own Vehicle'
          break;
      }
      console.log(service_select_set[count])
      testModal.innerHTML = `
      <div class="container-fluid ms-2">
      <div class="heading container-fluid">
        <h1>Employee's Gate Pass Application</h1>
      </div>
        <div class="container-fluid">
          <div class="row">
              <div class="col-auto">
                <label for="date_input" class="form-label">Request Date</label>
                <input type="text" class="form-control" maxlength="10" id="date_input" disabled required value = "${date_create_set[count]}">
              </div>
              <div class="col-auto ml-auto">
                <label for="date_input2" class="form-label">Date of Trip</label>
                <input type="text" class="form-control" id="date_input2" disabled required value = "${date_trip_set[count]}">
              </div>
            </div>
            <div class="row info_necessary">
            </div>
            <div class="row">
              <form method="POST" class="row">
                <div id="reason_cont" class="col-auto">
                  <label for="reason" class="form-label">Reason/Purpose</label>
                  <input type="text" class="form-control" id="reason" required disabled value = "${reason_set[count]}" maxlength="100">
                </div>
                <div class="col-auto">
                  <label for="car_select" class="form-label">Will use company car?</label>
                  <input type="text" class="form-control" id="car_sel" required disabled value = "${car_sel}">
                </div>
                <div class="col-auto">
                  <label for="time_input" class="form-label">From</label>
                  <input type="time" class="form-control" disabled id="time_input" required value = "${time_input_set[count]}">
                </div>
                <div class="col-auto">
                  <label for="time_input2" class="form-label">To</label>
                  <input type="time" class="form-control" id="time_input2" disabled required value = "${time_input2_set[count]}">
                </div>
              </form>
            </div>`
          console.log(speci_set[count])
      modalCar.innerHTML = 
      
  
     
          `<div class = "container-fluid ms-2" >
          <div class="car_info container-fluid my-4" id="car_requisition" style="">
            <h4>Company vehicle usage requisition</h4>
            <form method="POST" class="row g-4">
             
              <div class="col-auto">
                <label for="service_select" class="form-label">Service select</label>
                <input type = "text" class = "form_control" id = "service_select" disabled value = "${service_sel}">
              </div>
              <div class="row">
                <div id="specify" class="col-auto">
                  <label for="locate" class="form-label">Location</label>  
                  <input type="text" class="form-control" id="locate" disabled value = "${locate_set[count]}" >
                </div>
              </div>
            </form>
          </div>
          <div class="car_assignment container-fluid" id="car_assign">
            <h4>Car Assignment Form</h4>
            <form method="POST" class="row">
              <div class="col-auto">
                <label for="plate_no" class="form -label">Vehicle Plate Number</label>
                <input type="text" class="form-control" id="plate_no" required disabled value = "${plate_no_set[count]}">
              </div>
              <div class="col-auto">
                <label for="driver" class="form-label">Driver</label>
                <input type="text" class="form-control" id="driver" required disabled value = "${driver_set[count]}">
              </div>
              <div id="reading" class="row">
                <div class="col-auto">
                  <label for="depart" class="form-label">KM Reading (Departure)</label>
                  <input type="text" class="form-control" id="depart" disabled value = "${depart_set[count]}">
                </div>
                <div class="col-auto">
                  <label for="arrive" class="form-label">KM Reading (Arrival)</label>
                  <input type="text" class="form-control" id="arrive" disabled value = "${arrive_set[count]}">
                </div>
                <div id="arrange" class="col-auto">  
                  <label for="arrangement" class="form-label">Arranged By</label>
                  <input type="search" class="form-control" id="arrangement" disabled value = "${arrangement_set[count]}">
                  <div class="arr">
                    <div id="autocomplete_arr" class="autocomplete-items"></div>
                  </div>
                </div>
              </div>
            </form>
            </div>`
          modalHighUps.innerHTML = ` 
          <div class = "container-fluid"> 
          <div class = "container-fluid ms-2 pt-2 pb-5"> 
            <form method="POST" class="needs-validation">
            <div id="rev-up" class="row g-4">
              <div class="col-auto">
                <label for="prepare" class="form-label">Prepared by</label>
                <input type="search" class="form-control inp" id="prepare" disabled value = "${prepare_set[count]}">
                <div id="auto_prepare1" class="auto-items"></div>
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div class="col-auto">
                <label for="immediate" class="form-label">Approved by: (Immediate Superior)</label>
                <input type="search" class="form-control inp" id="immediate"  disabled value = "${immediate_set[count]}">
                <div id="auto_immediate1" class="auto-items"></div>
              </div>
              <div class="col-auto">
                <label for="department" class="form-label">Approved by: (Department Manager)</label>
                <input type="search" class="form-control inp" id="department"  disabled value = "${department_set[count]}">
                <div id="auto_department1" class="auto-items"></div>
              </div>
            </div>
          </form>
        </div>
        </div>`
  
       
            var splitname = em_name_set[count];
            var splitID = id_num_set[count];
            var splitDept = dept_name_set[count];
  
  
            var splitEachName = splitname.split(",");
            var splitEachID = splitID.split(",");
            var splitEachDept = splitDept.split(",")
  
  
            if (splitEachName.length == 1){
              makeNameCont(splitID,splitname,splitDept);
            } else {
              for (let x = 0; x < splitEachName.length; x++) {
                const em_names = splitEachName[x];
                const id = splitEachID[x];
                const dept = splitEachDept[x];
  
  
                makeNameCont(id,em_names,dept,testModal);
              }     
            }
          
  
            if (car_select_set[count]==0){
              testModal.appendChild(modalHighUps);
            }else if(car_select_set[count]==1){
              testModal.appendChild(modalCar);
              testModal.appendChild(modalHighUps);
            }
  
            inModal.appendChild(testModal);
            label.textContent = `Review of GPASS-23-${id_set[count]}`
    }
    function makeNameCont(id,name,dept,remark){
      var newRow = $(`<div id="row" class="row container-fluid "></div>`);
      var newForm = $(`<form method="POST" action="" class="d-flex flex-row"></form>`);
      var newidCol = $(`<div class="col-auto mt-2">
                          <label for="id-num" class="form-label">ID Number</label>
                          <input type="text" class="form-control" id="id_num" placeholder="" disabled value ="${id}">
                        </div>`);
      var newSearch = $(`<div class="user_search col-auto mt-2">
                            <div class="container">
                              <label for="em_name" class="form-label">Employee Name</label>
                              <input type="text" class="form-control inp" placeholder="" id="em_name" disabled value = "${name}">
                              <div id="auto_em_name" class="auto-items"></div>
                            </div>
                          </div>`);
      var newDept = $(`<div class="col-auto">
                            <label for="dept_name" class="form-label">Department Name</label>
                            <input type="text" class="form-control mt-2" placeholder="" id="dept_name" disabled value ="${dept}">
                            </div>`);
      var newRemarks = $(`<div class="col-auto">
                              <div class="container">
                                <label for="remarks" class="form-label">Remarks</label>
                                <input type="text" class="form-control mt-2" id="remarks" disabled value = "${remark}">
                              </div>
                            </div>`);
      newRow.append(newForm);
      newForm.append(newidCol);
      newForm.append(newSearch);
      newForm.append(newDept);
      newForm.append(newRemarks);
      $('.info_necessary').append(newRow);
    }
    function setDropDefault (){
      filterTable('Pending')
    }
    function setStatus(count,status){
      document.getElementById(`status${count}`).textContent = status;
    }
    function getRole(x) {
      // Find the element with the ID role${x}
      const roleElement = document.getElementById(`role${x}`);
    
      // Check if the element exists and has non-empty text content
      if (roleElement && roleElement.textContent.trim() !== '') {
        const role = roleElement.textContent;
        return role;
      } else {
        // If the element doesn't exist or has empty content, return a default value or handle the error as needed.
        console.error(`Error: Element with ID role${x} not found or has empty content.`);
        return 'Unknown Role'; // You can return a default value or an error message.
      }
    }
    

    function removeAllRows() {
      for (let i = 0; i < tableRowsArray.length; i++) {
        var row = tableRowsArray[i];
        row.remove();
      }
      tableRowsArray = [];
    }
    
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.addEventListener("click", function(event) {
      var target = event.target;
      if (target.classList.contains("dropdown-item")) {
        event.preventDefault();
        var value = target.getAttribute("data-value");
        if (value == 'Approved'){
          setDropdownValue(value, 'green');
        }
        else if (value == 'Denied'){
          setDropdownValue(value, 'red');
        }
        else{
          setDropdownValue(value, 'gray')
        }
      }
    });
    function setRole(x,role){
      document.getElementById(`role${x}`).textContent = role;
    }
    $(document).on('click', '.reviewButton', function(){
      const parent = this.id;
      console.log(parent)
      var rowMinus = parent.replace(/\D/g, '');
      const count = parseInt(rowMinus,10);
      for (let i = 0; i < id_set.length; i++){
        if (id_set[i] == count){
          createModal(i);
        }
      }

     
    })
    $(document).on('click', '.closeButt, .modal-backdrop', function(){
      const inModal = document.getElementById('modal_body_content');
      inModal.innerHTML = ""
    })
    var plate_no;
    var driver;
    var depart;
    var arrive;
    var saveDataClick = 0;
    $(document).on('click', '.approvePass', function () {
      
      // Get the value of 'div_ID' from the 'data-div-id' attribute
      const getLog = getLoginInfo()
      const name = getLog.name;
      // Rest of your existing code
      const parent = this.closest('tr');
      const rowId = parent.id;
      const secondClosestRow = parent.previousElementSibling;
      const rowDown = secondClosestRow.id;

      var rowMinus = rowId.replace('row',' ');
  
      const testid = parseInt(rowMinus, 10);
      let id;
      for (let i = 0; i < id_set.length; i++){
        if (id_set[i] == testid){
    
          if (arrangement_set[i]&&arrangement_set[i].includes(name)){
            if (saveDataClick == 0){
              alert('Please input data for car assignment');
            }
            else{
              approveRequest('Car Assignee', testid);
              $(`#${rowId}`).remove();
              $(`.buttContain${testid}`).remove();
            }
            
          }else {
            const roleRow =  getRole(i);
            console.log(roleRow);
            approveRequest(roleRow, testid);
            $(`#${rowId}`).remove();
            $(`.buttContain${testid}`).remove();
          }
        }
      }
      
     
    
      
    });

    $(document).on('click', '.denyPass', function () {
      // Get the value of 'div_ID' from the 'data-div-id' attribute
      
      // Rest of your existing code
      const parent = this.closest('tr');
      const rowId = parent.id;
       const secondClosestRow = parent.previousElementSibling;
      const rowDown = secondClosestRow.id;
      var rowMinus = rowId.replace('row',' ');
      const testid = parseInt(rowMinus, 10);
      let id = 0;

      for (let i = 0; i < id_set.length; i++){
        if (id_set[i] == testid){ 
          if (rowId){
            const roleRow =  getRole(i);
            const count = role.indexOf(roleRow);
            console.log(roleRow);
            denyRequest(roleRow, testid);
            $(`#${rowId}`).remove();
            $(`#${rowDown}`).remove();
            $(`.buttContain${testid}`).remove();
          }
        }
      }
      
    
      
    });
    var value;
    $(document).on('click', '.assignButton', function () {
      const rowId = this.id;
      console.log(rowId)
      var rowMinus = rowId.replace(/\D/g, '');
      const id = parseInt(rowMinus, 10);
      for (let i = 0; i < id_set.length; i++){
        if (id_set[i] == id){
          carModal(i);
        }
      }
    
      value = id;
    });
  
    $(document).on('click', '.saveData', function () {
      saveDataClick++;
      console.log(value)
      let dataSend;
      let service_select = document.getElementById(`service_select`).value
      plate_no = document.getElementById(`plate_no1`).value;
      driver = document.getElementById(`driver1`).value;
      depart = document.getElementById('depart1').value;
      arrive = document.getElementById('arrive1').value;
      
      dataSend = {
        id_count: value,
        plate_no: plate_no,
        driver: driver,
        depart: depart,
        arrive: arrive,
        service: service_select
      }
      $.post("send_gpass_status.php", dataSend).done(function (response) {
        console.log(response.message);
      }).fail(function (xhr1 , textStatus, error) {
        console.error("Error:", error);
      });
    });
    
    
    function fetchFromDatabase(){
   
      var xhr = new XMLHttpRequest();
     
      xhr.open('POST', 'get_tableData.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
      
        if (xhr.readyState === 4 && xhr.status === 200) {
          var parsedData = JSON.parse(xhr.responseText);
          updateDataArrays(parsedData);
          console.log(em_name_set);
          var count = 0;
          
          var tableCont = document.getElementById('row_body');
          
          // Get last name in each em_name_set object
          for (const key in em_name_set) {
            const nameString = em_name_set[key];
            const namesArray = nameString.split(',');
            const lastFullName = namesArray[namesArray.length - 1];
            const lastSequenceOfNames = lastFullName.trim();
            lastNames[key] = lastSequenceOfNames;
          }
    
          // Extract each key
          for (let i = 0; i < em_name_set.length; i++) {
            var name_div = document.getElementById('emp_req');
            var getStr = em_name_set[i];
            var getInd = getStr.indexOf(',');
            var subtext;
            while (getInd != 0) {
              subtext = getStr.substring(0, getInd);
              getInd = subtext;
            }
            if (getInd === -1) {
              console.log(subtext);
            }
          }
          console.log(id_set);
          var userget;
          console.log(id_num_set)
          for(let i=0;i<immediate_set.length;i++){
            var getLogin = getLoginInfo();
            userget = getLogin.name;
            var carIdentifier = arrangement_set[i] && arrangement_set[i].includes(userget);
            var listIdentifier = immediate_set[i] && immediate_set[i].includes(userget);
            var roleIdentifier = department_set[i] && department_set[i].includes(userget);
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
          }
          const dropText = document.getElementById("status-dropdown").textContent
          let prevText = null;
          if (dropText.includes('Pending')&&dropText!=prevText && dropText!='Pending'&& count == 0){
            filterTable('Pending');
            
          }
          prevText = dropText;
          count++;
           };xhr.send();
    }

    function carModal(count){  
 
      const modal_full = document.getElementById('exampleModal');
      modal_full.classList.remove('modal-xl');
      modal_full.classList.add('modal-lg');
      const saveButt = document.getElementById('saveCar');
      saveButt.style.display = "";  
      const inModal = document.getElementById('modal_body');
      const testModal = document.getElementById('modal_body_content');
      testModal.innerHTML = ""
      const modalCar = document.createElement('div');
      const label = document.getElementById('ModalLabel');
      
  
      modalCar.innerHTML = 
          `<div class="car_assignment container-fluid" id="car_assign">
            <h4>Car Assignment Form</h4>
            <form method="POST" class="row">
              <div class="col-auto">
                <label for="service_select" class="form-label">Service select</label>
                <select class="form-select" id="service_select">
                  <option selected disabled>----</option>
                  <option value="1">Drop-off only</option>
                  <option value="2">Pick-up only</option>
                  <option value="3">Drop-off and pickup</option>
                </select>
              </div>
              <div>
              <div class="row">
                <div class="col-auto">
                  <label for="plate_no" class="form-label">Vehicle Plate Number</label>
                  <input type="text" class="form-control" id="plate_no1" placeholder ="${plate_no_set[count]}" required>
                </div>
                <div class="col-auto">
                  <label for="driver" class="form-label">Driver</label>
                  <input type="text" class="form-control" id="driver1"  placeholder ="${driver_set[count]}" required>
                </div>
              </div>
              <div id="reading" class="row">
                <div class="col-auto">
                  <label for="depart" class="form-label">KM Reading (Departure)</label>
                  <input type="text" class="form-control" id="depart1" placeholder ="${depart_set[count]}">
                </div>
                <div class="col-auto">
                  <label for="arrive" class="form-label">KM Reading (Arrival)</label>
                  <input type="text" class="form-control" id="arrive1" placeholder ="${arrive_set[count]}">
                </div>
              </div>
              </div>
          

            </form>
          </div>`
  
        testModal.appendChild(modalCar);
        inModal.appendChild(testModal);
        label.textContent = `Assign Car for Gatepass Request: GPASS-2023-${id_set[count]}`
    }
})


     
        
        // Add click event listeners to all div elements with ids
    

    
 