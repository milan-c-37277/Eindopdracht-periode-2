let checkbox = document.getElementById("taalswitch");
checkbox.addEventListener("click",(e)=>
{
    if(e.target.checked == true) {
        window.location.href ="./engels.html";
        

    } else {
        window.location.href ="./index.html";
    }
});

function start() {
    var rotator = document.getElementById("rotader");
    var imageDir = './asset/';                          
    var delayInSeconds = 1;                            

    var images = ['background.png', 'UFO_NXT_Museum4.png', 'nxt-01-credit-peter-tijhuis-1920x1426.jpg'];

    var num = 0;
    var changeImage = function() {
        var len = images.length;
        rotator.src = imageDir + images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 4000);
};
window.onload=function(){
start();
}
