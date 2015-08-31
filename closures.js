//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
  var inner = outer();

//Once you do that, invoke inner.

  //Code Here
inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
callFriend()("435-215-9248");
//or
var callJake = callFriend();
console.log(callJake('435-215-9248'));
//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.

*/
function makeCounter() {
  var counter = 0;
  return function() {
    return counter += 1;
  }
   return counter;
}
  //Code Here
  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

  //Code Here
function oneTime(funct) {
  var count =0;

  while(count <= 1){

  return funct();
}
}


//Next Problem

while(){}

/*
  Now, similar to the last problem, write a function called
  'fnCounter' that accepts two parameters. The first parameter
  will be an anonymous function and the second parameter, 'N', will be a number.
   Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number
   of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

function fnCounter(funct, N) {
  var count = 0;
  while (count < N ) {
    funct();
    count += 1;
  }
  return "STOP";

}



//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without
  running the code) then below write what you expect to happen when the
  funciton is invoked. *Hint: setTimeout calls a function or evaluates an
  expression after a specified number of milliseconds.

    //Answer Here
    Every time it runs the amount of time between console.logs will be increased.
    It will console.log(1), wait 1000 milliseconds, return 1. Then will wait
    2000 milliseconds, then console log 2, until it reaches 5.


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here
    My answer was incorrect on both the timer and the log statements. The setTimeout
    was an asynchonous statement so the console.log did not have a value until
    the whole for-loop finished, at which point the i became six and the timer
    value was set as 1000*1;


  Fix the counter function so that it works the way you expect it to work.
   (logging 1 then 2 then 3, etc)

   setTimeout(function(){ alert("Hello"); }, 3000);
*/

    //Code Here

    var counter = function() {
      var count = 1
      while(count <= 5){

      var time =  function(count){

        setTimeout(
          function(){
            console.log(count);
          },count*1000 )
      }
    time(count);
        count += 1;
      }

    };

// Now it prints 1, waits 1000 milliseconds, then prints two  waits ect... until
//5.








//Next Problem


/*
  Make the following code work




  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

*/
function arrayBuilder(size){
  var funcArray =[];
  var count = 0;
while(count <= size) {
  var buildFun = function(count) {
    funcArray.push(function() {
      console.log(count);
    })
  };

  buildFun(count);
  count += 1;

}
console.log("array Built!");
return funcArray;
}

var funcArray = arrayBuilder(5);


/*
this is what the array looks like Now...

var funcArray = [
  function(){console.log(0);},
  function(){console.log(1);},
  function(){console.log(2);},
  function(){console.log(3);},
  function(){console.log(4);},
  function(){console.log(5);}
];

so the output is:


  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5
/*





  *Hint: Don't let this fool you. Break down what's really happening here.
*/
