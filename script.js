window.addEventListener("DOMContentLoaded", () => {
    // Set company logo
    document.getElementById("company-logo").src =
      "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1474111030/xukf68izn6avt57fk1ew.png";
  
    // Terminal output element
    const terminal = document.getElementById("terminal");
  
    // Preserve the original console.log
    const originalLog = console.log;
  
    // Override console.log to also print to terminal div
    console.log = function (...args) {
      originalLog.apply(console, args);
      const message = args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ');
  
      const line = document.createElement("div");
      line.textContent = message;
      terminal.appendChild(line);
    };
  
    // ▶ Answer No. 1
    const answer1Header = document.createElement("div");
    answer1Header.innerHTML = "\n▶ Answer No. 1:";
    answer1Header.style.color = "#00ff91";
    answer1Header.style.marginTop = "1rem";
    terminal.appendChild(answer1Header);
  
    // Answer Code: isSubsequence function
    function isSubsequence(s, t) {
      let i = 0, j = 0;
      while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
          i++;
        }
        j++;
      }
      return i === s.length;
    }
  
    // Output to terminal
    console.log("isSubsequence('abc', 'ahbgdc') →", isSubsequence('abc', 'ahbgdc'));
    console.log("isSubsequence('axc', 'ahbgdcx') →", isSubsequence('axc', 'ahbgdcx'));
  
    // ▶ Answer No. 2
    const answer2Header = document.createElement("div");
    answer2Header.innerHTML = "\n▶ Answer No. 2:";
    answer2Header.style.color = "#00ff91";
    answer2Header.style.marginTop = "1rem";
    terminal.appendChild(answer2Header);
  
    function countdown(num) {
      if (num < 1) return;
  
      setTimeout(() => {
        console.log(num);
        countdown(num - 1);
      }, 1000 * (6 - num)); // dynamic delay so numbers come one by one
    }
  
    countdown(5);
  });



// rest questions and answers given here
// print the order
// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 0);

// Promise.resolve().then(() => console.log("D"));

// console.log("E");

//Answer order: 
// A
// E
// D
// B
// C


// find the output: 

// const person = {
//     name: 'John',
//     greet: () => {
//         console.log(`Hello, ${this.name}`);
//     }
// };
// person.greet();
// answer: Hello, 


// implement a debounce function

// function debounce(fn, delay) {
//     let timer;
//     return function(...args) {
//     clearTimeout(timer)
//     timer = setTimeout(() => fn.apply(this, args), delay);
//     };
//   }
  
//   const functionSearch = function (query) {
//    console.log(query)
//   }
//   const debounced = debounce(functionSearch, 500);
//   debounced('AB');
//   debounced('ABC');




// What is this console.log?
// Why use let in this code? Why not const or var?
// Different types of scopes in js?
// == vs ===
// Process of web apis execution and concept of window in js
// List down the optimisation techniques in React.
  