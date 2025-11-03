export const challenges = [
  {
    title: "Python Challenge",
    text: "Complete the code below to calculate the sum of numbers in a list.",
    code: `def calculate_sum(numbers):
    total = 0
    for num in numbers:
        total += ___
    return total

print(calculate_sum([1, 2, 3, 4]))`,
    language: "python",
    answers: ["num"],
    expectedOutput: `6`,
    hint: "What variable are you iterating over in the for loop?",
  },
  {
    title: "Java Challenge",
    text: "Complete the Java program below to print 'Hello World'.",
    code: `public class Hello {
    public static void main(String[] args) {
        System.out.println(___);
        int x = 5;
    }
}`,
    language: "java",
    answers: ['"Hello World"', '"Hello World"'],
    expectedOutput: `Hello World`,
    hint: "What string should be printed? Don't forget the quotes and semicolon.",
  },
  {
    title: "C Challenge",
    text: "Complete the C program by adding the necessary header file at the top.",
    code: `___
int main() {
    printf("Hello World\\n");
    return 0;
}`,
    language: "c",
    answers: ["#include <stdio.h>", "#include<stdio.h>"],
    expectedOutput: `Hello World`,
    hint: "The printf function requires the stdio.h header file.",
  },
  {
    title: "Python Challenge",
    text: "Complete the code to print a greeting message using the correct variable name.",
    code: `name = "Alice"
age = 25
print(f"Hello {___}, you are {age} years old")`,
    language: "python",
    answers: ["name"],
    expectedOutput: `Hello Alice, you are 25 years old`,
    hint: "Use the variable that stores the person's name.",
  },
  {
    title: "Java Challenge",
    text: "Complete the code to print the result of 5 + 3 with correct capitalization.",
    code: `public class Calculator {
    public static void main(String[] args) {
        ___.out.println("Result: " + (5 + 3));
    }
}`,
    language: "java",
    answers: ["System"],
    expectedOutput: `Result: 8`,
    hint: "Java is case-sensitive. What class provides the out object?",
  },
  {
    title: "C Challenge",
    text: "Complete the code to initialize the variable x with a value before printing it.",
    code: `#include <stdio.h>
int main() {
    int x = ___;
    printf("The value is: %d\\n", x);
    return 0;
}`,
    language: "c",
    answers: ["10", "0", "5", "1"],
    expectedOutput: `The value is: 10`,
    hint: "Assign any integer value to x. For example, use 10.",
  },
  {
    title: "Python Challenge",
    text: "Complete the code to access the last element in the fruits list correctly.",
    code: `fruits = ["apple", "banana", "orange"]
print("My favorite fruit is:", fruits[___])`,
    language: "python",
    answers: ["2", "-1"],
    expectedOutput: `My favorite fruit is: orange`,
    hint: "Python lists are 0-indexed. The last element is at index 2, or use -1 for the last item.",
  },
  {
    title: "Java Challenge",
    text: "Complete the code to access the last element in the numbers array correctly.",
    code: `public class ArrayTest {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        System.out.println("Last number: " + numbers[___]);
    }
}`,
    language: "java",
    answers: ["4"],
    expectedOutput: `Last number: 50`,
    hint: "Java arrays are 0-indexed. With 5 elements, the last index is 4.",
  },
  {
    title: "C Challenge",
    text: "Complete the code to correctly calculate and print the decimal result of 7 divided by 2.",
    code: `#include <stdio.h>
int main() {
    float result = 7.0 / ___;
    printf("Result: %f\\n", result);
    return 0;
}`,
    language: "c",
    answers: ["2", "2.0"],
    expectedOutput: `Result: 3.500000`,
    hint: "Complete the division operation with the second number.",
  },
  {
    title: "Python Challenge",
    text: "Complete the code to add a check that prevents division by zero.",
    code: `def divide(a, b):
    if b == ___:
        return "Cannot divide by zero"
    result = a / b
    return result

print(divide(10, 2))`,
    language: "python",
    answers: ["0"],
    expectedOutput: `5.0`,
    hint: "Check if b equals zero.",
  },
  {
    title: "Java Challenge",
    text: "Complete the code to properly declare the count variable with its data type.",
    code: `public class Counter {
    public static void main(String[] args) {
        ___ count = 10;
        System.out.println("Count: " + count);
    }
}`,
    language: "java",
    answers: ["int"],
    expectedOutput: `Count: 10`,
    hint: "What data type should be used for whole numbers in Java?",
  },
  {
    title: "C Challenge",
    text: "Complete the code to properly allocate memory for the string before using it.",
    code: `#include <stdio.h>
#include <stdlib.h>
int main() {
    char *str = (char*)malloc(___ * sizeof(char));
    str[0] = 'A';
    str[1] = '\\0';
    printf("String: %s\\n", str);
    free(str);
    return 0;
}`,
    language: "c",
    answers: ["10", "2", "5", "20"],
    expectedOutput: `String: A`,
    hint: "Allocate memory for at least 2 characters (one for 'A' and one for null terminator).",
  },
  {
    title: "Python Challenge",
    text: "Complete the code to convert the number to a string before concatenation.",
    code: `greeting = "Hello"
name = 42
message = greeting + str(___)
print(message)`,
    language: "python",
    answers: ["name"],
    expectedOutput: `Hello42`,
    hint: "Convert the name variable to a string using str().",
  },
  {
    title: "Java Challenge",
    text: "Complete the code to initialize the text variable before using it.",
    code: `public class Test {
    public static void main(String[] args) {
        String text = ___;
        System.out.println(text.length());
    }
}`,
    language: "java",
    answers: ['"Hello"', '"Hello"', '"test"', '"test"'],
    expectedOutput: `5`,
    hint: 'Initialize text with a string value, for example "Hello".',
  },
  {
    title: "C Challenge",
    text: "Complete the code to return the sum of a and b from the function.",
    code: `#include <stdio.h>
int add(int a, int b) {
    return ___;
}
int main() {
    printf("Sum: %d\\n", add(5, 3));
    return 0;
}`,
    language: "c",
    answers: ["a + b"],
    expectedOutput: `Sum: 8`,
    hint: "Return the sum of the two parameters a and b.",
  },
];
