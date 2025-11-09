export const debugChallenges = [
  // --- Syntax & Typos (10 questions) ---
  {
    title: "Python Missing Colon",
    text: "This Python code won't run because of a syntax error. What's missing?",
    code: `def my_function()
    print("Hello from a function")`,
    language: "python",
    correctAnswer: 0,
    options: [
      "Missing a colon ':' after the function definition",
      "The print statement is not indented correctly",
      "The function needs to have a parameter",
      "Missing semicolon at the end of the print statement",
    ],
    hint: "In Python, blocks like functions and loops are started with a colon.",
  },
  {
    title: "Java Missing Semicolon",
    text: "This Java program has a compile error. What is it?",
    code: `public class Greeter {
    public static void main(String[] args) {
        System.out.println("Hello, World!")
    }
}`,
    language: "java",
    correctAnswer: 1,
    options: [
      "The class name should be lowercase",
      "Missing semicolon ';' at the end of the println statement",
      "The main method should not be static",
      "String literals must use single quotes",
    ],
    hint: "Almost every statement in Java must end with a specific character.",
  },
  {
    title: "C Missing Header",
    text: "This C code fails to compile because a function is not declared. What's the fix?",
    code: `int main() {
    printf("Using a function without its header.\n");
    return 0;
}`,
    language: "c",
    correctAnswer: 2,
    options: [
      "The main function must return void",
      "The string needs single quotes",
      "Missing '#include <stdio.h>' at the beginning of the file",
      "A semicolon is missing after `return 0`",
    ],
    hint: "The `printf` function is part of the standard input/output library.",
  },
  {
    title: "JavaScript Variable Typo",
    text: "This code produces a ReferenceError. Why?",
    code: `let greeting = "Hello";
console.log(greting);`,
    language: "javascript",
    correctAnswer: 0,
    options: [
      "Typo in the variable name: 'greting' should be 'greeting'",
      "console.log cannot print variables",
      "Missing semicolon after the first line",
      "The variable should have been declared with `var`",
    ],
    hint: "Check the spelling of the variable in the `console.log` call.",
  },
  {
    title: "Python Indentation Error",
    text: "This code will fail with an IndentationError. What's wrong?",
    code: `name = "Alice"
if name == "Alice":
print("Welcome, Alice!")`,
    language: "python",
    correctAnswer: 3,
    options: [
      "The variable `name` is not defined",
      "The `if` statement needs a colon",
      "String comparison should use `is` instead of `==`",
      "The `print` statement is not indented correctly",
    ],
    hint: "In Python, code inside an `if` block must be indented.",
  },
  {
    title: "Java Case Sensitivity",
    text: "This Java code won't compile due to a case-sensitivity issue. What is it?",
    code: `public class Main {
    public static void main(String[] args) {
        string message = "hello";
        System.out.println(message);
    }
}`,
    language: "java",
    correctAnswer: 1,
    options: [
      "The `main` method should be capitalized",
      "The type `string` should be `String` with a capital 'S'",
      "The variable `message` should be `Message`",
      "System.out.println should be `system.out.println`",
    ],
    hint: "Java's built-in types, like String, are case-sensitive.",
  },
  {
    title: "C Mismatched Parentheses",
    text: "This C code has a syntax error. Can you spot it?",
    code: `#include <stdio.h>
int main() {
    printf("Hello, World!\n";
    return 0;
}`,
    language: "c",
    correctAnswer: 0,
    options: [
      "Missing closing parenthesis ')' in the printf call",
      "The main function should be `void main()`",
      "The include statement is incorrect",
      "The return value should be 1, not 0",
    ],
    hint: "Count the opening and closing parentheses.",
  },
  {
    title: "JavaScript Missing Quotes",
    text: "This code will throw a syntax error. What's the problem?",
    code: `let name = Bob;
console.log("Hello, " + name);`,
    language: "javascript",
    correctAnswer: 2,
    options: [
      "The `let` keyword is incorrect",
      "The `+` operator cannot be used with strings",
      "The string literal 'Bob' is missing quotes around it",
      "console.log is misspelled",
    ],
    hint: "When you want to create a string of text, you need to enclose it in quotes.",
  },
  {
    title: "Python Function Call Parentheses",
    text: "This code doesn't print anything. Why not?",
    code: `def say_hello():
    return "hello"

say_hello`,
    language: "python",
    correctAnswer: 3,
    options: [
      "The function needs a `print` statement inside it",
      "The function is missing a parameter",
      "The function name is invalid",
      "The function is not being called correctly; it needs parentheses `()`",
    ],
    hint: "Just writing a function's name refers to the function itself, it doesn't execute it.",
  },
  {
    title: "C++ Missing Semicolon",
    text: "This C++ code won't compile. What is missing?",
    code: `#include <iostream>
int main() {
    std::cout << "Hello, C++!" << std::endl
    return 0;
}`,
    language: "cpp",
    correctAnswer: 1,
    options: [
      "The `main` function should return 1",
      "A semicolon ';' is missing after the `std::endl`",
      "The iostream header is not needed",
      "You should use `printf` instead of `std::cout`",
    ],
    hint: "In C++, most statements need to be terminated with a semicolon.",
  },

  // --- Logic & Runtime Errors (15 questions) ---
  {
    title: "Python Index Out of Range",
    text: "This code will raise an IndexError. What is the cause?",
    code: `letters = ['a', 'b', 'c']
print(letters[3])`,
    language: "python",
    correctAnswer: 0,
    options: [
      "Accessing an index that doesn't exist. The last index is 2.",
      "Lists in Python are 1-indexed.",
      "The `print` function cannot be used with lists.",
      "The list `letters` was not initialized correctly.",
    ],
    hint: "List indices start at 0. If a list has 3 items, what are its valid indices?",
  },
  {
    title: "Java String Comparison",
    text: "The output is 'Strings are not equal', which is unexpected. Why?",
    code: `public class Compare {
    public static void main(String[] args) {
        String s1 = new String("hello");
        String s2 = new String("hello");
        if (s1 == s2) {
            System.out.println("Strings are equal");
        } else {
            System.out.println("Strings are not equal");
        }
    }
}`,
    language: "java",
    correctAnswer: 2,
    options: [
      "The `else` statement is incorrect",
      "The strings have different casing",
      "The '==' operator compares object references, not content. Use '.equals()' instead.",
      "You cannot create strings with `new String()`",
    ],
    hint: "In Java, `==` checks if two variables point to the exact same object in memory.",
  },
  {
    title: "C Uninitialized Variable",
    text: "This program prints a garbage value. What's the problem?",
    code: `#include <stdio.h>
int main() {
    int count;
    printf("The count is: %d\n", count);
    return 0;
}`,
    language: "c",
    correctAnswer: 1,
    options: [
      "The format specifier should be `%s`",
      "The variable 'count' is used before it has been given a value",
      "The `printf` function is used incorrectly",
      "The program is missing `return 1`",
    ],
    hint: "Local variables in C are not automatically initialized to zero.",
  },
  {
    title: "JavaScript Infinite Loop",
    text: "This `while` loop will run forever. What is the error?",
    code: `let i = 0;
while (i < 5) {
    console.log(i);
}`,
    language: "javascript",
    correctAnswer: 3,
    options: [
      "The condition `i < 5` is always false",
      "The `console.log` function is too slow",
      "The variable `i` should be initialized to 1",
      "The loop variable 'i' is never incremented",
    ],
    hint: "For a `while` loop to end, the condition must eventually become false.",
  },
  {
    title: "Python Type Error",
    text: "This code will raise a TypeError. Why?",
    code: `age = 25
print("Your age is " + age)`,
    language: "python",
    correctAnswer: 0,
    options: [
      "Cannot concatenate a string and an integer. `age` must be converted to a string first.",
      "The `+` operator is for addition only.",
      "The `print` function is missing an f-string.",
      "The string is missing a closing quote.",
    ],
    hint: "You can't add a string and a number together directly. Use `str(age)`.",
  },
  {
    title: "Java NullPointerException",
    text: "This code throws a NullPointerException. What is the reason?",
    code: `public class Test {
    public static void main(String[] args) {
        String name = null;
        System.out.println("Length: " + name.length());
    }
}`,
    language: "java",
    correctAnswer: 2,
    options: [
      "The `length()` method is spelled incorrectly",
      "The `main` method cannot have local variables",
      "Calling a method on a `null` reference. The 'name' variable was not initialized to an object.",
      "The `+` operator cannot be used with `null`.",
    ],
    hint: "A variable that is `null` doesn't point to any object, so you can't call methods on it.",
  },
  {
    title: "C Integer Division",
    text: "The program prints 'Result: 0.000000' instead of 0.5. Why?",
    code: `#include <stdio.h>
int main() {
    float result = 1 / 2;
    printf("Result: %f\n", result);
    return 0;
}`,
    language: "c",
    correctAnswer: 1,
    options: [
      "The format specifier `%f` is incorrect for floats",
      "The expression '1 / 2' performs integer division. Use '1.0 / 2.0' instead.",
      "The variable `result` should be a `double`.",
      "The `printf` statement is missing a semicolon.",
    ],
    hint: "When you divide two integers in C, the result is also an integer (the fractional part is discarded).",
  },
  {
    title: "JavaScript Off-by-One Error",
    text: "This loop doesn't print the last element of the array. Why?",
    code: `const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length - 1; i++) {
    console.log(fruits[i]);
}`,
    language: "javascript",
    correctAnswer: 0,
    options: [
      "The loop condition `i < fruits.length - 1` stops one element too early.",
      "The array is declared with `const` and cannot be looped over.",
      "The loop should start with `i = 1`.",
      "`console.log` cannot be used inside a loop.",
    ],
    hint: "If an array has length 3, what is the index of the last element? What is the last value of `i` in this loop?",
  },
  {
    title: "Python Forgetting 'self'",
    text: "This code fails with a TypeError. What is missing in the method definition?",
    code: `class Dog:
    def bark():
        print("Woof!")

my_dog = Dog()
my_dog.bark()`,
    language: "python",
    correctAnswer: 2,
    options: [
      "The class name `Dog` should be lowercase.",
      "The method `bark` should be named `__bark__`.",
      "The method `bark` is missing the 'self' parameter.",
      "You cannot create an instance of a class like this.",
    ],
    hint: "The first parameter of any instance method in a Python class is conventionally named `self`.",
  },
  {
    title: "Java Array Index Out of Bounds",
    text: "This program will throw an ArrayIndexOutOfBoundsException. Why?",
    code: `public class Numbers {
    public static void main(String[] args) {
        int[] nums = new int[5];
        nums[5] = 10;
    }
}`,
    language: "java",
    correctAnswer: 3,
    options: [
      "The array `nums` was not initialized.",
      "The value `10` is not an integer.",
      "The main method cannot contain an array.",
      "The array has indices 0-4, but the code tries to access index 5.",
    ],
    hint: "An array of size 5 has a maximum index of 4.",
  },
  {
    title: "C Missing Ampersand in scanf",
    text: "This program might crash or behave unexpectedly when the user enters input. Why?",
    code: `#include <stdio.h>
int main() {
    int age;
    printf("Enter your age: ");
    scanf("%d", age);
    printf("You are %d years old.\n", age);
    return 0;
}`,
    language: "c",
    correctAnswer: 0,
    options: [
      "`scanf` requires the memory address of the variable, so it should be `&age`.",
      "The `%d` format specifier is incorrect.",
      "The `age` variable was not initialized.",
      "The `printf` statement is incorrect.",
    ],
    hint: "The `scanf` function needs to know *where* to store the input, not just the current value of the variable.",
  },
  {
    title: "JavaScript Scope Issue with 'var'",
    text: "The output is '3' three times, not 0, 1, 2. Why?",
    code: `for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}`,
    language: "javascript",
    correctAnswer: 1,
    options: [
      "The `setTimeout` function is asynchronous.",
      "The variable 'i', declared with 'var', is function-scoped. By the time the logs run, the loop is finished and 'i' is 3. Using 'let' would fix this.",
      "The `console.log` function is broken.",
      "The loop condition is incorrect.",
    ],
    hint: "Think about what the value of `i` is *after* the loop has completed.",
  },
  {
    title: "Python Modifying a List While Iterating",
    text: "The code is supposed to remove all odd numbers, but it doesn't work correctly. Why?",
    code: `numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num % 2 != 0:
        numbers.remove(num)
print(numbers)`,
    language: "python",
    correctAnswer: 2,
    options: [
      "The `remove` method does not exist for lists.",
      "The modulo operator `%` is incorrect.",
      "Modifying a list while iterating over it can skip elements. It's better to create a new list.",
      "The `if` condition is wrong.",
    ],
    hint: "When you remove an item from a list, the indices of the subsequent items shift, causing the loop to skip the next item.",
  },
  {
    title: "Java Integer Overflow",
    text: "The output is a negative number, which is not the expected sum. Why?",
    code: `public class Overflow {
    public static void main(String[] args) {
        int largeNum1 = 2000000000;
        int largeNum2 = 2000000000;
        int sum = largeNum1 + largeNum2;
        System.out.println("Sum: " + sum);
    }
}`,
    language: "java",
    correctAnswer: 0,
    options: [
      "The sum exceeds the maximum value for an 'int', causing an overflow. Using 'long' would solve this.",
      "The `+` operator is incorrect for large numbers.",
      "The variables are not initialized correctly.",
      "The `println` statement cannot handle large numbers.",
    ],
    hint: "An `int` in Java has a maximum value. What happens when you go past it?",
  },
  {
    title: "C Function Missing Return",
    text: "The sum printed is a garbage value. What is wrong with the `add` function?",
    code: `#include <stdio.h>
int add(int a, int b) {
    int sum = a + b;
}
int main() {
    printf("Sum: %d\n", add(5, 10));
    return 0;
}`,
    language: "c",
    correctAnswer: 3,
    options: [
      "The `sum` variable is not needed.",
      "The function `add` should be of type `void`.",
      "The `printf` call is incorrect.",
      "The function is declared to return an 'int' but does not return a value.",
    ],
    hint: "If a function promises to return a value, it must have a `return` statement.",
  },

  // --- More Subtle Bugs (5 questions) ---
  {
    title: "JavaScript Floating-Point Precision",
    text: "The result is not exactly 0.3. Why is the output 'false'?",
    code: `console.log(0.1 + 0.2 === 0.3);`,
    language: "javascript",
    correctAnswer: 1,
    options: [
      "The `===` operator cannot be used for numbers.",
      "Floating-point math is not always precise in computers, leading to tiny errors.",
      "The `console.log` statement is incorrect.",
      "The numbers should be stored in variables first.",
    ],
    hint: "Computers store decimal numbers in binary, which can lead to small rounding errors.",
  },
  {
    title: "Python Default Mutable Argument",
    text: "Calling the function twice produces an unexpected result. Why does the second call print `[1, 2]`?",
    code: `def add_to_list(item, my_list=[]):
    my_list.append(item)
    return my_list

print(add_to_list(1))
print(add_to_list(2))`,
    language: "python",
    correctAnswer: 0,
    options: [
      "The default list is created only once and is reused across calls.",
      "The `append` method is incorrect.",
      "The `print` function is stateful.",
      "The function should not have a return value.",
    ],
    hint: "Default arguments are evaluated when the function is defined, not when it's called.",
  },
  {
    title: "C String Literal Modification",
    text: "This program is likely to crash. Why is it unsafe?",
    code: `#include <stdio.h>
int main() {
    char *str = "Hello, World!";
    str[0] = 'J'; // Attempting to modify a string literal
    printf("%s\n", str);
    return 0;
}`,
    language: "c",
    correctAnswer: 2,
    options: [
      "The `printf` function cannot print modified strings.",
      "The variable `str` should be an array `char str[]`.",
      "String literals are often stored in read-only memory, and modifying them results in undefined behavior.",
      "The character 'J' is invalid.",
    ],
    hint: "Think about where the computer stores the text `\"Hello, World!\"`.",
  },
  {
    title: "Java Character vs String",
    text: "This code does not compile. What is the type mismatch?",
    code: `public class Types {
    public static void main(String[] args) {
        char initial = "J";
        System.out.println(initial);
    }
}`,
    language: "java",
    correctAnswer: 3,
    options: [
      "The variable `initial` is not a valid name.",
      "The `System.out.println` method cannot print characters.",
      "The `main` method is incorrect.",
      "A `char` is for a single character and uses single quotes ('J'), while double quotes (\"J\") create a `String`.",
    ],
    hint: "Pay close attention to the difference between single quotes and double quotes in Java.",
  },
  {
    title: "JavaScript 'this' in a Callback",
    text: "The output is 'My name is undefined'. Why?",
    code: `const person = {
    name: "Alice",
    greet: function() {
        setTimeout(function() {
            console.log("My name is " + this.name);
        }, 100);
    }
};
person.greet();`,
    language: "javascript",
    correctAnswer: 0,
    options: [
      "Inside the `setTimeout` callback, 'this' refers to the global object (or is undefined in strict mode), not the 'person' object. Using an arrow function `() => {}` would fix this.",
      "The `name` property is private.",
      "The `setTimeout` function is too fast.",
      "The `greet` method is defined incorrectly.",
    ],
    hint: "The value of `this` depends on how the function is called. Regular functions have their own `this` context.",
  },
];
