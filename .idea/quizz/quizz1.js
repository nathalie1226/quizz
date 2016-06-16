/**
 * Created by itc_user on 6/15/2016.
 */

function sayMyName (){
    var fname=document.getElementById("firstName").value;
    alert("hello "+fname+ " Welcome to our quizz");
}

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
     
    console.log(sum);

}
function testMyColor (){
    var color=document.getElementById("favColor").value;
    switch(color.toUpperCase()){
        case 'PINK':
            sum=sum+1;
            break;
        case 'RED':
            sum=sum+2;
            break;
        case 'BLACK':
            sum=sum+3;
            break;
        case 'YELLOW GOLD':
            sum=sum+4;
            break;
    }

console.log(sum);

}

function isChecked(){

    if (document.getElementById("island").checked){
        sum=sum+1;
    }
    if (document.getElementById("world").checked){
        sum=sum+2;
    }
    if (document.getElementById("cottage").checked){
        sum=sum+3;
    }
     if (document.getElementById("germany").checked){
        sum=sum+4;
    }

    console.log(sum);
}



function isChosen(){

    if (document.getElementById("villain").value === "bambi (i hate villains)"){
        sum=sum+1;
    }
    else if (document.getElementById("villain").value === "The dragon in sleeping beauty"){
        sum=sum+2;
    }
    else if (document.getElementById("villain").value === "jafar (alladin)"){
        sum=sum+3;
    }
    else if (document.getElementById("villain").value === "scar (the lion king)"){
        sum=sum+4;
    }

    console.log(sum);
}

function isRadioChecked(){

    if (document.getElementById("beauty").checked){
        sum=sum+1;
    }
    if (document.getElementById("loyal").checked){
        sum=sum+2;
    }
    if (document.getElementById("fight").checked){
        sum=sum+3;
    }
    if (document.getElementById("power").checked){
        sum=sum+4;
    }

    console.log(sum);
}

function isButtonClicked(){

    if (document.getElementById("wealth").checked){
        sum=sum+1;
    }
    else if (document.getElementById("health").checked){
        sum=sum+2;
    }
    else if (document.getElementById("honor").checked){
        sum=sum+3;
    }
    else if (document.getElementById("winning").checked){
        sum=sum+4;
    }

    console.log(sum);
}

function checkScore(){
    if (sum>0 && sum<11){
        document.querySelector("div.score").innerHTML="<h1>You are Kim Kardashian </h1> " +
            "<img src='./kim.jpg'>"+
            "<p>" +
            "You are a very hard worker and you love to shop and spend the money you worked so " +
            "hard to gain.You do not mind people knowing your every move and you actually like to be the center of attention"+
            "</p>";
    }
    else if (sum>11 && sum<16){
        document.querySelector("div.score").innerHTML="<h1>You are Adam Levine </h1> <br>" +
            "<img src='./adam.jpg'>"+
            "<p>" +
            "you love nice things and you have a passion for music."+
            "</p>";
    }
    else if (sum>16 && sum<20) {
        document.querySelector("div.score").innerHTML = "<h1>You are Daniel Craig </h1> <br>" +
            "<img src='./jamesbond.jpg'>"+
            "<p>" +
            "You are a quiet very smart and strong personYou have all the qualities to be an amazing spy You probably speak more than one langage"+
            "</p>" ;
    }
    else {

        document.querySelector("div.score").innerHTML = "<h1>You are Donald Trump </h1> <br>" +
            "<img src='./trump.jpg'>"+
            "<p>" +
            "You are very oppinionated and love to share your opinions with others? Your hair looks amazing!"+
            "</p>" ;

    }

}
