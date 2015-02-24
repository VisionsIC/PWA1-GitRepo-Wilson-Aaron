/* * FULL SAIL UNIVERSITY ****************************** * STUDENT: Aaron Robert Wilson * Duel Game - Week 3 * Date: 02/22/15 Assignment 3 Part 3 of 3 of this series*//* NOTE this is supposed to be commented "psuedo-code" to show my ability to simplify & break down the javascript code in way that it is understood by me in common language. I have decided to make my psuedo-code a more written out approach to show as a testament to my learning curve so far in this class. As I break down the code, I have learned to understand what is actually going on step by step. This has forced me to change my psuedo-code into a step by step lesson (for demonstration purposes only - the comments are too heavy resulting in increased file size.) to display my understanding as a fact of what is happening in the code. */// Self-executing function.(function(){		// Output to the "console" (developer preview window) to "log" the words "READY TO DUEL!!!".    console.log("READY TO DUEL!!!"); // Define the DOM objects to manipulate.    	// Define the (local) variable "plyr1name_txt" as an array with the value of the selected parameters and string "AlienMan" with the sum of "20" damage, "100" damage value to start; in the scope of the self-executing function "function".	var plyr1name_txt = document.querySelector('#alienman').querySelector('p');    // Define the (local) variable "plyr2name_txt" as an array with the value of the selected parameters and string "DarkLord" with the sum of "20" damage, "100" damage value to start; in the scope of the self-executing function "function".    var plyr2name_txt = document.querySelector('#darklord').querySelector('p');    // Define the (local) variable "button_txt" as an array with the value of the selected parameters and string "DarkLord" with the sum of "20" damage, "100" damage value to start; in the scope of the self-executing function "function".    var button = document.getElementById("battle_btn");    // Define the (local) variable "round_txt" as an array with the value of the selected parameters and string "DarkLord" with the sum of "20" damage, "100" damage value to start; in the scope of the self-executing function "function".    var round_txt = document.querySelector('#round_number').querySelector('h4');// Output to the "console" (developer preview window) to "log" notes when needed.    console.log("point 1 reached");    // Setup your click event by using the "button.addEventListener" function, method, and arguments.    button.addEventListener("click", duel, false);    // Create object array for the two rivals.    var rivals = [        {         // This "name" object-key has an index of "0" in it's array.         name:"AlienMan",         // Array index 0.damage.         damage:20,         // Array index 0.health.         health:100        },        {        // This "name" object-key has an index of "1" in it's array.        name:"DarkLord",        // Array index 1.damage.        damage:20,        // Array index 1.health.        health:100        }    ];    // Create variable "round" for the duel rounds to increase.    var round = 1;    // Initialize DOM innerHTML text method for the top of the HTML page.    round_txt.innerHTML = "Click LET'S DUEL Button To Start!";    plyr1name_txt.innerHTML = rivals[0].name + ":  " + rivals[0].health;    plyr2name_txt.innerHTML = rivals[1].name + ":  " + rivals[1].health;    // Old JS FUNCTION    // Define the (local) variable "plyr1Dam" to which is "equal to" the (damage) value of "20" in the scope of the self-executing function "function".    //var plyr1Dam = 20;	// Define the (local) variable "plyr2Dam" to which is "equal to" the (damage) value of "20" in the scope of the self-executing function "function".      //var plyr2Dam = 20;	 // Each player's health.	// Define the (local) variable "plyr1Hlth" equal to the (health) value of "100" in the scope of the self-executing function "function".   // var plyr1Hlth = 100;	// Define the (local) variable "plyr2Hlth" equal to the (health) value of "100" in the scope of the self-executing function "function".      //var plyr2Hlth = 100;// Initiate each round.		// Define the (local) variable "round" equal to the (duel round) value of "0" in the scope of the self-executing function "function".    //var round=0;	  	// Define a new function "duel" within the self-excuting function "function" of which consists of the "alert" function, a "for" loop, some variables that define WHAT the representation of that variable IS, and built-in javascript function objects coupled  by a method which calculates instructions to do something.	function duel()		{        // Console log "Duel".        console.log("READY TO DUEL!!!");	 	// OLD ALERT Method within the "duel" function.        // alert(plyr1Name[0]+ ": " +plyr1Name[2]+ "  * START THIS DUEL *  " +plyr2Name[0]+ ": " +plyr2Name[2]);        plyr1name_txt.innerHTML = rivals[0].name + ":  " + rivals[0].health;        plyr2name_txt.innerHTML = rivals[1].name + ":  " + rivals[1].health;		// Example: alert(AlienMan+ ": " +100+ "  * START THIS DUEL *  " +DarkLord+ ": " +100);.		//*************AT THIS POINT IN THE JAVASCRIPT CODE A LOOP IS STARTED*********************//        // NO NEED FOR THE LOOP *******		// "for" loops the variable "increment" that equals the integer value of "0". Then a statement occurs declaring "increment" to be *less than* "10". Next "increment" variable adds the "++" operator increasing "increment" by 1. My belief is this "for" loop controls the "round" variable counting up to "10" which then can produce a final (end) result.        // for (var increment = 0; increment < 10; increment++)		// Example: for (var increment = 0; 0 < 10; 0++)		// Random math formula using these javascript native keywords with variables, objects, and functions: ex. - " Math.floor(Math.random() * (max - min) + min); ".            // OLD Function			// Define the (local) variable as "minDam1" with array indexes - (minimal damage) make it "equal" to the "plyr1Dam" (player 1 damage) "multiplied" by the value of ".2" in the scope of the function "duel".            // var minDam1 = plyr1Name[1] * .2;			// Define the (local) variable as "minDam2" with array indexes - (minimal damage) make it "equal" to the "plyr2Dam" (player 2 damage) "multiplied" by the value of ".2" in the scope of the function "duel".            // var minDam2 = plyr2Name[1] * .2;            			// Determine damage with this "Math.floor" formula.			var floor1 = Math.floor(Math.random() * rivals[0].damage + rivals[0].damage * .2);			// laymen's example: var floor1 = round down to the nearest number(some random number (from zero to 1) * (20-4) + 4).			// simplified example: var floor1 = round down to the nearest number( .5 * (16) + 4) giving you the total (12). This concludes that at this particular point in the javascript execution, the variable "floor1 =12".			// Determine the (local) variable as "floor1" make it "equal" to the value of the "math" object coupled with the method "floor" which rounds a number down to the nearest integer. It then passes an argument using the math object again, coupled with the "random" method of which generates a random number (between "0" and "1"). That random number is then "multiplied" by the value of ".2" represented in the variable "plyr1Dam". "min1Dam" (4) is "subtracted" from "plyr1Dam" (20) and then adds "minDam" (4) to get the total.            var floor2 = Math.floor(Math.random() * rivals[1].damage + rivals[1].damage * .2);			// laymen's example: var floor1 = round down to the nearest number(some random number (from zero to 1) * (20-4) + 4).			// simplified example: var floor1 = round down to the nearest number( .2 * (16) + 4) giving you the total (7). This concludes that at this particular point in the javascript execution, the variable "floor2 = 7".// Each player's damage.			            // If the above comments make sense, at this point, the code should be variable "plyr1Hlth" (100) "minus" the "equivalent" (-=) variable "floor1".			rivals[0].health -= floor1;			// example: (100) -= (12).							               // If the above comments make sense, at this point, the code should be variable "plyr1Hlth" (100) "minus" the "equivalent" (-=) variable "floor2".			rivals[1].health -= floor2;			// example: (100) -= (7).			// Output to the "console" (developer preview window) to "log" the parameters of these variables "plyr1Name", uses the plus sign operater to add the ": " string. The execution continues to add the "plyr1Hlth". variable, "  " string, "plyr2Name" variable, ": " string, and finally adding "plyr2Hlth" variable.            console.log(rivals[0].health, rivals[1].health);// Check for the winner of the duel.						// The variable "result" is "equal" to the user-defined function "vctrChck". "vctrChck" is a function coded below that passes more conditionals into the looped code.            var result = vctrChck();			 			// Output to the "console" (developer preview window) to "log" the variable "result".            console.log(result);            // Add the "round_txt" method to insert a string to the innerHTML statement to the DOM to display the desired round results.            round_txt.innerHTML = "Round # " + round + " Results: ";            // The "round" variable "adds" increments of "1" to each (duel) round, and checks "result" to see if function "vctrChck" has reached "10" or a player reaches "0". If not, the "loop" continues.            round++;// **** AT THIS POINT, THE JAVASCRIPT CODE REACHES A "CONDITIONAL" INSTRUCTION. **** //						// The "if" statement marks a block of statements to be executed depending on a condition. In this case, "if" the variable "result" reaches the end of 10 rounds of the duel, and both players don't reach the sum of "0", both the console and the alert box will display the words "BOTH FIGHTERS' REACH AN UNFORTUNATE DRAW".            if (result === "BOTH FIGHTERS' REACH AN UNFORTUNATE DRAW")			             {                // Check health & damage to verify that the duel will continue with the following methods.                plyr1name_txt.innerHTML = rivals[0].name + ":  " + rivals[0].health;                plyr2name_txt.innerHTML = rivals[1].name + ":  " + rivals[1].health;				// OLD Function.				// The "alert" function takes the variable "plyr1Name", adds the string ": " to that variable, adds the variable "plyr1Hlth", adds to that another string " *ROUND " to that, adds the "round" variable to it, adds again a " FINISHED* " string. It continues to add an empty " " character space string, the "plyr2Name" variable, another ": " string, and finally adds the "plyr2Hlth" variable.                // alert(plyr1Name[0]+ ": " +plyr1Name[2]+ " *ROUND " +round+ " FINISHED* " + " " +plyr2Name[0]+ ": " +plyr2Name[2]);				// Example: alert(AlienMan: 88 * ROUND 1 FINISHED * DarkLord: 93) ## NUMBERS IN EX. ARE BASED FROM EX. ABOVE ##            }// **** AT THIS POINT, THE "LOOPED" JAVASCRIPT CODE REACHES ANOTHER "CONDITIONAL" INSTRUCTION. **** //			// The "else" statement marks a block of additional statements to be executed depending on other conditional demands.			else			{                // Recheck "Result" variable to see if there is a victor.                plyr1name_txt.innerHTML = result;                plyr2name_txt.innerHTML = "";				// OLD ALERT Function				// "alert" function is carried out with an parameter (argument) of the "result" variable.                // alert(result);				// **** AT THIS POINT, THE "LOOPED" JAVASCRIPT CODE REACHES A FINAL SIMPLE "CONDITIONAL" INSTRUCTION. **** //                // Disable the listener function to the button.                button.removeEventListener("click", duel, false);                // Output the appropriate text to the button label if duel reaches a final result.                document.querySelector('.buttonblue').innerHTML = "DONE!!!";            }    }// **** AT THIS POINT, JAVASCRIPT CODE REACHES A FUNCTION THAT PASSES A FINAL SIMPLE "LOOP" WITH "CONDITIONALS", "VARIABLES" TO RECHECK INSTRUCTION, AND DISPLAY A FINAL RESULT. **** //		// The user-defined function "vctrChck".    function vctrChck()	{        		// A variable redefined as "result" (out of the loop) is carried in a final sequence of mini-loops that check to tabulate a final "result". This particular variable states the "result" is "BOTH FIGHTERS' REACH AN UNFORTUNATE DRAW" because "10" duel rounds have passed and neither player has claimed victory, nor sealed their bloody fate with death.		var result="BOTH FIGHTERS' REACH AN UNFORTUNATE DRAW";				// The "if" statement passes the parameter of variable "plyr1Hlth" which is a "conditional" that checks to verify if it is "less than" the sum of "1". Then, the "&&" operator pairs the parameter of variable "plyr2Hlth" which checks to verify if it also is "less than" the sum of "1".         if (rivals[0].health < 1 && rivals[1].health < 1)		        {			            // If the above sum of both players is infact "0", then "result" variable is equal to "BOTH FIGHTERS' SEAL THEIR FATE AS A BLOODY DEATH".			result = "BOTH FIGHTERS' SEAL THEIR FATE AS A BLOODY DEATH";			        } 				// The "else if" statement is yet another "conditional" statement that the parameter of variable "plyr1Hlth" which checks to verify if it is "less than" the sum of "1".		else if (rivals[0].health < 1 )				{						// If the above sum of both players is infact "0", then "result" variable is equal to "plyr2Name" to which "adds" the string " IS VICTORIOUS!!!".            result = (rivals[1].name) + " IS VICTORIOUS!!!";        } 				// The "else if" statement is yet another "conditional" statement that the parameter of variable "plyr2Hlth" which checks to verify if it is "less than" the sum of "1".		else if (rivals[1].health < 1 )		        {			// If the above sum of both players is infact "0", then "result" variable is equal to "plyr1Name" to which "adds" the string " IS VICTORIOUS!!!".            result = (rivals[0].name) + " IS VICTORIOUS!!!";			        }				// If any of the above statements in the "vctrChck" function is "true" then "return" (stops the execution of a function and returns a value from that function) that "result" variable with the correct above statement.       return result;    }/*******  The OLD program was executed below *******/    // The "duel" function executes to start the javascript program.	// duel();})();