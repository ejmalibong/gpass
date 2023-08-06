//const filteredData = numOut.filter(item => item.name.includes(user));

var contentbar = document.getElementById('content_bar');
  contentbar.style.paddingLeft = "16vw"
  var click = 0;
import { getLoginInfo } from "../js/get_account.js";

var getLog = getLoginInfo();
console.log(getLog);
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
var ack_status = [];
var all_id_set = []
var role = [];
var tableRowsArray = []; 
var lastNames = {};
var remark_app_set = [];
  
  fetchFromDatabase();
  
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
    ack_status = [];
    all_id_set = [];
    role = [];
    remark_app_set = [];
    lastNames = {};

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
        var ack_stat = parsedData[i].ack_status;
        var dept_stats = parsedData[i].dept_status;
        var remarks_in = parsedData[i].remarks_approver;
  
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
        immediate_set.push(immediate);
        department_set.push(department);
        acknowledge_set.push(acknowledge);
        applicant_status.push(app_stats);
        car_status.push(car_stats);
        imm_status.push(imm_stats);
        dept_status.push(dept_stats);
        ack_status.push(ack_stat);
        remark_app_set.push(remarks_in);
  
    }
    removeAllRows();
    createTable();
  }


  function createTableRow(count) {
    var row = document.createElement('tr');
    row.id = `row${count}`;
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
        <td>${remark_app_set[count].replace(/-/g, '<br>')}</td>
        <td class = 'status' id="status${count}"></td>
      `;
      if ((window.location.pathname).indexOf('table_new') != -1) {
        toggleRow.innerHTML += `<td>
          <div class="btn-group col-auto align-self-end" id = "buttonList" role="group" aria-label="test">
            <button type="button" class="btn btn-success approvePass" data-div-id="${count}">✓</button>
            <button type="button" class="btn btn-danger denyPass" data-div-id="${count}">x</button>
          </div>
          </td>`
      }
      var toggleRow = document.createElement('tr');
      toggleRow.id = `car_row${id_set[count]}`
      toggleRow.style.background = '#F7F7F7'
      toggleRow.style.backgroundClip = 'padding-box'
      toggleRow.classList = 'border-bottom border-top' 
      toggleRow.innerHTML = `
          <td colspan="10">
          <div>
          <div id = "buttContain${id_set[count]}>
            <button type="button" class="btn btn-primary col col-xxl-1 pb-2 reviewButton" data-bs-toggle="modal" data-bs-target="#exampleModal" id = "revButt${id_set[count]}">
              Review
            </button>
          </div>
          </div>
        </td>
      `;      
     
      var row1 = document.createElement('tr');
      row1.innerHTML = `
        <tr scope="col" class="collapse" id="collapseExample${count}">
          <td colspan="9"></td>
        </tr>
      `;
      
      var tableCont = document.getElementById('table_id');
     
      tableCont.appendChild(row);
      tableCont.appendChild(toggleRow);

      if (car_select_set[count] == 1) {
        document.getElementById(`service${count}`).textContent = "Yes";
      } else {
        document.getElementById(`service${count}`).textContent = "No";
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
      console.log(remark_app_set[count])
      var immediate = immediate_set[count];
      var department = department_set[count];
      var date_act = date_trip_set[count];
      var from = time_input_set[count];
      var to = time_input2_set[count];
      var rason = reason_set[count];
      var carstat = car_status[count];
      const immstat = imm_status[count];
      var deptstat = dept_status[count];

      const lineGroup = document.getElementById(`role${count}`)
      const listItem = document.createElement('li');
      const deptItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      deptItem.classList.add('list-group-item');
      console.log(immediate)
    
        
      deptItem.textContent = department + " (Department Manager)";
      if (!(immediate == "")){
        listItem.textContent = immediate + " (Immediate Superior)";
        lineGroup.appendChild(listItem);
      }
  
      lineGroup.appendChild(deptItem);

      

      const dateGroup = document.getElementById(`date_actual${count}`);
      const timeUp = document.getElementById(`time_span${count}`);
      const reasonUp = document.getElementById(`reason${count}`);
      const [year, month, day] = date_act.split('-');
      
      dateGroup.textContent = `${month}-${day}-${year}`;
  
      timeUp.textContent = `${from}-${to}`
      reasonUp.textContent = rason;

      tableRowsArray.push(row);
      tableRowsArray.push(toggleRow);

      if (count.length == 0){
        tableCont.textContent = "No Values Found"
      }
      
      var setStatus = document.getElementById(`status${count}`)
      if (car_status[count].includes('Pending')){
        setStatus.textContent = 'For Car Approval'
      }else if(imm_status[count]=='Pending'){
        setStatus.textContent = 'For Immediate Superior Approval'
      }else if(dept_status[count].includes('Pending')){
        setStatus.textContent = 'For Department Manager Approval'
      }else if (ack_status[count] && ack_status[count].includes('Pending')){
        setStatus.textContent = 'For Acknowledgement'
      }else if (applicant_status[count]&&applicant_status[count].includes('Cancelled')){
        setStatus.textContent = 'Cancelled by applicant'
      }else if (imm_status[count].includes('Denied')||dept_status[count]&&dept_status[count].includes('Denied') || ack_status[count] && ack_status[count].includes('Denied')){
        setStatus.textContent = 'Denied';
      }else if (ack_status[count] && ack_status[count].includes('Approved')){
        setStatus.textContent = `Approved  \n(Acknowledged by: ${acknowledge_set[count]})`
      }
    
  }
  function createModal(count){  
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
              <input type="text" class="form-control" id="date_input2" required value = "${date_trip_set[count]}">
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
                <label for="speci" class="form-label">Specify</label>  
                <input type="text" class="form-control" id="speci" disabled value = "${speci_set[count]}">
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
              const remark = splitEachRemark[x];

              makeNameCont(id,em_names,dept,remark,testModal);
            }     
          }
        

          if (car_select_set[count]==0){
            testModal.appendChild(modalHighUps);
          }else if(car_select_set[count]==1){
            testModal.appendChild(modalCar);
            testModal.appendChild(modalHighUps);
          }

          inModal.appendChild(testModal);
          label.textContent = "Review of GPASS-YEAR-69"
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

  $(document).on('click', '.closeButt', function(){
    const inModal = document.getElementById('modal_body_content');
    inModal.innerHTML = ""
  })

  var cancelModalID;
  $(document).on('click', '.cancelModalButt', function(){
    var dataSend = {
      applicant_status: 'Cancelled',
      id_count: cancelModalID+1,
    };
    $.post("../table/send_gpass_status.php", dataSend).done(function (response) {
      console.log(response.message);
      fetchFromDatabase();
    }).fail(function (xhr1 , textStatus, error) {
      console.error("Error:", error);
    });
  })
  function removeAllRows() {
    for (let i = 0; i < tableRowsArray.length; i++) {
      var row = tableRowsArray[i];
      row.remove();
    }
    tableRowsArray = [];
  }
  function fetchFromDatabase(){
    
    var xhr = new XMLHttpRequest();
  
    xhr.open('POST', 'get_tableData.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
    
      if (xhr.readyState === 4 && xhr.status === 200) {
        var parsedData = JSON.parse(xhr.responseText);
        updateDataArrays(parsedData);
        console.log(em_name_set);
        
        console.log(id_num_set)
        for(let i=0;i<immediate_set.length;i++){
          let getLogin = getLoginInfo();
          let userget = getLogin.name;
          let carIdentifier = Array.isArray(arrangement_set[i]) && arrangement_set[i].includes(userget);
          let listIdentifier = Array.isArray(immediate_set[i]) && immediate_set[i].includes(userget);
          let roleIdentifier = Array.isArray(department_set[i]) && department_set[i].includes(userget);
            if (listIdentifier == true){
              all_id_set.push(i);
              role.push('Immediate Superior');
            }else if (roleIdentifier == true){
              all_id_set.push(i);
              role.push('Department Manager');
            }else if (carIdentifier == true) {
              all_id_set.push(i);
              role.push('Car Assignee');
            } 
          }
        }
    };xhr.send();
   
  }
  function createTable(){
    const name = getLog.name;
    for (let i = 0; i < prepare_set.length; i++){
        createTableRow(i);
    } 
  }

  function Objectfilter(obj,char){
    const indexFound = [];
    Object.keys(obj).forEach((key)=>{
      if (key.includes(char)){
        indexFound.push(key)
      }
    })
    return indexFound;
  }

