# Functions

<details>
  <summary>TL;DR</summary>

A function is a type of value that contains a set of instructions that can be executed at will. Just as any other type
of value, functions can be stored in variables and passed around.

</details>

<hr>

Functions can be seen as a way to store a set of instructions.

Imagine writing down a recipe on how to cook a pie. The recipe itself is a thing, you can sell it, you can publish it,
you can send it to your mom, or a friend can ask you for it. But more importantly, you or someone else can follow it to
create something (in this case a pie).

Functions behave in a similar way. You can create a function, you can store it, you can pass it down to other parts of
your code, or you can execute it.

> Executing the instructions contained in a function is called "calling the function"

## Syntax

Functions can be written in two different ways, as **normal functions**, or as **arrow functions** (also called
**lambda functions**). While we explore how to write and use functions we'll show both ways so that you can compare them.

It is important to know how to write both styles so that you can identify when a function is being declared/used.

We'll cover their differences as well as when to use which one in a future lesson.

### How to declare a function

```typescript
// Normal function
function bakeCake(ingredients, style) {
  // Body

  return "a cake";
}
```

```typescript
// Arrow function
const bakeCake = (ingredients, style) => {
  // Body

  return "a cake";
};
```

A function is composed of the following parts:

- **Name** _(Optional)_. It is very similar to a variable name. It gives us a way to refer to the function to do something with it
- **Arguments** _(Optional)_. A comma separated list of variables that will hold values provided to the function. They
  can be seen as **a function's input**.
- **Body**. JavaScript code that the function holds. Whenever the function is _called_ this is the code that will be
  executed. For example, if we are baking a cake, the body could be something like:
  - Mix ingredients
  - Preheat oven
  - Put ingredients in the oven
  - Etc.
- **Return statement** _(Optional)_. The `return` statement indicates the function to finish executing and optionally,
  provide an output to whoever called the function. If no `return` statement is added to the body, the function will
  simply execute all lines of code and automatically "return" whenever it reaches the end (giving back `undefined`).

Try to identify these parts in the code above.

<hr>
<details>
<summary>Answer</summary>

Normal function:

![Normal function parts](assets/normal-function-parts.png)

Arrow function:

![Arrow function parts](assets/arrow-function-parts.png)

</details>
<hr>

## Practice

- [Simple function](../tasks/001-simple-function/1.instructions.md)
