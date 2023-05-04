// alert("Working");

// for first dice
var randomNumber1 = Math.floor(Math.random()* 6) + 1;
var DiceNumber1 = "Images/" + "dice" + randomNumber1 + ".jpg";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", DiceNumber1);

// for second dice
var randomNumber2 = Math.floor(Math.random()* 6) + 1;
var DiceNumber2 = "Images/" + "dice" + randomNumber2 + ".jpg";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", DiceNumber2);

// NOTATIONS
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 wins";
    
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML = "DRAW!!";
}



