// Use a for loop to print all the numbers from 1 to 100. Test and debug.
for (let i = 1; i <= 100; i++) {
  // For numbers which are multiples of both 3 and 5, print “FizzBuzz” instead.
  if(i % 15 == 0) {
    console.log("FizzBuzz!");
    $("#output").append("FizzBuzz!");
    
  }
  // Add an if statement: if the number is a multiple of 3, print “Fizz” instead of the number.
  else if (i % 3 == 0) {
    console.log("Fizz!");
    $("#output").append("Fizz!");
  }
  // Add an else if condition: If the number is a multiple of 5, print “Buzz” instead of the number.
  else if(i % 5 == 0) {
    console.log("Buzz!");
    $("#output").append("bbbb!");
    
  }

  else {
    console.log(i);
    $("#output").append(i);
    }
  }