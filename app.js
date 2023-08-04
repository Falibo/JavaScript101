class TypeWriter {
    constructor(id, textArray) {
      this.element = document.getElementById(id);
      this.textArray = textArray;
      this.a = 0;
      this.i = 0;
      this.isBackspacing = false;
      this.isParagraph = false;
      this.speedForward = 100; // Typing Speed
      this.speedWait = 1000; // Wait between typing and backspacing
      this.speedBetweenLines = 1000; // Wait between first and second lines
      this.speedBackspace = 25; // Backspace Speed
      this.eHeader = this.element.querySelector("h1");
      this.eParagraph = this.element.querySelector("p");
      this.init();
    }
  
    init() {
      this.typeWriter();
    }
  
    typeWriter() {
      const aString = this.textArray[this.a];
  
      if (!this.isBackspacing) {
        if (this.i < aString.length) {
          if (aString.charAt(this.i) === "|") {
            this.isParagraph = true;
            this.eHeader.classList.remove("cursor");
            this.eParagraph.classList.add("cursor");
            this.i++;
            setTimeout(() => this.typeWriter(), this.speedBetweenLines);
          } else {
            if (!this.isParagraph) {
              this.eHeader.textContent += aString.charAt(this.i);
            } else {
              this.eParagraph.textContent += aString.charAt(this.i);
            }
            this.i++;
            setTimeout(() => this.typeWriter(), this.speedForward);
          }
        } else if (this.i === aString.length) {
          this.isBackspacing = true;
          setTimeout(() => this.typeWriter(), this.speedWait);
        }
      } else {
        if (this.eHeader.textContent.length > 0 || this.eParagraph.textContent.length > 0) {
          if (this.eParagraph.textContent.length > 0) {
            this.eParagraph.textContent = this.eParagraph.textContent.substring(0, this.eParagraph.textContent.length - 1);
          } else if (this.eHeader.textContent.length > 0) {
            this.eParagraph.classList.remove("cursor");
            this.eHeader.classList.add("cursor");
            this.eHeader.textContent = this.eHeader.textContent.substring(0, this.eHeader.textContent.length - 1);
          }
          setTimeout(() => this.typeWriter(), this.speedBackspace);
        } else {
          this.isBackspacing = false;
          this.i = 0;
          this.isParagraph = false;
          this.a = (this.a + 1) % this.textArray.length;
          setTimeout(() => this.typeWriter(), 50);
        }
      }
    }
  }
  
  // Usage
  const textArray = [
    "1. What is JavaScript?|JavaScript is a high-level programming language used to add interactivity and dynamic elements to websites.",
    "2. What are variables in JavaScript?|Variables are used to store data values in JavaScript.",
    "3. How do you declare a variable in JavaScript?|Variables are declared using the `var`, `let`, or `const` keyword.",
    "4. What is the difference between `var`, `let`, and `const` in JavaScript?|`var` has function scope, `let` has block scope, and `const` is used for constants that cannot be reassigned.",
    "5. How do you assign a value to a variable in JavaScript?|Variables can be assigned using the assignment operator `=`.",
    "6. What are data types in JavaScript?|Data types define the type of data that can be stored in a variable, such as string, number, boolean, etc.",
    "7. How do you check the data type of a variable in JavaScript?|The `typeof` operator is used to check the data type of a variable.",
    "8. What is NaN in JavaScript?|NaN stands for Not-a-Number and is a special value representing an unrepresentable mathematical result.",
    "9. How do you create a function in JavaScript?|Functions are created using the `function` keyword followed by the function name and parameters.",
    "10. What is the difference between function declarations and function expressions in JavaScript?|Function declarations are hoisted, while function expressions are not.",
    "11. What is a callback function in JavaScript?|A callback function is a function passed as an argument to another function and executed after the completion of that function.",
    "12. What is an arrow function in JavaScript?|Arrow functions are a concise way to write function expressions in JavaScript.",
    "13. How do you write a multiline string in JavaScript?|Multiline strings can be written using template literals (`backticks`).",
    "14. What are template literals in JavaScript?|Template literals are string literals that allow embedded expressions, denoted by `${expression}`.",
    "15. What is the `this` keyword in JavaScript?|The `this` keyword refers to the context object and depends on how a function is called.",
    "16. What is the purpose of the `bind()` method in JavaScript?|The `bind()` method creates a new function with a specified `this` value and arguments.",
    "17. How do you create an object in JavaScript?|Objects can be created using object literals or the `Object` constructor.",
    "18. What are object properties and methods in JavaScript?|Properties are variables attached to objects, and methods are functions attached to objects.",
    "19. How do you access object properties in JavaScript?|Object properties can be accessed using dot notation or square brackets notation.",
    "20. How do you add a new property to an object in JavaScript?|New properties can be added to an object using dot notation or square brackets notation.",
    "21. How do you loop through objects in JavaScript?|Objects can be looped through using the `for...in` loop or `Object.keys()` and `Object.values()` methods.",
    "22. What is a constructor function in JavaScript?|A constructor function is used to create and initialize objects using the `new` keyword.",
    "23. What is the purpose of the `prototype` property in JavaScript?|The `prototype` property allows the addition of properties and methods to all instances of an object constructor.",
    "24. How do you create an array in JavaScript?|Arrays can be created using array literals or the `Array` constructor.",
    "25. What are array methods in JavaScript?|Array methods are built-in functions that allow manipulation of arrays, such as `push()`, `pop()`, `splice()`, etc.",
    "26. How do you access array elements in JavaScript?|Array elements can be accessed using their index number inside square brackets.",
    "27. How do you add elements to an array in JavaScript?|New elements can be added to an array using `push()`, `unshift()`, or `splice()` methods.",
    "28. How do you remove elements from an array in JavaScript?|Elements can be removed from an array using `pop()`, `shift()`, or `splice()` methods.",
    "29. How do you combine two arrays in JavaScript?|Arrays can be combined using the `concat()` method or the spread operator (`[...array1, ...array2]`).",
    "30. What is a JavaScript callback hell?|Callback hell refers to the nesting of multiple asynchronous callback functions, leading to hard-to-read code.",
    "31. What are JavaScript Promises?|Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow chaining of operations.",
    "32. How do you handle errors in JavaScript Promises?|Errors can be handled using `.catch()` or `try...catch` with `async/await`.",
    "33. What is the purpose of the `async` keyword in JavaScript?|The `async` keyword is used to define asynchronous functions that return Promises.",
    "34. How do you use `async/await` in JavaScript?|`async/await` provides a more synchronous way to work with Promises in asynchronous functions.",
    "35. What is a JavaScript generator function?|Generator functions allow pausing and resuming function execution and return iterator objects.",
    "36. How do you create a generator function in JavaScript?|Generator functions are defined using the `function*` syntax.",
    "37. What is the difference between `null` and `undefined` in JavaScript?|`null` represents the intentional absence of a value, while `undefined` represents an uninitialized or absent value.",
    "38. How do you check for `null` and `undefined` values in JavaScript?|`null` and `undefined` can be checked using strict equality (`===`) or nullish coalescing (`??`) operator.",
    "39. What is the purpose of the `Object.keys()` method in JavaScript?|`Object.keys()` returns an array of a given object's own enumerable property names.",
    "40. What is the purpose of the `Object.values()` method in JavaScript?|`Object.values()` returns an array of a given object's own enumerable property values.",
    "41. What is the purpose of the `Object.entries()` method in JavaScript?|`Object.entries()` returns an array of a given object's own enumerable key-value pairs.",
    "42. How do you check if an object has a specific property in JavaScript?|The `in` operator or the `hasOwnProperty()` method can be used to check for object properties.",
    "43. What is a JavaScript Map?|Maps are collections of key-value pairs where both the key and value can be of any type.",
    "44. How do you add elements to a Map in JavaScript?|Elements can be added to a Map using the `set()` method.",
    "45. How do you check if a key exists in a Map in JavaScript?|The `has()` method is used to check if a key exists in a Map.",
    "46. What is a JavaScript Set?|Sets are collections of unique values where duplicate values are not allowed.",
    "47. How do you add elements to a Set in JavaScript?|Elements can be added to a Set using the `add()` method.",
    "48. How do you check if a value exists in a Set in JavaScript?|The `has()` method is used to check if a value exists in a Set.",
    "49. How do you remove elements from a Set in JavaScript?|Elements can be removed from a Set using the `delete()` method.",
    "50. What is the purpose of the `forEach()` method in JavaScript?|The `forEach()` method is used to iterate over elements in an array or a Map.",
    "51. What is the purpose of the `filter()` method in JavaScript?|The `filter()` method creates a new array with elements that pass a test function.",
    "52. What is the purpose of the `map()` method in JavaScript?|The `map()` method creates a new array by applying a function to each element of the original array.",
    "53. What is the purpose of the `reduce()` method in JavaScript?|The `reduce()` method reduces an array to a single value by applying a function to each element.",
    "54. How do you reverse an array in JavaScript?|The `reverse()` method is used to reverse the order of elements in an array.",
    "55. How do you sort an array in JavaScript?|The `sort()` method is used to sort the elements of an array.",
    "56. What is the purpose of the `indexOf()` method in JavaScript?|The `indexOf()` method returns the first index at which a given element can be found in an array.",
    "57. How do you convert a string to an array in JavaScript?|Strings can be converted to arrays using the `split()` method.",
    "58. How do you convert an array to a string in JavaScript?|Arrays can be converted to strings using the `join()` method.",
    "59. What is a JavaScript regular expression?|Regular expressions are patterns used to match character combinations in strings.",
    "60. How do you create a regular expression in JavaScript?|Regular expressions can be created using literals or the `RegExp` constructor.",
    "61. What is the purpose of the `test()` method in JavaScript regular expressions?|The `test()` method checks if a string contains the pattern specified by a regular expression.",
    "62. What is the purpose of the `exec()` method in JavaScript regular expressions?|The `exec()` method searches a string for a match against a regular expression and returns the matched text if found.",
    "63. What are JavaScript closures?|Closures are functions that remember the environment in which they were created.",
    "64. How do you create a closure in JavaScript?|Closures are created by nesting functions and accessing variables from the outer function within the inner function.",
    "65. What is the purpose of the `call()` and `apply()` methods in JavaScript?|`call()` and `apply()` are used to call a function with a specified `this` value and arguments.",
    "66. What is the purpose of the `bind()` method in JavaScript?|The `bind()` method creates a new function with a specified `this` value and arguments.",
    "67. What is event delegation in JavaScript?|Event delegation is a technique where a single event handler is attached to a parent element to handle events on its child elements.",
    "68. How do you add an event listener in JavaScript?|Event listeners can be added using the `addEventListener()` method.",
    "69. How do you remove an event listener in JavaScript?|Event listeners can be removed using the `removeEventListener()` method.",
    "70. What are JavaScript event objects?|Event objects contain information about the event that occurred, such as the target element and event type.",
    "71. What is the purpose of the `preventDefault()` method in JavaScript?|The `preventDefault()` method is used to prevent the default action of an event from occurring.",
    "72. What is event bubbling in JavaScript?|Event bubbling is the propagation of an event from the target element to its parent elements.",
    "73. What is event capturing in JavaScript?|Event capturing is the propagation of an event from the parent elements to the target element.",
    "74. How do you make an HTTP request in JavaScript?|HTTP requests can be made using the `XMLHttpRequest` object or the `fetch()` API.",
    "75. What is the purpose of the `fetch()` API in JavaScript?|The `fetch()` API is used to make HTTP requests and handle responses using Promises.",
    "76. How do you handle asynchronous code in JavaScript?|Asynchronous code can be handled using callbacks, Promises, or `async/await`.",
    "77. What is the purpose of the `localStorage` object in JavaScript?|The `localStorage` object allows data to be stored in the web browser.",
    "78. How do you store data in `localStorage` in JavaScript?|Data can be stored in `localStorage` using the `localStorage.setItem()` method.",
    "79. How do you retrieve data from `localStorage` in JavaScript?|Data can be retrieved from `localStorage` using the `localStorage.getItem()` method.",
    "80. How do you remove data from `localStorage` in JavaScript?|Data can be removed from `localStorage` using the `localStorage.removeItem()` method.",
    "81. What is the purpose of the `sessionStorage` object in JavaScript?|The `sessionStorage` object allows data to be stored in the web browser session.",
    "82. How do you store data in `sessionStorage` in JavaScript?|Data can be stored in `sessionStorage` using the `sessionStorage.setItem()` method.",
    "83. How do you retrieve data from `sessionStorage` in JavaScript?|Data can be retrieved from `sessionStorage` using the `sessionStorage.getItem()` method.",
    "84. How do you remove data from `sessionStorage` in JavaScript?|Data can be removed from `sessionStorage` using the `sessionStorage.removeItem()` method.",
    "85. What are JavaScript modules?|Modules are a way to organize code into separate files and provide a mechanism for exporting and importing functionality.",
    "86. How do you export functionality from a module in JavaScript?|Functionality can be exported using the `export` keyword.",
    "87. How do you import functionality from a module in JavaScript?|Functionality can be imported using the `import` keyword.",
    "88. What is the difference between named exports and default exports in JavaScript modules?|Named exports allow exporting multiple functions, while default exports allow exporting a single value or functionality.",
    "89. What is the purpose of the `async/await` error handling in JavaScript?|`async/await` allows for more concise and readable error handling with `try...catch`.",
    "90. How do you handle errors in `async/await` in JavaScript?|Errors can be handled using `try...catch` blocks.",
    "91. What are JavaScript decorators?|Decorators are a design pattern that allows modifying the behavior of a class or method.",
    "92. How do you use decorators in JavaScript?|Decorators are used by prepending a function with the `@` symbol followed by the decorator name.",
    "93. What is the purpose of the `Object.freeze()` method in JavaScript?|The `Object.freeze()` method is used to make an object immutable.",
    "94. What is the purpose of the `Object.seal()` method in JavaScript?|The `Object.seal()` method is used to prevent adding or removing properties from an object.",
    "95. What is the purpose of the `Object.assign()` method in JavaScript?|The `Object.assign()` method is used to copy the values of all enumerable properties from one or more source objects to a target object.",
    "96. What is the purpose of the `Object.create()` method in JavaScript?|The `Object.create()` method creates a new object with the specified prototype object and properties.",
    "97. How do you check if an object is empty in JavaScript?|Object emptiness can be checked by using `Object.keys()` or `Object.entries()`.",
    "98. What is the purpose of the `Array.from()` method in JavaScript?|The `Array.from()` method creates a new Array instance from an array-like or iterable object.",
    "99. How do you merge two objects in JavaScript?|Objects can be merged using the `Object.assign()` method or the spread operator (`{...obj1, ...obj2}`).",
    "100. What are JavaScript modules?|Modules are a way to organize code into separate files and provide a mechanism for exporting and importing functionality.",
    "101. Explain the concept of hoisting in JavaScript.|Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase."
  ];
  
  const typeWriter = new TypeWriter("output", textArray);