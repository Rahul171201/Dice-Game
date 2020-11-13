var randomnumber1 = Math.random();
randomnumber1 = randomnumber1*6;
randomnumber1++;
var y = Math.floor(randomnumber1);  // stores a random number from 1-6 (including both)

document.querySelector("img.img1").setAttribute("src", "images/dice"+y+".png");

var randomnumber2 = Math.random();
randomnumber2 = randomnumber2*6;
randomnumber2++;
var z = Math.floor(randomnumber2);  // stores a random number from 1-6 (including both)

document.querySelector("img.img2").setAttribute("src", "images/dice"+z+".png");


if(y===z)
{
    document.querySelector("h1").textContent = "Draw";
}
else if(y>z)
{
    document.querySelector("h1").textContent = "Player 1 Wins";
}
else{
    document.querySelector("h1").textContent = "Player 2 Wins";
}