//Array for every changing variable in the game.
let gameState = [
  {
    name: "potatoCost",
    value: 65,
    inventory: 0 },
  {
    name: "spudCost",
    value: 100,
    inventory: 0 },
  {
    name: "mashCost",
    value: 50,
    inventory: 0 },
  {
    name: "sPotatoCost",
    value: 85,
    inventory: 0 },
  {
    name: "taterCost",
    value: 70,
    inventory: 0 },
  {
    name: "iPotatoCost",
    value: 120,
    inventory: 0 },
  {
    name: "timer",
    value: null },
  {
    name: "cash",
    value: 150 },
];

let timer;
let timer2;
let randomChance;

function startUp()
{
  allChecks();
  timer = setInterval(changePrice, 1000);
  timer2 = setInterval(priceBoom, 5000);
}

//function I can call to check and update each variable in html.
function allChecks()
{
  document.getElementById("cash").innerHTML = (gameState[7].value).toFixed(1);
  document.getElementById("potatoCost").innerHTML = (gameState[0].value).toFixed(1);
  document.getElementById("spudCost").innerHTML = (gameState[1].value).toFixed(1);
  document.getElementById("mashCost").innerHTML = (gameState[2].value).toFixed(1);
  document.getElementById("sPotatoCost").innerHTML = (gameState[3].value).toFixed(1);
  document.getElementById("taterCost").innerHTML = (gameState[4].value).toFixed(1);
  document.getElementById("iPotatoCost").innerHTML = (gameState[5].value).toFixed(1);
  document.getElementById("potatoInventory").innerHTML = gameState[0].inventory;
  document.getElementById("spudInventory").innerHTML = gameState[1].inventory;
  document.getElementById("mashInventory").innerHTML = gameState[2].inventory;
  document.getElementById("sPotatoInventory").innerHTML = gameState[3].inventory;
  document.getElementById("taterInventory").innerHTML = gameState[4].inventory;
  document.getElementById("iPotatoInventory").innerHTML = gameState[5].inventory;
}

