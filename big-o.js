// Algorithm Practice for Linear/Binear Search!
// Write a function that performs a linear search!
// Remember, if the value you're searching for is NOT found, return -1!


function linearSearch(arr, val) {
    // add whatever parameters you deem necessary - good luck!
    for(i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            return i;
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 8))

// Write a function that performs a binary search!
// Remember, if the value you're searching for is NOT found, return -1!
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    // add whatever parameters you deem necessary - good luck!
    while (start < end && arr[middle] !== val) {
        if (arr[middle] < val) {
            start = middle + 1;
        }
        else if (arr[middle] > val) {
            end = middle - 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return middle;
}

//console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13], 6))


// ########### NODE QUESTIONS! DO THESE FIRST! DISCUSS OUT LOUD!!!!!!! ############ //
    // •Differentiate between JavaScript and Node.js
    //Javascript is a programming language and Node is based off of javascript, it is the engine that allows to run server side javascript code

    // •Differentiate between Node.js and Express
    //Express is a framework based off node for creating a Server

    // •What is npm ?
    //node package manager

    // •What’s the difference between global and local installation of dependencies ?
    //global allows you to use those dependences and packages in every node, local specifies what app you want to use the dependency for

    // •What is package.json ? What are some common attributes of package.json ?
    //It contains dependencies, and scripts

    // •What is middleware ?
    //acts as a bridge between controllers and view

    // •Explain the purpose of module.exports
    //Export your file and being able to call those files in different files

    // •Explain the MVC framework
    //user uses controllers to manipulate the model that updates the view and that is what the user sees

    // •How can you avoid callback hell ?
    //do not nest funcions so debugging is easier and code is easier to read


// ############################################################################### //
// these are regular old algorithms for practice! not necessarily related to searching!
// #1 are there duplicates?
// write a function that accepts a variable number of arguments and checks whether there
// are any duplicates among the arguments passed in. 
// areThereDuplicates(1,2,3) // would return false
// areThereDuplicates(3,4,5,1,7,9,7) // would return true
function areThereDuplicates(){
    // Good luck!
}


// #2 max sub-array sum
// write a function that accepts an array of integers and a number. the function should
// find the maximum sum of a subarray with the length of the number passed in. Note that
// a subarray must consist of consecutive elements from the original array.
// maxSubArraySum([100,200,300,400], 2) // returns 700
// maxSubArraySum([-3,4,0,-2,6,-1], 2) // returns 5
// maxSubArraySum([1,4,2,10,23,3,1,0,20], 4) // returns 39
function subArraySum(){
    // Good luck!
}


// ############################ EXTRA CHALLENGING ################################# //
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number ?
function largestPrimeFactor(number) {
    // Good luck!
    return true;
}
largestPrimeFactor(13195);
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two n - digit numbers.
function largestPalindromeProduct(n) {
    // Good luck!
    return true;
}
largestPalindromeProduct(3);