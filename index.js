function convertor()
{
    let val=(Number)(document.getElementById("celcius").value);
    console.log(val);
    val=val*1.8;
    val+=32;
    console.log(val.toFixed(2));
    let path=document.getElementById("ans");
    path.innerHTML=(val.toFixed(2))+"F";
}

document.getElementById("clear").addEventListener("click",func);

function func()
{
    document.getElementById("celcius").value="";
    document.getElementById("ans").innerHTML="";
}