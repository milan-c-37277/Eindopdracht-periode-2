
let checkbox = document.getElementById("taalswitch");
checkbox.addEventListener("click",(e)=>
{
    console.log(e.target.checked);
    if(e.target.checked == true) {
        window.location.href ="./engels.html";
    } else {
        window.location.href ="./index.html";
    }
});