function rangeValue(range, label)
{
    document.getElementById(label).innerHTML = document.getElementById(range).value
}

function getValue()
{
    var rangeNumber = document.getElementById("nummer").value;
    var bishNumber = document.getElementById("bish").value;
    var boshNumber = document.getElementById("bosh").value;
    var bishboshlist = document.getElementById("bishbosh-grid");

    bishboshlist.innerHTML = "";

    for(let i = 1; i <= rangeNumber; i++)
    {

        var item = document.createElement("div");
       
        item.style.background = "grey";
     
        bishboshlist.appendChild(item);
        
        if(i % bishNumber == 0 && i % boshNumber == 0){

            item.innerHTML = "Bish-Bosh";
            item.style.backgroundColor = "green";
            bishboshlist.appendChild(item);

        }
        else if(i % bishNumber == 0){
            item.innerHTML = "Bish";
            item.style.backgroundColor = "red";
            bishboshlist.appendChild(item);
        }
        else if(i % boshNumber == 0){
            item.innerHTML = "Bosh";
            item.style.backgroundColor = "blue";
            bishboshlist.appendChild(item);
        }
        else{
            item.innerHTML = i;
            bishboshlist.appendChild(item);
        }
    }
}