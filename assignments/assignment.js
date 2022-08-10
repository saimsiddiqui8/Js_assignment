// *************************** Js  *****************************


// *********************QUESTION NUMBER 1 **************
// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

//_~_~_~_~_~_~_~_~_~_~_~_~_~       ANSWER        _~_~_~_~_~_~_~_~_~_~_~_~_

var a = +prompt("Enter a number");
function myFuc(a) {
    a = a + "";
    return a.split("").reverse().join("");
}
console.log(myFuc(a));




// *********************QUESTION NUMBER 2 **************
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam, radar or level.

//_~_~_~_~_~_~_~_~_~_~_~_~_~       ANSWER        _~_~_~_~_~_~_~_~_~_~_~_~_

function p() {
    var a = prompt("Enter a pellidrome");
    var newStr = "";
    for (let i = a.length -1 ; i >= 0; i--) {
        newStr += a[i];
    }
    if (a === newStr) {
        alert("This is a Pellindrome");

    }
    else{
        alert("This is a Pellindrome");
    }
}
p();




// *********************QUESTION NUMBER 3 **************
// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

//_~_~_~_~_~_~_~_~_~_~_~_~_~       ANSWER        _~_~_~_~_~_~_~_~_~_~_~_~_

function possiblities() {
    var e = prompt("Enter a string", "dog");
    var newStr = "";
    for (let i = 0; i < e.length; i++) {
        newStr += e[i];
        console.log(newStr);
        for (let j = i + 1; j < e.length; j++) {
            newStr += e[i];
            console.log(newStr);
            
        }
        return newStr
    }
    
}
possiblities();




// *********************QUESTION NUMBER 4 **************
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

//_~_~_~_~_~_~_~_~_~_~_~_~_~       ANSWER        _~_~_~_~_~_~_~_~_~_~_~_~_

var str = prompt("Enter alphabet", "name");
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log(alphabeticalOrder(str));




// *********************QUESTION NUMBER 5 **************
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

//_~_~_~_~_~_~_~_~_~_~_~_~_~       ANSWER        _~_~_~_~_~_~_~_~_~_~_~_~_

var str = "the quick brown fox";
str = str.split(" ");
for (var i = 0; i <str.length; i++) {
    let firstChar = str[i].slice(0,1).toUpperCase();
    str[i] += " ";
    let otherChar = str[i].slice(1);
    let cappedChar = firstChar + otherChar;
    document.write(cappedChar);
}




// *********************QUESTION NUMBER 6 **************
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

//_~_~_~_~_~_~_~_~_~_~_~_~_~       ANSWER        _~_~_~_~_~_~_~_~_~_~_~_~_

function data(str){
    var str = prompt("Enter Your Sentence To Check Whether There Is A Longest Word Or Not");
    var given = str.split(" ");
     given.sort(function (a,b){
         return b.length - a.length; 
     })
     return given[0];
}
console.log(data());




// *********************QUESTION NUMBER 7 **************
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Example string : 'The quick brown fox'
// Expected Output : 5

//_~_~_~_~_~_~_~_~_~_~_~_~_~       ANSWER        _~_~_~_~_~_~_~_~_~_~_~_~_

function vowelCount() {
    var str = prompt("Enter a sentence to check how many vowels it contain", "The quick brown fox");
    var vowelCount = "aeiouAEIOU";
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelCount.indexOf(str[i]) !== -1) {
            count += 1;
        }
    }
    return count;
}
console.log(vowelCount());




// *********************QUESTION NUMBER 8 **************
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//_~_~_~_~_~_~_~_~_~_~_~_~_~       ANSWER        _~_~_~_~_~_~_~_~_~_~_~_~_

function testPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(testPrime(3));




// *********************QUESTION NUMBER 9 **************
// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

//_~_~_~_~_~_~_~_~_~_~_~_~_~       ANSWER        _~_~_~_~_~_~_~_~_~_~_~_~_

function detectDataType(value)
{
var dtypes = [Function, Number, String, Boolean, Object, undefined], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (i = 0, len = dtypes.length; i < len; i++) 
     {
            if (value instanceof dtypes[i])
            {
                return dtypes[i];
            }
      }
    }
    
    return typeof value;
}
console.log(detectDataType(12));
console.log(detectDataType('good'));
console.log(detectDataType(false));
console.log(detectDataType());




// *********************QUESTION NUMBER 10 **************
// 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

//_~_~_~_~_~_~_~_~_~_~_~_~_~       ANSWER        _~_~_~_~_~_~_~_~_~_~_~_~

function SecondGreatestLowest(arr_num){


arr_num.sort(function(x,y)
         {
         return x-y;
         });
var str = [arr_num[0]];
var result = [];

for(var j=1; j < arr_num.length; j++)
{
  if(arr_num[j-1] !== arr_num[j])
  {
    str.push(arr_num[j]);
  }
}
  result.push(str[1],str[str.length-2]);
return result.join(',');
}

console.log(SecondGreatestLowest([1,2,3,4,5,]));