# Methods

When an object contains a property whose value is a function, we call that function a "method". These functions aren't
special. They are regular functions that just happen to be inside an object.

```typescript
const lima = {
  name: "Lima",
  power: 10000,

  // We would call this lima's "bark" method
  bark: () => {
    console.log("Wau uuuuu wauauuau");
  },
};

// Let's make lima bark!
lima.bark();
```

> After seeing the previous code block you may have realized that the last line looks familiar! We've been using methods
> throughout the lessons and tasks. Some methods we've used so far are:
>
> - `console.log` - `log` method of console
> - `someArray.push` - `push` method of arrays
> - etc.

The reason we make the difference between `functions` and `methods` is that by having the function live inside the
object, it acquires 2 characteristics:

- Calling the method looks like asking the object to do something:

  ```typescript
  lima.bark(); // Lima is barking!

  // vs

  bark(); // Who is barking?
  ```

- Depending on how the method is defined, it can have access to the object and its other properties

  > We will cover this topic when we talk about the `this` keyword. For now, just remember that it can

## Syntax

### How-to define a method

- Using a normal function

  ```typescript
  const lima = {
    name: "Lima",
    power: 10000,

    // Method with no arguments
    bark: function (): void {
      console.log("Wau uuuuu wauauuau");
    },
    // Method with 1 argument
    spin: function (times: number): void {
      for (let i = 0; i < times; i++) {
        console.log("ぐるぐる");
      }
    },
  };
  ```

- Using an arrow function

  ```typescript
  const lima = {
    name: "Lima",
    power: 10000,

    // Method with no arguments
    bark: (): void => {
      console.log("Wau uuuuu wauauuau");
    },
    // Method with 1 argument
    spin: (times: number): void => {
      for (let i = 0; i < times; i++) {
        console.log("ぐるぐる");
      }
    },
  };
  ```

- Using the method specific syntax (special way to create methods):

  ```typescript
  const lima = {
    name: "Lima",
    power: 10000,

    // Method with no arguments
    bark(): void {
      console.log("Wau uuuuu wauauuau");
    },
    // Method with 1 argument
    spin(times: number): void {
      for (let i = 0; i < times; i++) {
        console.log("ぐるぐる");
      }
    },
  };
  ```

- By passing an existing function (after all, functions are values)

  ```typescript
  const bark = (): void => {
    console.log("Wau uuuuu wauauuau");
  };
  const spin = (times: number): void => {
    for (let i = 0; i < times; i++) {
      console.log("ぐるぐる");
    }
  };

  const lima = {
    name: "Lima",
    power: 10000,

    // Normal assignment
    bark: bark,
    // Short assignment
    spin,
  };
  ```

### How-to call a method

- With no arguments

  ```typescript
  lima.bark();
  ```

- With arguments

  ```typescript
  lima.spin(6);
  ```

- If the function returns a value

  ```typescript
  const hair = lima.changeHair(); // Hair everywhere
  ```

> Hopefully these examples show that there's no special way of calling methods. They are regular functions that just
> happen to be inside objects.

### How-to add a method to a type

> 🚨 **TypeScript**

- Using types for arrow functions

  ```typescript
  type Person = {
    name: string;
    age: number;

    // Arguments:
    // - topic:string
    // Return value type
    // - string
    getOpinion: (topic: string) => string;
  };
  ```

- Using method specific syntax

  ```typescript
  type Person = {
    name: string;
    age: number;

    // Arguments:
    // - topic:string
    // Return value type
    // - string
    getOpinion(topic: string): string;
  };
  ```

## Practice

- [Calling methods](../tasks/011-methods/1.1.instructions.md)
