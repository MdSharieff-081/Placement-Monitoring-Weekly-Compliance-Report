function createTable() {
     var num_rows = document.getElementById("num-rows").value;
     var table_container = document.getElementById("table-container");
     var table_html = "<table>";
     table_html += "<thead><tr><th>College Code</th><th>Branch</th><th>NO OF INDUSTRIES VISITED THE POLYTECHNIC FOR CAMPUS DRIVE</th><th>NAME(S) OF INDUSTRIES VISITED FOR CAMPUS DRIVE</th><th class='red'>NO OF INDUSTRIES VISITED THE POLYTECHNIC THIS WEEK</th><th class='red'>NO OF STUDENTS PLACED THIS WEEK</th><th>CUMULATIVE NO OF STUDENTS PLACED</th><th>CUMULATIVE NO OF STUDENTS PLACED IN CTE CENTRALIZED DRIVES</th><th>REMARKS</th></tr></thead>";
     for (var i = 0; i < num_rows; i++) {
       table_html += "<tr>";
       table_html += "<td><input type='number' class='cell1' id='cell_" + i + "_0' disabled></td>";
       table_html += "<td><select class='cell' id='cell_" + i + "_1' required>" +
                     "<option value='' selected disabled>SELECT THE BRANCH</option>" +
                     "<option value='DAEIE '>DAEIE</option>" +
                     "<option value='DAIM '>DAIM</option>" +
                     "<option value='DAA '>DAA</option>" +
                     "<option value='DAE '>DAE</option>" +
                     "<option value='DCCP '>DCCP</option>" +
                     "<option value='DCE '>DCE</option>" +
                     "<option value='DCME '>DCME</option>" +
                     "<option value='DCHST '>DCHST</option>" +
                     "<option value='DECE '>DECE</option>" +
                     "<option value='DEEE '>DEEE</option>" +
                     "<option value='DGT '>DGT</option>" +
                     "<option value='DME '>DME</option>" +
                     "<option value='DMIN '>DMIN</option>" +
                     "<option value='DBME '>DBME</option>" +
                     "<option value='DCER '>DCER</option>" +
                     "<option value='DCHE '>DCHE</option>" +
                     "<option value='DCHOT '>DCHOT</option>" +
                     "<option value='DCHPC '>DCHPC</option>" +
                     "<option value='DCHPP '>DCHPP</option>" +
                     "<option value='DMET '>DMET</option>" +
                     "<option value='DTT '>DTT</option>" +
                     "<option value='DTT (MPEC) '>DTT (MPEC)</option>" +
                     "<option value='DPH '>DPH</option>" +
                     "<option value='DAMG '>DAMG</option>" +
                     "<option value='DAM '>DAM</option>" +
                     "<option value='DWD '>DWD</option>" +
                     "<option value='DCAI '>DCAI</option>" +
                     "<option value='DCCB '>DCCB</option>" +
                     "<option value='DCCN '>DCCN</option>" +

                     "</select></td>";
       table_html += "<td><textarea  class='error1' class='cell' id='cell_" + i + "_2' rows='5' cols='25'></textarea></td>";
       table_html += "<td><textarea  class='error1' class='cell' id='cell_" + i + "_3' rows='5' cols='25'></textarea></td>";
       table_html += "<td><textarea  class='error1' class='cell' id='cell_" + i + "_4' rows='5' cols='25'></textarea></td>";
       table_html += "<td><textarea  class='error1' class='cell' id='cell_" + i + "_5' rows='5' cols='25'></textarea></td>";
       table_html += "<td><textarea  class='error1' class='cell' id='cell_" + i + "_6' rows='5' cols='25'></textarea></td>";
       table_html += "<td><textarea  class='error1' class='cell' id='cell_" + i + "_7' rows='5' cols='25'></textarea></td>";
       table_html += "<td><textarea  class='error1' class='cell' id='cell_" + i + "_8' rows='5' cols='25'></textarea></td>";
       table_html += "</tr>";
     }
     table_html += "</table>";
     table_container.innerHTML = table_html;
     collegecode();
   }

   function updateTotal(input) {
     var row = input.parentNode.parentNode;
     var first = parseInt(row.querySelector("td:nth-child(3) input").value);
     var second = parseInt(row.querySelector("td:nth-child(4) input").value);
     var total = first + second;
     row.querySelector("td:nth-child(5) input").value = total;
     
   }

   function storeTableData() {
     var num_rows = document.getElementById("num-rows").value;
     var data = [];
     for (var i = 0; i < num_rows; i++) {
       var row_data = [];
       for (var j = 0; j < 9; j++) {
         var cell_value = document.getElementById("cell_" + i + "_" + j).value;
         row_data.push(cell_value);
       }
       data.push(row_data);
     }
     google.script.run.storeTableData(data);
   }

   function collegecode(){
   var collegecode=document.getElementById("collegecode").value;
   var numrows = document.getElementById("num-rows").value;
   for (var i = 0; i < numrows; i++) {
     document.getElementById("cell_" + i + "_0").value=collegecode;  
   }
   }
const enterDataBtn = document.getElementById("enter-data-btn");
     const submitBtn = document.getElementById("submit-btn");

     enterDataBtn.addEventListener("click", () => {
       submitBtn.style.display = "block";
     });
     

     function fun1(){
       let myVariable = "PLEASE ENTER THE FOLLOWING DATA";
document.getElementById("my-element").textContent = myVariable;
     }
 function enableEnterDataBtn() {
 var selectBox = document.getElementById("collegecode");
 var inputBox = document.getElementById("num-rows");
 var enterBtn = document.getElementById("enter-data-btn");

 if (selectBox.selectedIndex != 0 && inputBox.value >= 1 && inputBox.value <= 15) {
   enterBtn.disabled = false;
 } else {
   enterBtn.disabled = true;
 }
}    
function submitForm() {
   if (window.confirm('Click Ok to Confirm or Cancel to Stay here'))
   {
       //alert("This will Redirect YOU ");
       document.getElementById("myForm").reset();
       window.open("https://script.google.com/macros/s/AKfycbzhSx72_c7s8InuNgVCQVVx4qeqP6y3mdxqpKb_1guhw0JBVxvjZKDkYJ70ziUop5dxsg/exec");
       //location.reload();
       
    }
}
function generatepdf(){
     const element = document.getElementById("Ravi");


     html2pdf()
     .from(element)
     .save();
}