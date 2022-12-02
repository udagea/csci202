var story = 0;
var form = document.getElementById('theStory')
var answer = '';
var submit = document.getElementById('continueButton')
var counter = 1;
//Change Channel
function myFunction() {
    var x = document.getElementById("tvImage_1");
    var y = document.getElementById("tvImage_2");
    var z = document.getElementById("tvImage_3");
    var a = document.getElementById("tvImage_4");

    var counter = 1;

    imgClickAndChange.onclick = function myFunction(){
        if(counter == 0){
            x.style.display = "block";
            a.style.display = "none";
            counter++;
        }
        else if(counter == 1){
            y.style.display = "block";
            x.style.display = "none";
            counter++;
        }
        else if(counter == 2){
            z.style.display = "block";
            y.style.display = "none";
            counter++;
        }
        else if(counter == 3){
            a.style.display = "block";
            z.style.display = "none";
            counter = 0;
        }
    document.getElementById("proceedButton").onclick = function changeLocation() {
        if (counter == 3){
            location.href = "home.html";
        }
        else if(counter == 1){
            location.href = "home.html";
        }
    };
    }
}
// if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//     y.style.display = "block";
//     z.style.display = "block";
//     a.style.display = "block";
//   }
// }