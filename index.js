// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

console.log(processFirstItem(['foo', 'bar'], (str) => str + str))

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * In counter1 the variable count is declared inside of the function, making it function scope and can be accessed by the child function. In counter2 the variable is declared outside of the function, making it global scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter1 uses a closure because the child function has access to the variable count which is declared in the parent function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter1 would be preferable in a scenario where you wanted to pass data down from one function to a child function, counter2 would be preferable when you want a variable to be accessable outside of the lexical scope of a given function.
*/ 

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
    /*Code Here*/
  
  return (Math.floor(Math.random() * 3))
    
}
console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(score, innings){
  /*Code Here*/
  
  let homeTeamScore = 0;
  let awayTeamScore = 0;

  for(let i = 0; i < innings; i++){
    homeTeamScore = homeTeamScore + score();
    awayTeamScore = awayTeamScore + score();
  }

  return {'Home': homeTeamScore, 'Away': awayTeamScore}
  
}

console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(scorePerInning, numberOfInnings) {
  /* CODE HERE */

  let homeTeamScore = 0;
  let awayTeamScore = 0;
  let innings = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']

  for(let i = 0; i < numberOfInnings; i++){
    homeTeamScore = homeTeamScore + scorePerInning()
    awayTeamScore = awayTeamScore + scorePerInning()
    console.log((`${innings[i]} inning: Home: ${homeTeamScore} - Away: ${awayTeamScore}`))
  }
  
  console.log(`Final Score: Home: ${homeTeamScore} - Away: ${awayTeamScore}`)
}

scoreboard(inning, 9)

