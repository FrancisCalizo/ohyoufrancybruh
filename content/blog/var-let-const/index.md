---
title: "Var vs. Let vs. Const - What's the Difference? 🥊"
date: "2020-05-14"
description: "A quick look into the three ways of variable declarations in JavaScript."
tags: ['Code', 'JavaScript', 'Software' , 'Web', Development', 'Programming', 'Tutorial']
---

**Stay tuned, this blog post <u>isn't</u> finished!**

`let` and `const` are two "newer" (I think ES6 is pretty much widely adopted at this point) types of variable declarations that have gained extreme popularity and usage in this day and age. But before then, `var` ruled as King 👑. Let's take a look at each of the three and explain their uses and differences in JavaScript.

## var

Before the emergence of ES6, variable declaration was traditionally done with the`var` keyword.

```javascript
var name = 'Francis';

console.log(name) // 'Francis'
```

Here, you are declaring a variable called `name` and assigning it a string called `'Francis'`. Easy enough. We can also write it this way:

```javascript
var name;

name = 'Francis';

console.log(name) // 'Francis'
```
As you can see, we don't have to declare and assign a value to the variable on the same line. Lastly, we can do it this way as well:

```javascript
name = 'Francis';

var name;

console.log(name) // 'Francis'
```
We can assign a value to the variable before it is even declared, thanks to ***hoisting***.

### Scope of var

You can think of **scope** as the parts of your program where you can use or see a variable; it's where these varaiables are available for use. `var` is said to be <u>*function-scoped*</u>.
This means it is accessible anywhere within their containing function.

```javascript
function getMoney() {
  var money = 10;

  return money; // returns 10
}

console.log(money); // money is not defined here
```

But if we were to define `money` in the **global scope** outside of the function, we would have access to it:


```javascript
var money = 10;

function getMoney() {
  return money; // returns 10
}

console.log(money); // 10
```

Remember, **variables defined with `var` are accessible anywhere within their containing function**. The scope of `var` has created issues for many however. Variables declared with `var` are can be scoped within a function-block, but are still accessible if defined within `if` and `for` blocks:

```javascript
function getMoney(hasMoney) {
  if (hasMoney) {
      var x = 300;
  }

  return x;
}

getMoney(true);  // returns '10'
getMoney(false); // returns 'undefined'
```

The variable `x` was declared within the `if` block, and we were still able to access it from outside of that block. These scoping rules can cause several kinds of mistakes. We are also able to **redeclare** `var` variables:

```javascript
var theChosenOne = 'Anakin Skywalker';
var theChosenOne = 'Darth Vader';

console.log(theChosenOne) // 'Darth Vader'
```

Little quirks like these are why `let` and `const` were introduced into the language. Let's see how they differ and how you can use them to write code effectively.