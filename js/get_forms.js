import { getLoginInfo } from "./get_account.js";

var outData;
var data_names = {};
var data_id = {};
var data_dept = {};
var data_remarks = {};
var name1 = [];
var passOut = [];
var numOut = [];
var deptOut = [];
var imm_posOut = [];
var dept_posOut = [];
var id_set = [];
var date_create_set = [];
var date_trip_set = [];
var id_num_set = [];
var em_name_set = [];
var dept_name_set = [];
var arrangement_set = [];
var prepare_set = [];
var immediate_set = [];
var department_set = [];
var acknowledge_set = [];
var car_status = [];
var imm_status = [];
var dept_status = [];
var all_id_set = [];
var remark_app_set = [];
var role = [];
var count = 0;

var glog = getLoginInfo();
var name = glog.name;

export function searchName(name,inp, locDiv, idiv, depdiv) {
  inp.addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase();
    locDiv.innerHTML = '';
    var suggestions = name.filter(function(suggestion) {
      return suggestion.toLowerCase().includes(searchTerm);
    });

    suggestions.forEach(function(suggestion) {
      var div = document.createElement('div');
      div.textContent = suggestion;

      div.addEventListener('click', function() {
        var identify;
        inp.value = suggestion;
        for (var i = 0; i < name.length; i++) {
          if (!idiv || !depdiv) {
            locDiv.style.display = 'none';
          } else {
            if (name[i] === suggestion) {
              identify = i;
              depdiv.value = deptOut[identify];
              idiv.value = numOut[identify];
            }
          }
        }
        locDiv.style.display = 'none';
        locDiv.innerHTML = '';
      });

      locDiv.appendChild(div);
    });

    if (inp.value.trim() !== '') {
      locDiv.style.display = 'flex';
    } else {
      locDiv.style.display = 'none';
    }
  });

  document.addEventListener('click', function(event) {
    if (event.target !== inp) {
      locDiv.innerHTML = '';
      locDiv.style.display = 'none';
    }
  });
}
function removeAttributes(element, attributeNames) {
  const attributesList = element.attributes;
  
}
function updateDataArrays(parsedData) {
  id_set = [];
  date_create_set = [];
  date_trip_set = [];
  id_num_set = [];
  em_name_set = [];
  dept_name_set = [];
  arrangement_set = [];
  prepare_set = [];
  immediate_set = [];
  department_set = [];
  acknowledge_set = [];
  car_status = [];
  imm_status = [];
  dept_status = [];
  all_id_set = [];
  role = [];

// Your remaining code...


  // Update the data arrays with the new data
  for (var i = 0; i < parsedData.length; i++) {
        
    id_set = [];
    date_create_set = [];
    date_trip_set = [];
    id_num_set = [];
    em_name_set = [];
    dept_name_set = [];
    arrangement_set = [];
    prepare_set = [];
    immediate_set = [];
    department_set = [];
    acknowledge_set = [];
    car_status = [];
    imm_status = [];
    dept_status = [];
    all_id_set = [];
    remark_app_set = [];
    role = [];


  
    // Update the data arrays with the new data
    for (var i = 0; i < parsedData.length; i++) {
          
      var id = parsedData[i].id;
      var date_create = parsedData[i].date_create;
      var date_trip = parsedData[i].date_trip;
      var id_num = parsedData[i].id_num;
      var em_name = parsedData[i].em_name;
      var dept_name = parsedData[i].dept_name;
      var arrangement = parsedData[i].arrangement;
      var prepare = parsedData[i].prepare;
      var immediate = parsedData[i].immediate;
      var department = parsedData[i].department;
      var acknowledge = parsedData[i].acknowledge;
      var car_stats = parsedData[i].car_status;
      var imm_stats = parsedData[i].imm_status;
      var dept_stats = parsedData[i].dept_status;
      var remarks_in = parsedData[i].remarks_approver;

      id_set.push(id);
      date_create_set.push(date_create);
      date_trip_set.push(date_trip);
      id_num_set.push(id_num);
      em_name_set.push(em_name);
      dept_name_set.push(dept_name);
      arrangement_set.push(arrangement);
      prepare_set.push(prepare);
      immediate_set.push(immediate);
      department_set.push(department);
      acknowledge_set.push(acknowledge);
      car_status.push(car_stats);
      imm_status.push(imm_stats);
      dept_status.push(dept_stats);
      remark_app_set.push(remarks_in);
  }
}
}

    document.getElementById('arrange').style.display = "none"; 
    var car_check = document.getElementById("car_select");
    car_check.addEventListener('click', function(){
      if (car_check.value === "----" || car_check.value === "0"){
        document.getElementById('arrange').style.display = "none"; 
        document.getElementById('arrangement').value = "";
      } else if (car_check.value === "1"){
        document.getElementById('arrange').style.display  = "";
        document.getElementById('arrangement').value = "MA. CRISTINA D. PEREZ";
      }
    });

    var timezone = {timeZone: 'Asia/Manila'}
    var dateNow = new Date().toLocaleString('en-US', timezone);
    const dateOut = dateNow.split(",")[0];
    const originalDate = new Date();

    // Extract the year, month, and day components from the Date object
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, '0');
    const day = String(originalDate.getDate()).padStart(2, '0');

    // Create the formatted date string in the required format
    const formattedDateStr = `${year}-${month}-${day}`;

    document.getElementById("date_input").value = dateOut;
    document.getElementById("date_input2").value = formattedDateStr;
   

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../php/search.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const immediate_keywords = ['Senior','Supervisor']
        const department_keywords = ['Manager']
        var parsedData = JSON.parse(xhr.responseText);
        for (var i = 0; i < parsedData.length; i++) {
          var outdata = parsedData[i].emp_full;
          var pass = parsedData[i].emp_pass;
          var num = parsedData[i].emp_code;
          var dept = parsedData[i].empt_dept;
          let pos = parsedData[i].emp_pos;
          name1.push(outdata);
          passOut.push(pass);
          numOut.push(num);
          deptOut.push(dept);

          filterName ('Immediate', pos, immediate_keywords, imm_posOut, parsedData[i].emp_full);
          filterName ('Department', pos, department_keywords, dept_posOut, parsedData[i].emp_full);
        }
        console.log(dept_posOut);
    
        let prep_id = document.getElementById('prepare');
        prep_id.value = name;

        if(name.includes('GENERAL') || name.includes('WORK-ION') || name.includes('PKIMT') || name.includes('AVANCE') || name.includes('NATCORP')){
          let id_num = document.getElementById("id_num");
          let dept_set = document.getElementById("dept_name");

          id_num.removeAttribute("disabled");
          dept_set.removeAttribute("disabled")
        }
      }
      
    };
    xhr.send();
    fetchFromDatabase();
    function validateInputValueInArray(input, array) {
      var inputValue = input.value.trim();
      if (!array.includes(inputValue)) {
        input.setCustomValidity('Please select a value from the provided options.');
      } else {
        input.setCustomValidity('');
      }
    }
    function clearCustomValidity(input) {
      input.setCustomValidity('');
    }
    $(document).ready(function () {
      $('.inp').on('input', function () {
        clearCustomValidity(this);
      });
    });
    var form = document.getElementById('validate');
      form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log(form.checkValidity());
        var inputElements = document.querySelectorAll('.inp');
        let glog = getLoginInfo();
        let name = glog.name;
        if (!name.includes("GENERAL") || !name.includes('WORK-ION') || !name.includes('PKIMT') || !name.includes('AVANCE') || !name.includes('NATCORP')){
          for (var i = 0; i < inputElements.length; i++) {
            var input = inputElements[i];
            if ((input.id).includes('imm') || (input.id).includes('name') || (input.id).includes('dept') || (input.id).includes('id')){

            }else{
              validateInputValueInArray(input, name1);
            }
           
          }
        }
       
        if (form.checkValidity()) {
          var num_in = count;
          console.log('Submit inside triggered');
          while (num_in > 0){
            var setID = "id" + num_in;
            var setName = "name" + num_in;
            var setDept = "dept" + num_in;

          
            window[setID] = document.getElementById(`id_num${num_in}`).value;
            window[setName] = document.getElementById(`em_name${num_in}`).value;
            window[setDept] = document.getElementById(`dept_name${num_in}`).value;
          
      
            data_id[setID] = window[setID];
            data_names[setName] = window[setName];
            data_dept[setDept] = window[setDept];
            data_remarks[setRems] = window[setRems];
  
            num_in--;
          }
      
          console.log(data_names);
        
          var  nameData = document.getElementById("em_name").value;
          var num_data = document.getElementById("id_num").value;
          var dept_data = document.getElementById("dept_name").value;

      
          data_id["id0"] = num_data;
          data_names["name0"] = nameData;
          data_dept["dept0"] = dept_data;
      
          let prep = document.getElementById("prepare").value;
          let dept = document.getElementById("department").value;
          let imm = document.getElementById("immediate").value;
          let car = document.getElementById("car_select").value;

          let car_stat, dept_stat, imm_stat, ack_stat, car_assignee;
          if (car == 0){
            car_stat = "Approved"
            dept_stat = "Pending"
            imm_stat = "Pending"
            ack_stat = "Pending"
            document.getElementById("arrangement").value = ""
            if (imm.length<3){
              car_stat = "Approved"
              dept_stat = "Pending"
              imm_stat = "Approved"
              ack_stat = "Pending"
            }
          }else if(car == 1){
            car_stat = "Pending"
            dept_stat = "Pending"
            imm_stat = "Pending"
            ack_stat = "Pending"
  
            if (imm.length<3){
              car_stat = "Pending"
              imm_stat = "Approved"
              dept_stat = "Pending"
              ack_stat = "Pending"
            }
          } 
          outData = {
            date_made: document.getElementById("date_input").value,
            date_trip: document.getElementById("date_input2").value,
            id_nums: { ...data_id },
            em_names: { ...data_names },
            dept_names: { ...data_dept },
            res: document.getElementById("reason").value,
            time_from: document.getElementById("time_input").value,
            time_to: document.getElementById("time_input2").value,
            car_sel: document.getElementById("car_select").value,
            locate: document.getElementById("locate").value,
            arra: document.getElementById("arrangement").value,
            prep: prep,
            imm_super: imm,
            dept: dept,
            ackno: "",
            car_status: car_stat,
            imm_status: imm_stat,
            dept_status: dept_stat,
            ack_status: ack_stat
          };

          
          var xhr1 = new XMLHttpRequest();
          xhr1.open('POST', '../php/forms-server.php', true);
          xhr1.setRequestHeader('Content-Type', 'application/json'); // Update the Content-Type header
          xhr1.onreadystatechange = function() {
            if (xhr1.readyState === 4 && xhr1.status === 200) {
              console.log('Data stored');
            }
          };
          const jsonStr = JSON.stringify(outData, (key, value) => {
            if (typeof value === 'object') {
              return value; // Keep nested objects as is
            }
            return value; // Keep other values unchanged
          });
          xhr1.send(jsonStr); // Send the JSON data in the request body
          window.open('../php/home.php','_self')
          
        }else{
          form.classList.add('was-validated')
        }
      });
      
  function filterName (purpose, data, keywords, arrayout, name){
    if (purpose=='Immediate'){
      for (const keyword of keywords){
        if (data && data.includes(keyword) && !data.includes('Manager')){
          arrayout.push(name)
        }
      }
    }else if (purpose == 'Department'){
      for (const keyword of keywords){
        if (data && data.includes(keyword)){
          arrayout.push(name)
        }
      }
    }
    
  }

  $(document).on('click', '.inp', function () {
    
    const parent = this.id;
    const countCheck = parent.replace(/\D/g, '');
    const inp = document.getElementById(parent);
    const autoComp = document.getElementById(`auto_${parent}`);
    const count = parseInt(countCheck,10);
    console.log(parent);
    console.log(countCheck.length)

      autoComp.style.width = inp.offsetWidth + "px";
    
    if (countCheck.length!=0){
      if (parent.indexOf('em_name')!= -1){
        const id = document.getElementById(`id_num${count}`);
        const dept = document.getElementById(`dept_name${count}`)
        searchName(name1,inp,autoComp,id,dept);
      }else if (parent.indexOf('dep')!= -1) {
        searchName(dept_posOut, inp, autoComp);
      }else if (parent.indexOf('imm')!= -1){
        searchName(imm_posOut, inp, autoComp);
      }else if (parent.indexOf('arra')!= -1){
        searchName(imm_posOut, inp, autoComp);
      }
    }else{
      if (parent.indexOf('em_name')!= -1){
        const id = document.getElementById(`id_num`);
        const dept = document.getElementById(`dept_name`)
        searchName(name1,inp,autoComp,id,dept);
      }else if (parent.indexOf('dep')!= -1) {
        searchName(dept_posOut, inp, autoComp);
      }else if (parent.indexOf('imm')!= -1){
        searchName(imm_posOut, inp, autoComp);
      }else if (parent.indexOf('arra')!= -1){
        searchName(imm_posOut, inp, autoComp);
      }
    } 
    
  });
  $('#addLineButton').click(function() {
    count++;
    var newRow = $(`<div id="row${count}" class="d-flex flex-row"></div>`);
    var newidCol = $(`<div class="col-lg-2 mt-2"><input type="text" class="form-control" id="id_num${count}" placeholder="" required disabled></div>`);
    var newSearch = $(`<div class="user_search col-lg-4 mt-2">
                          <div class="container">
                            <input type="text" class="form-control inp" placeholder="" id="em_name${count}">
                            <div id="auto_em_name${count}" class="auto-items"></div>
                          </div>
                        </div>`);
    var newDept = $(`<div class="col-lg-2">
                          <input type="text" class="form-control mt-2" placeholder="" id="dept_name${count}" required disabled>
                          </div>`);

    newRow.append(newidCol);
    newRow.append(newSearch);
    newRow.append(newDept);

    $('.info_necessary').append(newRow);
  });

  // Remove added divs
  $('#remove-button').click(function() {
    $(`.info_necessary #row${count}`).remove(); // Remove all rows inside .info_necessary
    if (count > 0) {
      count--;
    }
  });
  function showToast(count, i){

    const toast = document.getElementById('contain-toast');
    const dynamic = document.createElement('div');
    const prepareName = String(prepare_set[count]);
    const getNameID = name1.indexOf(`${prepareName}`);
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
      <strong>${prepare_set[count]}</strong> from <strong>${deptOut[id]}</strong> has applied for a Gate pass
      <br><br>
      <strong>Role: ${role[i]}</strong>
    </div>
    </div>`
  toast.appendChild(dynamic);
  let toastOut = document.getElementById(`test-toast${count}`);
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastOut)
   toastBootstrap.show();
  }
  
  function fetchFromDatabase(){
    
    var xhr = new XMLHttpRequest();
  
    xhr.open('POST', '../php/get_tableData.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
    
      if (xhr.readyState === 4 && xhr.status === 200) {
        var parsedData = JSON.parse(xhr.responseText);
        updateDataArrays(parsedData);
  
        for(let i=0;i<immediate_set.length;i++){
          let getLogin = getLoginInfo();
          let userget = getLogin.name;
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
          console.log(role);
      
        }
    };xhr.send();
   
  }
  document.addEventListener('DOMContentLoaded', function(){
    let badgeCount = 0;
    for (let i = 0; i<all_id_set.length;i++){
      let count = all_id_set[i];
      let getRole = role[i];

      if (getRole.includes('Department')){
        if (imm_status[count] == 'Approved' && dept_status[count] == 'Pending'){
          badgeCount++;
        } 
      } else if (getRole.includes('Immediate')){
          if (imm_status[count] == 'Pending' && car_status[count] == 'Approved'){
          badgeCount++;
          } 
      } else if (getRole.includes('Car')){
        if (car_status[count]){
          badgeCount++;
        } 
      }
    }
  })