function priceBoom() 
{
    const randomIncrease = Math.floor(Math.random() * 360);

    if (randomIncrease >= 1 && randomIncrease <= 10) {
        (gameState[0].value *= 3).toFixed(0);
        document.getElementById('increase1').innerHTML = 'The Price of Potatoes has risen rapidly!';
        document.getElementById('increase1').style.color = 'blue';
        setTimeout(() => {
        document.getElementById('increase1').innerHTML = ""; }, 5000);  
}

  if(randomIncrease >= 11 && randomIncrease <= 20){
    (gameState[1].value *= 3).toFixed(0);
    document.getElementById('increase2').innerHTML = 'The Price of Spuds has risen rapidly!';
    document.getElementById('increase2').style.color = 'blue';
    setTimeout(() => {
    document.getElementById('increase2').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 21 && randomIncrease <= 30){
    (gameState[2].value *= 3).toFixed(0);
    document.getElementById('increase3').innerHTML = 'The Price of Mash has risen rapidly!';
    document.getElementById('increase3').style.color = 'blue';
    setTimeout(() => {
    document.getElementById('increase3').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 31 && randomIncrease <= 40){
    (gameState[3].value *= 3).toFixed(0);
    document.getElementById('increase4').innerHTML = 'The Price of Sweet Potato has risen rapidly!';
    document.getElementById('increase4').style.color = 'blue';
    setTimeout(() => {
    document.getElementById('increase4').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 41 && randomIncrease <= 50){
    (gameState[4].value *= 3).toFixed(0);
    document.getElementById('increase5').innerHTML = 'The Price of Taters has risen rapidly!';
    document.getElementById('increase5').style.color = 'blue';
    setTimeout(() => {
    document.getElementById('increase5').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 51 && randomIncrease <= 60){
    (gameState[5].value *= 3).toFixed(0);
    document.getElementById('increase6').innerHTML = 'The Price of Irish Potatoes has risen rapidly!';
    document.getElementById('increase6').style.color = 'blue';
    setTimeout(() => {
    document.getElementById('increase6').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 61 && randomIncrease <= 70){
    (gameState[0].value /= 3).toFixed(0);
    document.getElementById('increase1').innerHTML = 'The Price of Potatoes has decreased rapidly!';
    document.getElementById('increase1').style.color = 'rgb(220,20,60)';
    setTimeout(() => {
    document.getElementById('increase1').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 71 && randomIncrease <= 80){
    (gameState[1].value /= 3).toFixed(0);
    document.getElementById('increase2').innerHTML = 'The Price of Spuds has decreased rapidly!';
    document.getElementById('increase2').style.color = 'rgb(220,20,60)';
    setTimeout(() => {
    document.getElementById('increase2').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 81 && randomIncrease <= 90){
    (gameState[2].value /= 3).toFixed(0);
    document.getElementById('increase3').innerHTML = 'The Price of Mash has decreased rapidly!';
    document.getElementById('increase3').style.color = 'rgb(220,20,60)';
    setTimeout(() => {
    document.getElementById('increase3').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 91 && randomIncrease <= 100){
    (gameState[3].value /= 3).toFixed(0);
    document.getElementById('increase4').innerHTML = 'The Price of Sweet Potato has decreased rapidly!';
    document.getElementById('increase4').style.color = 'rgb(220,20,60)';
    setTimeout(() => {
    document.getElementById('increase4').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 101 && randomIncrease <= 110){
    (gameState[4].value /= 3).toFixed(0);
    document.getElementById('increase5').innerHTML = 'The Price of Taters has decreased rapidly!';
    document.getElementById('increase5').style.color = 'rgb(220,20,60)';
    setTimeout(() => {
    document.getElementById('increase5').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 111 && randomIncrease <= 120){
    (gameState[5].value /= 3).toFixed(0);
    document.getElementById('increase6').innerHTML = 'The Price of Irish Potatoes has decreased rapidly!';
    document.getElementById('increase6').style.color = 'rgb(220,20,60)';
    setTimeout(() => {
    document.getElementById('increase6').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 121 && randomIncrease <= 130){
    gameState[0].inventory = 0;
    document.getElementById('increase7').innerHTML = 'Flood sweeps throughout! Lose all normal potatoes!';
    document.getElementById('increase7').style.color = 'rgb(220,20,60)';
    setTimeout(() => {
    document.getElementById('increase7').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 131 && randomIncrease <= 140){
    gameState[5].inventory = 0;
    document.getElementById('increase7').innerHTML = 'All of Ireland invades! They steal back their taters!';
    document.getElementById('increase7').style.color = 'rgb(220,20,60)';
    setTimeout(() => {
    document.getElementById('increase7').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 141 && randomIncrease <= 150){
    gameState[5].value += 10;
    gameState[4].value += 10;
    gameState[3].value += 10;
    gameState[2].value -= 10;
    gameState[1].value -= 10;
    gameState[0].value -= 10;
    document.getElementById('increase7').innerHTML = 'Inflation hits, yet normal potatoes drop';
    document.getElementById('increase7').style.color = 'rgb(220,20,60)';
    setTimeout(() => {
    document.getElementById('increase7').innerHTML = ""; }, 5000);  
  }

  if(randomIncrease >= 151 && randomIncrease <= 160){
    gameState[5].value -= 10;
    gameState[4].value -= 10;
    gameState[3].value -= 10;
    gameState[2].value += 10;
    gameState[1].value += 10;
    gameState[0].value += 10;
    document.getElementById('increase7').innerHTML = 'Inflation hits, yet exotic potatoes drop';
    document.getElementById('increase7').style.color = 'rgb(220,20,60)';
    setTimeout(() => {
    document.getElementById('increase7').innerHTML = ""; }, 5000);  
  }
  allChecks();
}

function changePrice()
{
  //each commodity has 6 ways to change: -1, +1, -6, +6, and 2 randoms out of 5 which either minus or plus. In a differing order to increase randomness
  randomChance = Math.floor(Math.random() * 6); 
  if(randomChance == 0)
    {
      gameState[0].value += 1;
      gameState[1].value -= 1;
      gameState[2].value -= 1;
      gameState[3].value += 1;
      gameState[4].value += 6;
      gameState[5].value -= 6;

    }
  else if(randomChance == 1)
    {
      gameState[0].value -= 1;
      gameState[1].value += 1;
      gameState[2].value += 6;
      gameState[3].value -= 6;
      gameState[4].value += 1;
      gameState[5].value -= 1;
    }
  else if(randomChance == 2)
    {
      gameState[0].value -= 6;
      gameState[1].value += 6;
      gameState[2].value += 1;
      gameState[3].value -= 1;
      gameState[4].value -= 6;
      gameState[5].value += 6;
    }
  else if(randomChance == 3)
    {
      gameState[0].value += 6;
      gameState[1].value -= 6;
      gameState[2].value -= 6;
      gameState[3].value += 6;
      gameState[4].value -= 1;
      gameState[5].value += 1;
    }
  else if(randomChance == 4)
    {
      gameState[0].value += Math.ceil(Math.random() * 5);
      gameState[1].value += Math.ceil(Math.random() * 5);
      gameState[2].value += Math.ceil(Math.random() * 5);
      gameState[3].value += Math.ceil(Math.random() * 5);
      gameState[4].value += Math.ceil(Math.random() * 5);
      gameState[5].value += Math.ceil(Math.random() * 5);
    }
  else if(randomChance == 5)
      {
        gameState[0].value -= Math.ceil(Math.random() * 5);
        gameState[1].value -= Math.ceil(Math.random() * 5);
        gameState[2].value -= Math.ceil(Math.random() * 5);
        gameState[3].value -= Math.ceil(Math.random() * 5);
        gameState[4].value -= Math.ceil(Math.random() * 5);
        gameState[5].value -= Math.ceil(Math.random() * 5);
      }
//block for resetting prices (+= anywhere from 5 to 30), and preventing negative numbers.
    if(gameState[0].value <= 0) {
      gameState[0].value += 10;
    }

    else if(gameState[1].value <= 0) {
      gameState[1].value += 5;
    }

    else if(gameState[2].value <= 0) {
      gameState[2].value += 15;
    }

    else if(gameState[3].value <= 0) {
      gameState[3].value += 20;
    }

    else if(gameState[4].value <= 0) {
      gameState[4].value += 30;
    }

    else if(gameState[5].value <= 0) {
      gameState[5].value += 20;
    }

//block for resetting prices that go too high
if(gameState[0].value >= 1000) {
  gameState[0].value -= 500;
}

else if(gameState[1].value >= 1000) {
  gameState[1].value -= 550;
}

else if(gameState[2].value >= 1000) {
  gameState[2].value -= 600;
}

else if(gameState[3].value >= 1000) {
  gameState[3].value -= 450;
}

else if(gameState[4].value >= 1000) {
  gameState[4].value -= 400;
}

else if(gameState[5].value >= 1000) {
  gameState[5].value -= 500;
}
    allChecks();
  }
//block for buy and sell functions. Every one hits allChecks(); for convenience.
function clkPurchase()
{
  if(gameState[7].value >= gameState[0].value) {
  gameState[0].inventory += 1;
  gameState[7].value -= gameState[0].value;
  allChecks(); }
}

function clkSell()
{
  if(gameState[0].inventory > 0) {
  gameState[0].inventory -= 1;
  gameState[7].value += gameState[0].value;
  allChecks(); }
}

function clkPurchase2()
{
  if(gameState[7].value >= gameState[1].value) {
  gameState[1].inventory += 1;
  gameState[7].value -= gameState[1].value;
  allChecks(); }
}

function clkSell2()
{
  if(gameState[1].inventory > 0) {
  gameState[1].inventory -= 1;
  gameState[7].value += gameState[1].value;
  allChecks(); }
}

function clkPurchase3()
{
  if(gameState[7].value >= gameState[2].value) {
  gameState[2].inventory += 1;
  gameState[7].value -= gameState[2].value;
  allChecks(); }
}

function clkSell3()
{
  if(gameState[2].inventory > 0) {
  gameState[2].inventory -= 1;
  gameState[7].value += gameState[2].value;
  allChecks(); }
}

function clkPurchase4()
{
  if(gameState[7].value >= gameState[3].value) {
  gameState[3].inventory += 1;
  gameState[7].value -= gameState[3].value;
  allChecks(); }
}

function clkSell4()
{
  if(gameState[3].inventory > 0) {
  gameState[3].inventory -= 1;
  gameState[7].value += gameState[3].value;
  allChecks();}
}

function clkPurchase5()
{
  if(gameState[7].value >= gameState[4].value) {
  gameState[4].inventory += 1;
  gameState[7].value -= gameState[4].value;
  allChecks(); }
}

function clkSell5()
{
  if(gameState[4].inventory > 0) {
  gameState[4].inventory -= 1;
  gameState[7].value += gameState[4].value;
  allChecks(); }
}

function clkPurchase6()
{
  if(gameState[7].value >= gameState[5].value) {
  gameState[5].inventory += 1;
  gameState[7].value -= gameState[5].value;
  allChecks(); }
}

function clkSell6()
{
  if(gameState[5].inventory > 0) {
  gameState[5].inventory -= 1;
  gameState[7].value += gameState[5].value;
  allChecks(); }
}