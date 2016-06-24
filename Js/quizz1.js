/**
 * Created by itc_user on 6/15/2016.
 */



var sum=0;
function testMyAge (){
    var fage=document.getElementById("age").value;
    if (parseInt(fage)<30){
        sum=sum+1;
    }
    else if (parseInt(fage)<36){
        sum=sum+2;
    }
    else if (parseInt(fage)<50){
        sum=sum+3;
    }
    else {
        sum=sum+4;
    }
     


}
function testMyColor () {
    var color = document.getElementsByClassName("favColor")[0].value;
    var answerValues = {"PINK": 1, "RED": 2, "BLACK":3, "YELLOW GOLD":4};
    if (color.toUpperCase() in answerValues) {
        sum += answerValues[color.toUpperCase()];

    }


}


function isChecked(className){
    var vacGroup=document.getElementsByClassName(className);
    for (var i=0; i < vacGroup.length; i++) {
        var btn = vacGroup[i];
        if (btn.checked) {
            sum = sum + parseInt(btn.value);
        }
    }
}


function isChosen(){
    var evilGroup=document.getElementsByClassName("evil");
    for (var i=0; i < evilGroup.length; i++) {
        var btn = evilGroup[i];
        if (btn.selected) {
            sum = sum + parseInt(btn.value);
        }
    }
}




function checkSum(){
    testMyAge();
    testMyColor();
    isChecked("vacay");
    isChosen();
    isChecked("favWord");
    isChecked("important");

}

function checkScore(){
    checkSum();
    if (sum>0 && sum<11){
        document.querySelector("div.score").innerHTML="<h1>You are Kim Kardashian </h1> " +
            "<img src='../IMAGES/kim.jpg'>"+
            "<p>" +
            "You are a very hard worker and you love to shop and spend the money you worked so " +
            "hard to gain.You do not mind people knowing your every move and you actually like to be the center of attention"+
            "</p>";
    }
    else if (sum>11 && sum<16){
        document.querySelector("div.score").innerHTML="<h1>You are Adam Levine </h1> <br>" +
            "<img src='../IMAGES/adam.jpg'>"+
            "<p>" +
            "you love nice things and you have a passion for music."+
            "</p>";
    }
    else if (sum>16 && sum<20) {
        document.querySelector("div.score").innerHTML = "<h1>You are Daniel Craig </h1> <br>" +
            "<img src='../IMAGES/jamesbond.jpg'>"+
            "<p>" +
            "You are a quiet very smart and strong personYou have all the qualities to be an amazing spy You probably speak more than one langage"+
            "</p>" ;
    }
    else {

        document.querySelector("div.score").innerHTML = "<h1>You are Donald Trump </h1> <br>" +
            "<img src='../IMAGES/trump.jpg'>"+
            "<p>" +
            "You are very oppinionated and love to share your opinions with others? Your hair looks amazing!"+
            "</p>" ;

    }
    document.getElementById("lightbox").style.display = "block";
}

