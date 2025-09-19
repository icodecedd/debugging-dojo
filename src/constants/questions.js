export const challenges = [
  {
    title: "Python Challenge",
    text: "There's something wrong with the formatting in this code. Identify and correct the issue.",
    code: `def calculate_sum(numbers):
total = 0
for num in numbers:
  total += num
return total`,
    language: "python",
    answers: [
      "indentation error",
      "indentation",
      "wrong indentation",
      "no indentation",
      "missing indentation",
      "formatting error",
      "whitespace error",
    ],
    hint: "Check the alignment of each line inside the function.",
  },
  {
    title: "Java Challenge",
    text: "This Java program won't compile. There's a missing piece of punctuation.",
    code: `public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World")
        int x = 5;
    }
}`,
    language: "java",
    answers: [
      "missing semicolon",
      "no semicolon",
      "semicolon missing",
      "need semicolon",
      "forgot semicolon",
      "syntax error",
    ],
    hint: "Every statement in Java needs to end with something...",
  },
  {
    title: "C Challenge",
    text: "This C program won't compile because it's missing something at the top.",
    code: `int main() {
    printf("Hello World\\n");
    return 0;
}`,
    language: "c",
    answers: [
      "missing header file",
      "no header file",
      "header file missing",
      "missing include",
      "no include",
      "missing stdio.h",
      "need header",
    ],
    hint: "The printf function needs a specific header file to be included.",
  },
  {
    title: "Python Challenge",
    text: "This code should print a greeting, but there's a typo. Find and fix it.",
    code: `name = "Alice"
age = 25
print(f"Hello {naem}, you are {age} years old")`,
    language: "python",
    answers: [
      "variable name typo",
      "typo in variable name",
      "misspelled variable",
      "wrong variable name",
      "spelling error",
      "typo",
      "name error",
    ],
    hint: "Look carefully at the variable name in the print statement.",
  },
  {
    title: "Java Challenge",
    text: "This code looks correct but won't compile due to a capitalization mistake.",
    code: `public class Calculator {
    public static void main(String[] args) {
        system.out.println("Result: " + (5 + 3));
    }
}`,
    language: "java",
    answers: [
      "incorrect capitalization",
      "wrong capitalization",
      "capitalization error",
      "case sensitivity error",
      "lowercase system",
      "should be System",
      "case error",
    ],
    hint: "Java is case-sensitive. Check the System.out.println statement carefully.",
  },
  {
    title: "C Challenge",
    text: "This code compiles but prints garbage values. What variable isn't properly set up?",
    code: `#include <stdio.h>
int main() {
    int x;
    printf("The value is: %d\\n", x);
    return 0;
}`,
    language: "c",
    answers: [
      "uninitialized variable",
      "variable not initialized",
      "no initial value",
      "variable not set",
      "missing initialization",
      "undefined variable value",
      "no value assigned",
    ],
    hint: "The variable 'x' is declared but never given a value before being used.",
  },
  {
    title: "Python Challenge",
    text: "This code tries to access a list element but crashes. What's the issue?",
    code: `fruits = ["apple", "banana", "orange"]
print("My favorite fruit is:", fruits[3])`,
    language: "python",
    answers: [
      "index out of range",
      "list index out of range",
      "array index error",
      "wrong index",
      "index error",
      "index too high",
      "invalid index",
    ],
    hint: "Count how many items are in the list and check the index being accessed.",
  },
  {
    title: "Java Challenge",
    text: "This program compiles but crashes when running. What's accessing something that doesn't exist?",
    code: `public class ArrayTest {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        System.out.println("Last number: " + numbers[5]);
    }
}`,
    language: "java",
    answers: [
      "array index out of bounds",
      "index out of bounds",
      "array bounds error",
      "wrong array index",
      "index error",
      "invalid array access",
      "bounds exception",
    ],
    hint: "Arrays in Java start at index 0. How many elements are there vs. what index is being accessed?",
  },
  {
    title: "C Challenge",
    text: "This program compiles but doesn't print the expected decimal number. What's wrong with the data types?",
    code: `#include <stdio.h>
int main() {
    int result = 7 / 2;
    printf("Result: %f\\n", result);
    return 0;
}`,
    language: "c",
    answers: [
      "integer division and wrong format specifier",
      "integer division",
      "wrong data type",
      "int instead of float",
      "wrong format specifier",
      "type mismatch",
      "should use float",
    ],
    hint: "Check both the data type of 'result' and the format specifier used in printf.",
  },
  {
    title: "Python Challenge",
    text: "This code attempts to divide two numbers but raises an error. What's wrong?",
    code: `def divide(a, b):
    result = a / b
    return result

print(divide(10, 0))`,
    language: "python",
    answers: [
      "division by zero",
      "divide by zero",
      "zero division error",
      "dividing by zero",
      "cannot divide by zero",
      "zero division",
      "math error",
    ],
    hint: "Check what happens when the second argument is zero.",
  },
  {
    title: "Java Challenge",
    text: "This program won't compile due to a missing keyword for variable declaration.",
    code: `public class Counter {
    public static void main(String[] args) {
        count = 10;
        System.out.println("Count: " + count);
    }
}`,
    language: "java",
    answers: [
      "missing variable declaration",
      "no variable declaration",
      "variable not declared",
      "missing data type",
      "no type specified",
      "undeclared variable",
      "declaration missing",
    ],
    hint: "Variables in Java need a type declaration before use.",
  },
  {
    title: "C Challenge",
    text: "This program crashes when accessing a string. What's the issue with memory?",
    code: `#include <stdio.h>
int main() {
    char *str;
    str[0] = 'A';
    printf("String: %s\\n", str);
    return 0;
}`,
    language: "c",
    answers: [
      "uninitialized pointer",
      "pointer not initialized",
      "null pointer",
      "no memory allocated",
      "pointer not set",
      "undefined pointer",
      "memory not allocated",
    ],
    hint: "Check if the string pointer is allocated memory before use.",
  },
  {
    title: "Python Challenge",
    text: "This code tries to concatenate strings but fails. Identify the issue.",
    code: `greeting = "Hello"
name = 42
message = greeting + name`,
    language: "python",
    answers: [
      "type mismatch",
      "wrong data types",
      "cannot concatenate int and string",
      "type error",
      "mixing types",
      "incompatible types",
      "string and number",
    ],
    hint: "Check the types of variables being concatenated.",
  },
  {
    title: "Java Challenge",
    text: "This code throws a null pointer exception. What's causing it?",
    code: `public class Test {
    public static void main(String[] args) {
        String text = null;
        System.out.println(text.length());
    }
}`,
    language: "java",
    answers: [
      "null pointer exception",
      "null pointer",
      "calling method on null",
      "text is null",
      "null reference",
      "null value error",
      "accessing null object",
    ],
    hint: "Check if the variable is initialized before calling methods on it.",
  },
  {
    title: "C Challenge",
    text: "This program doesn't return the expected value from a function. What's wrong?",
    code: `#include <stdio.h>
int add(int a, int b) {
    a + b;
}
int main() {
    printf("Sum: %d\\n", add(5, 3));
    return 0;
}`,
    language: "c",
    answers: [
      "missing return statement",
      "no return statement",
      "function doesn't return",
      "forgot return",
      "return missing",
      "no return value",
      "function not returning",
    ],
    hint: "Check if the function is actually returning the computed value.",
  },
];
