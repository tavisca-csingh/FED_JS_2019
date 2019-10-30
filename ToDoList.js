var todoLists = [];
var Item = localStorage.getItem("item");

function AddFunction() {
        var flag=0;
        var inputValue = document.getElementById("todolistItem").value;
        inputValue=inputValue.toUpperCase();

        tdData = document.createElement("td");
        tdEdit = document.createElement("td");
        tdDelete = document.createElement("td");
        tr = document.createElement("tr");
        t = document.createTextNode(inputValue);
        buttonDelete = document.createElement("button");
        buttonEdit = document.createElement("button");
        buttonDelete.innerHTML="Delete";
        buttonEdit.innerHTML="Edit";
        buttonEdit.setAttribute('onclick', 'EditRow(this)');
        buttonDelete.setAttribute('onclick', 'removeRow(this)');
        tdData.appendChild(t);
        tdEdit.appendChild(buttonEdit);
        tdDelete.appendChild(buttonDelete);

        tr.appendChild(tdData);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);


        if (inputValue === '') {
          alert("You must write something!");
        } else {
            for(let i=0; i<todoLists.length;i++)
              {
                if(inputValue===todoLists[i])
                {
                  flag=1;
                }
              }
              if(flag===1)
              {
                  alert(inputValue +" item is already present");
              }
              else
              {
                document.getElementById("table").appendChild(tr);
                todoLists.push(inputValue);
              }
          }
        document.getElementById("todolistItem").value = "";
}


function search(value) {
          Item= localStorage.getItem("item");
          document.getElementById("datalist").innerHTML = '';
          for (var i = 0; i<Item.length; i++) {
            if(((Item[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
            {
              var node = document.createElement("option");
              var val = document.createTextNode(Item[i]);
              node.appendChild(val);
              document.getElementById("datalist").appendChild(node);
            }
          }
      }


function removeRow(oButton) {
  var table = document.getElementById('table');
  var index = oButton.parentNode.parentNode.rowIndex;
  table.deleteRow(index);
  todoLists.splice(index, 1);
}

function EditRow(oButton) {
  var table=document.getElementById('table').rows;
  var cell=table[oButton.parentNode.parentNode.rowIndex].cells;
  var inputValue = prompt("Enter your new item : ");
  inputValue=inputValue.toUpperCase();
  var flag=0;
   if (inputValue === '') {
    alert("You must write something!");
  } else {
      for(let i=0; i<todoLists.length;i++)
        {
          if(inputValue===todoLists[i])
          {
            flag=1;
          }
        }
        if(flag===1)
        {
            alert(inputValue +" item is already present");
        }
        else
        {
          cell[0].innerHTML=inputValue;
           var index = oButton.parentNode.parentNode.rowIndex;
          todoLists[index]=inputValue;
        }
 }
}
