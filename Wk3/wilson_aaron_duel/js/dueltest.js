/**
 * Created by aaronrobertwilson on 2/24/15.
 */

/*
 Stephen Willis
 PWA-1
 06/20/2014
 */
//SELF executing function
(function(){
    console.log("** Fight **"); //Print title to Console.log
//define variables and HTML elements
    var fighter1_txt = document.querySelector("#fighter1text").querySelector("p");
    var fighter2_txt = document.querySelector("#fighter2text").querySelector("p");
    var round_txt = document.querySelector("h4");
    var button = document.getElementById("fight_btn");
    console.log();
//click event
    button.addEventListener("click", fight, false);
//create fighters object using the array and index method
    var fighters = [
        {
//name is property and Spiderman is value
            name: "Spiderman",
            damage: 20,
            health: 100
        },
        {
            name:"Dark Knight",
            damage: 20,
            health: 100
        }];
//assign round to 1
    var round = 1;
//Initialize DOM innerHTML text for top of HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
//Create "Fight" Function
    function fight(){
//grab object array index from each fighter
        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
//determine damage
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);
//inflict damage
        fighters[0].health -= f1; //fighters[0].health = fighters[0].health - f1
        fighters[1].health -= f2;
//console log the health of the fighters
        console.log(fighters[0].health, fighters[1].health);
//check for winner
        var result = winnerCheck();
        console.log(result);
//instead of using the for each loop just add 1 to the round so it ends
        round_txt.innerHTML = "Round #" + round + "Results:";
        round++;
//if result then show the fighters name and health
        if (result === "no winner")
        {
            fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
//else run the winnerCheck function and declare winner
        } else {
            fighter1_txt.innerHTML = result; //keep running winnerCheck
            fighter2_txt.innerHTML = "";
//Disable the button - need the below if using addEventListener
            button.removeEventListener("click", fight, false);
//button.disabled = true;
//button.onclick = "return false";
//grab button id and change the innerHTML text DOM
            document.querySelector('.buttonblue').innerHTML = 'Done!!';
        }
    }
//check conditionals on who the winner is
    function winnerCheck(){
        var result = "no winner";
//set conditoin if fighters health is 0
        if (fighters[0].health < 1 && fighters[1].health < 1)
        {
            result = "You Both Die - Game Over!";
//else if fighter1 is 0 then other fighter wins
        } else if(fighters[0].health < 1){
            result = fighters[1].name + "WINS!!"
//else if fighter2 is 0 then fighter 1 wins
        } else if (fighters[1].health < 1)
        {
            result = fighters[0].name + "Wins!!"
        }
//return the result
        return result;
    }
})();
