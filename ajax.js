
function ajax() {
    var xhttp = new XMLHttpRequest();

    //extra
    var table = document.getElementById("grocerytable");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
            tblCustomers.deleteRow(i);
        }

    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            
            var grocerylist = response.grocery;
            
for (var i = 0; i < grocerylist.length; i++) {
      var row = table.insertRow(i + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = grocerylist[i].SeriaNno;
    cell2.innerHTML = grocerylist[i].Itemname;
    cell3.innerHTML = grocerylist[i].Quantity;
    cell4.innerHTML = grocerylist[i].Unit;
    cell5.innerHTML = grocerylist[i].Department;
    cell6.innerHTML = grocerylist[i].Notes;
}
        }
    }

  
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
  
}

  