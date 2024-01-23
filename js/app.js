
// Engels  |  Nederlands  Knop
let checkbox = document.getElementById("taalswitch");
checkbox.addEventListener("click", (e) => {
    if (e.target.checked == true) {
        window.location.href = "./engels.html";


    } else {
        window.location.href = "./index.html";
    }
});

// Background change
function start() {
    var rotator = document.getElementById("rotader");
    var imageDir = './asset/';
    var delayInSeconds = 1;

    var images = ['background.png', 'UFO_NXT_Museum4.png', 'nxt-01-credit-peter-tijhuis-1920x1426.jpg'];

    var num = 0;
    var changeImage = function () {
        var len = images.length;
        rotator.src = imageDir + images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 4000);
};
window.onload = function () {
    start();
}


 // reviews
function randomReview(reviewID) {
    let arrNaam = ["brent", "daniel ", "lars ", "olgun", "milan"]
    let arr = ["Ik vond het erg leuk ik zou er weer naar toe gaan", "Ik vond het wel prima ik zou het wel aan raden aan mensen die interese hebben in media", "Niet leuk ik zou hier Nooit meer naar toe komen niet een aanrader ", "Prima....", "Saai...",]

    let random1 = Math.floor(Math.random() * arrNaam.length)
    let random2 = Math.floor(Math.random() * arr.length)
    let beschrijfing = arr[random2]
    let naam = arrNaam[random1]

    console.log(random1, random2, beschrijfing, naam)

    const para = document.createElement("p");
    const node = document.createTextNode(beschrijfing);
    para.appendChild(node);
    const element = document.getElementById(reviewID);
    element.appendChild(para);
}
randomReview("review1")
randomReview("review2")


// Read  more

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Meer";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Minder";
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "Meer";
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Minder";
      moreText2.style.display = "inline";
    }
  }


  function myFunction3() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");
  
    if (dots3.style.display === "none") {
      dots3.style.display = "inline";
      btnText3.innerHTML = "Meer";
      moreText3.style.display = "none";
    } else {
      dots3.style.display = "none";
      btnText3.innerHTML = "Minder";
      moreText3.style.display = "inline";
    }
  }




  