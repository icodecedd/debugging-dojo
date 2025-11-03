export const debugChallenges = [
  {
    title: "Python Debug Challenge",
    text: "What's wrong with this code? The function should calculate the sum but it doesn't work correctly.",
    code: `def calculate_sum(numbers):
total = 0
for num in numbers:
  total += num
return total`,
    language: "python",
    correctAnswer: 0,
    options: [
      "Indentation error - 'total = 0' and 'return total' need proper indentation",
      "Missing semicolon at the end of return statement",
      "The variable 'num' should be 'number' instead",
      "The function needs a print statement to display the result",
    ],
    hint: "Check the alignment of each line inside the function.",
  },
  {
    title: "Java Debug Challenge",
    text: "This Java program won't compile. What's the issue?",
    code: `public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World")
        int x = 5;
    }
}`,
    language: "java",
    correctAnswer: 0,
    options: [
      "Missing semicolon after System.out.println statement",
      "String should use single quotes instead of double quotes",
      "The class name should be lowercase 'hello'",
      "Missing return statement in main method",
    ],
    hint: "Every statement in Java needs to end with something...",
  },
  {
    title: "C Debug Challenge",
    text: "This C program won't compile. What's missing?",
    code: `int main() {
    printf("Hello World\\n");
    return 0;
}`,
    language: "c",
    correctAnswer: 0,
    options: [
      "Missing header file '#include <stdio.h>' at the top",
      "Missing semicolon after return statement",
      "The main function should return void instead of int",
      "The printf statement needs parentheses removed",
    ],
    hint: "The printf function needs a specific header file to be included.",
  },
  {
    title: "Python Debug Challenge",
    text: "This code has a typo that will cause an error. What is it?",
    code: `name = "Alice"
age = 25
print(f"Hello {naem}, you are {age} years old")`,
    language: "python",
    correctAnswer: 0,
    options: [
      "Variable name typo - 'naem' should be 'name'",
      "Missing comma between variables in print statement",
      "The age variable should be a string, not a number",
      "The f-string syntax is incorrect",
    ],
    hint: "Look carefully at the variable name in the print statement.",
  },
  {
    title: "Java Debug Challenge",
    text: "This code won't compile due to a case sensitivity error. What's wrong?",
    code: `public class Calculator {
    public static void main(String[] args) {
        system.out.println("Result: " + (5 + 3));
    }
}`,
    language: "java",
    correctAnswer: 0,
    options: [
      "'system' should be 'System' with capital S",
      "Missing semicolon after the println statement",
      "The println method should be 'printLine' instead",
      "String concatenation syntax is incorrect",
    ],
    hint: "Java is case-sensitive. Check the System.out.println statement carefully.",
  },
  {
    title: "C Debug Challenge",
    text: "This code compiles but prints garbage values. What's the problem?",
    code: `#include <stdio.h>
int main() {
    int x;
    printf("The value is: %d\\n", x);
    return 0;
}`,
    language: "c",
    correctAnswer: 0,
    options: [
      "Variable 'x' is uninitialized before being used",
      "The printf format specifier should be %f instead of %d",
      "Missing header file for printf function",
      "Variable 'x' should be declared as 'float' not 'int'",
    ],
    hint: "The variable 'x' is declared but never given a value before being used.",
  },
  {
    title: "Python Debug Challenge",
    text: "This code will crash with an IndexError. What's the issue?",
    code: `fruits = ["apple", "banana", "orange"]
print("My favorite fruit is:", fruits[3])`,
    language: "python",
    correctAnswer: 0,
    options: [
      "Index out of range - list has 3 elements (indices 0-2), but accessing index 3",
      "List should use parentheses instead of square brackets",
      "The print statement needs f-string formatting",
      "List indexing should start from 1, not 0",
    ],
    hint: "Count how many items are in the list and check the index being accessed.",
  },
  {
    title: "Java Debug Challenge",
    text: "This program will throw an ArrayIndexOutOfBoundsException. Why?",
    code: `public class ArrayTest {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        System.out.println("Last number: " + numbers[5]);
    }
}`,
    language: "java",
    correctAnswer: 0,
    options: [
      "Array index out of bounds - array has 5 elements (indices 0-4), but accessing index 5",
      "Array should be declared with size parameter",
      "The array initialization syntax is incorrect",
      "System.out.println needs import statement",
    ],
    hint: "Arrays in Java start at index 0. How many elements are there vs. what index is being accessed?",
  },
  {
    title: "C Debug Challenge",
    text: "This program doesn't print the expected decimal number. What's wrong?",
    code: `#include <stdio.h>
int main() {
    int result = 7 / 2;
    printf("Result: %f\\n", result);
    return 0;
}`,
    language: "c",
    correctAnswer: 0,
    options: [
      "Integer division issue and wrong format specifier - should use float type and %f, or %d for int",
      "Missing cast to float in division",
      "The printf statement needs double quotes",
      "Division operation is incorrect - should be 7.0 / 2.0",
    ],
    hint: "Check both the data type of 'result' and the format specifier used in printf.",
  },
  {
    title: "Python Debug Challenge",
    text: "This code will raise a ZeroDivisionError. What's the problem?",
    code: `def divide(a, b):
    result = a / b
    return result

print(divide(10, 0))`,
    language: "python",
    correctAnswer: 0,
    options: [
      "Division by zero - attempting to divide by 0 which is undefined",
      "Missing error handling with try-except block",
      "Function parameters need type annotations",
      "The return statement should be outside the function",
    ],
    hint: "Check what happens when the second argument is zero.",
  },
  {
    title: "Java Debug Challenge",
    text: "This program won't compile. What's missing in the variable declaration?",
    code: `public class Counter {
    public static void main(String[] args) {
        count = 10;
        System.out.println("Count: " + count);
    }
}`,
    language: "java",
    correctAnswer: 0,
    options: [
      "Missing variable type declaration - should be 'int count = 10;'",
      "Variable should be declared as static final",
      "Missing access modifier 'private' or 'public'",
      "Variable name should be 'COUNT' in uppercase",
    ],
    hint: "Variables in Java need a type declaration before use.",
  },
  {
    title: "C Debug Challenge",
    text: "This program will crash when accessing the string. What's wrong with memory management?",
    code: `#include <stdio.h>
int main() {
    char *str;
    str[0] = 'A';
    printf("String: %s\\n", str);
    return 0;
}`,
    language: "c",
    correctAnswer: 0,
    options: [
      "Uninitialized pointer - memory not allocated for the string before use",
      "Pointer should be declared as 'char str[]' instead",
      "Missing null terminator in the string",
      "The printf format specifier should be %c instead of %s",
    ],
    hint: "Check if the string pointer is allocated memory before use.",
  },
  {
    title: "Python Debug Challenge",
    text: "This code will raise a TypeError. What's the issue?",
    code: `greeting = "Hello"
name = 42
message = greeting + name`,
    language: "python",
    correctAnswer: 0,
    options: [
      "Type mismatch - cannot concatenate string and int, need to convert name to string",
      "String concatenation should use comma instead of plus",
      "Variables should be swapped in the concatenation",
      "Missing space between greeting and name",
    ],
    hint: "Check the types of variables being concatenated.",
  },
  {
    title: "Java Debug Challenge",
    text: "This code will throw a NullPointerException. What's causing it?",
    code: `public class Test {
    public static void main(String[] args) {
        String text = null;
        System.out.println(text.length());
    }
}`,
    language: "java",
    correctAnswer: 0,
    options: [
      "Null pointer exception - calling method on null object, text needs to be initialized",
      "The length() method doesn't exist for String",
      "Should use text.size() instead of text.length()",
      "The null keyword should be 'NULL' in uppercase",
    ],
    hint: "Check if the variable is initialized before calling methods on it.",
  },
  {
    title: "C Debug Challenge",
    text: "This function doesn't return the expected value. What's missing?",
    code: `#include <stdio.h>
int add(int a, int b) {
    a + b;
}
int main() {
    printf("Sum: %d\\n", add(5, 3));
    return 0;
}`,
    language: "c",
    correctAnswer: 0,
    options: [
      "Missing return statement - function computes a + b but doesn't return it",
      "Function should return void instead of int",
      "The addition operation is incorrect syntax",
      "Missing parentheses around the addition",
    ],
    hint: "Check if the function is actually returning the computed value.",
  },
];
