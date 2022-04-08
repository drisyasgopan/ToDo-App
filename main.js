
fetch("todo.json").then((data)=>{
    //  console.log(data);
     return data.json();
}).then((objectData)=>{
     console.log(objectData[0].title);
     let tableData="";
     objectData.map((values)=>{
        tableData+=` <tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td><input class="form-check-input me-1" type="checkbox" name="chk" onclick="return myFun()" ="${values.completed}"/></td>
      </tr>`;
        
    });
     document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})

function myFun(){
    var a = document.getElementsByName('chk');
    var newvar = 0;
    var count;
    for(count=0; count<a.length; count++){
        if(a[count].checked==true){
            newvar=newvar + 1;
        }
    }

    if (newvar>=6){
        alert("Congrats. 5 Tasks have been Successfully Completed.");
        return false;
    }
}











