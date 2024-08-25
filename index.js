// chapter 42: do while loop

// The do while loop
// The do while loop is a variant of the while loop . this loop will execute the code block 
// once, before checking if the condition is true , then it will repeat the loop as long as 
// the condition is true 

// // syntax 
// do {
    //  code block to be executed
// }
// while(condition);

// Example
// The example bleow uses a do while loop . The loop will always be executed at least once,
// even if the condition is false , becuase the code block is executed before the condition is 
// tested:

// var i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 0);

// Note:  Do not forget to increase the variable used in the conditon , otherwise the loop
// will never end!

// while vs do while

// // key differences:
// Initial check: while checks the condditon first ; do ...while checks after the first 
// execution. 
// Minimum Execution : while can potentially not execute at all; do ... while gurantees at 
// least one execution.

// example situation:

// while loop:
// Iteration through an array only if it contains element .
// // Running a loop based on a condition that might already be false.

// // dowhile loop:
// prompting the user for input until a valid input is provided.
// performing an initial setup  task befor checking the loop condition.

