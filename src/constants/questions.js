export const challenges = [
  // --- Hello World Section (10 questions) ---
  {
    title: "Python Hello World",
    text: "Complete the code to print 'Hello, World!'.",
    code: `print(___)`,
    language: "python",
    answers: [`"Hello, World!"`, `'Hello, World!'`],
    expectedOutput: `Hello, World!`,
    hint: "Use double or single quotes to create the string.",
  },
  {
    title: "Java Hello World",
    text: "Complete the code to print 'Hello, Java!'.",
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println(___);
    }
}`,
    language: "java",
    answers: [`"Hello, Java!"`],
    expectedOutput: `Hello, Java!`,
    hint: "In Java, strings are enclosed in double quotes.",
  },
  {
    title: "C Hello World",
    text: "Complete the code to print 'Hello, C!'.",
    code: `#include <stdio.h>
int main() {
    printf(___);
    return 0;
}`,
    language: "c",
    answers: [`"Hello, C!\n"`],
    expectedOutput: `Hello, C!`,
    hint: "The printf function takes a string literal. Don't forget the newline character `\n`.",
  },
  {
    title: "JavaScript Hello World",
    text: "Complete the code to print 'Hello, JavaScript!'.",
    code: `console.log(___);`,
    language: "javascript",
    answers: [`"Hello, JavaScript!"`, `'Hello, JavaScript!'`],
    expectedOutput: `Hello, JavaScript!`,
    hint: "Use the `console.log` function to print to the console.",
  },
  {
    title: "Python Print a Number",
    text: "Complete the code to print the number 5.",
    code: `print(___)`,
    language: "python",
    answers: ["5"],
    expectedOutput: `5`,
    hint: "Just the number is needed inside the print function.",
  },
  {
    title: "Java Print a Number",
    text: "Complete the code to print the number 10.",
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println(___);
    }
}`,
    language: "java",
    answers: ["10"],
    expectedOutput: `10`,
    hint: "Directly place the number inside the parentheses.",
  },
  {
    title: "C Print a Number",
    text: "Complete the code to print the integer 42.",
    code: `#include <stdio.h>
int main() {
    printf("%d\n", ___);
    return 0;
}`,
    language: "c",
    answers: ["42"],
    expectedOutput: `42`,
    hint: "The value to be printed goes after the format string.",
  },
  {
    title: "JavaScript Print a Variable",
    text: "Complete the code to print the value of the variable 'message'.",
    code: `let message = "Success!";
console.log(___);`,
    language: "javascript",
    answers: ["message"],
    expectedOutput: `Success!`,
    hint: "Use the variable name to access its value.",
  },
  {
    title: "Python Print a Variable",
    text: "Complete the code to print the value of 'x'.",
    code: `x = 100
print(___)`,
    language: "python",
    answers: ["x"],
    expectedOutput: `100`,
    hint: "Simply use the variable's name inside the print function.",
  },
  {
    title: "C++ Hello World",
    text: "Complete the code to print 'Hello, C++!'.",
    code: `#include <iostream>
int main() {
    std::cout << ___ << std::endl;
    return 0;
}`,
    language: "cpp",
    answers: [`"Hello, C++!"`],
    expectedOutput: `Hello, C++!`,
    hint: "Use double quotes for the string, and stream it to `std::cout`.",
  },

  // --- Basic Operations & Variables (15 questions) ---
  {
    title: "Python Variable Assignment",
    text: "Assign the value 15 to the variable 'a'.",
    code: `a = ___
print(a)`,
    language: "python",
    answers: ["15"],
    expectedOutput: `15`,
    hint: "Use the assignment operator `=`.",
  },
  {
    title: "Java Variable Declaration",
    text: "Declare an integer variable 'score' and assign it the value 85.",
    code: `public class Main {
    public static void main(String[] args) {
        ___ score = 85;
        System.out.println(score);
    }
}`,
    language: "java",
    answers: ["int"],
    expectedOutput: `85`,
    hint: "In Java, you must specify the type of the variable (e.g., int, String).",
  },
  {
    title: "JavaScript Simple Addition",
    text: "Complete the code to print the sum of 5 and 10.",
    code: `let a = 5;
let b = 10;
console.log(___);`,
    language: "javascript",
    answers: ["a + b"],
    expectedOutput: `15`,
    hint: "Use the `+` operator to add the two variables.",
  },
  {
    title: "Python String Concatenation",
    text: "Combine the two strings to form 'Hello World'.",
    code: `s1 = "Hello"
s2 = "World"
print(s1 + " " + ___)`,
    language: "python",
    answers: ["s2"],
    expectedOutput: `Hello World`,
    hint: "Concatenate the second variable `s2` to the expression.",
  },
  {
    title: "C Simple Calculation",
    text: "Complete the code to calculate the product of x and y.",
    code: `#include <stdio.h>
int main() {
    int x = 5;
    int y = 4;
    printf("%d\n", ___);
    return 0;
}`,
    language: "c",
    answers: ["x * y"],
    expectedOutput: `20`,
    hint: "The multiplication operator in C is `*`.",
  },
  {
    title: "Java String Concatenation",
    text: "Complete the code to print 'Your score is: 100'.",
    code: `public class Main {
    public static void main(String[] args) {
        int score = 100;
        System.out.println("Your score is: " + ___);
    }
}`,
    language: "java",
    answers: ["score"],
    expectedOutput: `Your score is: 100`,
    hint: "You can concatenate strings and integers directly in a print statement.",
  },
  {
    title: "Python List Access",
    text: "Complete the code to print the first element of the list.",
    code: `my_list = ["apple", "banana", "cherry"]
print(my_list[___])`,
    language: "python",
    answers: ["0"],
    expectedOutput: `apple`,
    hint: "List indexing starts at 0.",
  },
  {
    title: "JavaScript Array Access",
    text: "Complete the code to print the last element of the array.",
    code: `const colors = ["red", "green", "blue"];
console.log(colors[___]);`,
    language: "javascript",
    answers: ["2"],
    expectedOutput: `blue`,
    hint: "The indices for this array are 0, 1, and 2.",
  },
  {
    title: "C Array Access",
    text: "Complete the code to print the second element of the array.",
    code: `#include <stdio.h>
int main() {
    int grades[] = {90, 85, 95};
    printf("%d\n", grades[___]);
    return 0;
}`,
    language: "c",
    answers: ["1"],
    expectedOutput: `85`,
    hint: "The second element is at index 1.",
  },
  {
    title: "Python Function Call",
    text: "Complete the code to call the 'greet' function.",
    code: `def greet():
    print("Hello from a function!")

___`,
    language: "python",
    answers: ["greet()"],
    expectedOutput: `Hello from a function!`,
    hint: "To call a function, use its name followed by parentheses.",
  },
  {
    title: "Java Method Call",
    text: "Complete the code to call the 'printMessage' method.",
    code: `public class Main {
    public static void printMessage() {
        System.out.println("Method called!");
    }
    public static void main(String[] args) {
        ___;
    }
}`,
    language: "java",
    answers: ["printMessage()"],
    expectedOutput: `Method called!`,
    hint: "Call the method by its name followed by parentheses and a semicolon.",
  },
  {
    title: "JavaScript Function with Parameter",
    text: "Complete the function call to print 'Hello, Bob'.",
    code: `function greet(name) {
    console.log("Hello, " + name);
}
greet(___);`,
    language: "javascript",
    answers: [`"Bob"`, `'Bob'`],
    expectedOutput: `Hello, Bob`,
    hint: "Pass the string 'Bob' as an argument to the function.",
  },
  {
    title: "Python Simple Loop",
    text: "Complete the for loop to print numbers 0, 1, and 2.",
    code: `for i in range(___):
    print(i)`,
    language: "python",
    answers: ["3"],
    expectedOutput: `0
1
2`,
    hint: "`range(3)` generates numbers from 0 up to (but not including) 3.",
  },
  {
    title: "C Simple If-Statement",
    text: "Complete the if-statement to check if 'a' is greater than 'b'.",
    code: `#include <stdio.h>
int main() {
    int a = 10;
    int b = 5;
    if (___) {
        printf("a is greater\n");
    }
    return 0;
}`,
    language: "c",
    answers: ["a > b"],
    expectedOutput: `a is greater`,
    hint: "The 'greater than' operator is `>`.",
  },
  {
    title: "Java Simple Boolean",
    text: "Complete the code to print the value of the boolean variable.",
    code: `public class Main {
    public static void main(String[] args) {
        boolean isJavaFun = true;
        System.out.println(___);
    }
}`,
    language: "java",
    answers: ["isJavaFun"],
    expectedOutput: `true`,
    hint: "Print the variable that holds the boolean value.",
  },

  // --- Slightly More Complex (5 questions) ---
  {
    title: "Python Sum of List",
    text: "Complete the code to add the current number to the total.",
    code: `def calculate_sum(numbers):
    total = 0
    for num in numbers:
        total = total + ___
    return total

print(calculate_sum([10, 20, 30]))`,
    language: "python",
    answers: ["num"],
    expectedOutput: `60`,
    hint: "Inside the loop, the current number is stored in the 'num' variable.",
  },
  {
    title: "JavaScript Find Max Number",
    text: "Complete the code to check if the current number is greater than max.",
    code: `function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > ___) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1, 5, 2, 8, 3]));`,
    language: "javascript",
    answers: ["max"],
    expectedOutput: `8`,
    hint: "You need to compare the current element `arr[i]` with the current maximum value stored in `max`.",
  },
  {
    title: "C String Length",
    text: "Include the necessary header to use the strlen function.",
    code: `#include <stdio.h>
#include <___>

int main() {
    char myString[] = "Hello";
    printf("Length: %d\n", strlen(myString));
    return 0;
}`,
    language: "c",
    answers: ["string.h"],
    expectedOutput: `Length: 5`,
    hint: "Functions for string manipulation in C are in the `string.h` header.",
  },
  {
    title: "Java For Loop",
    text: "Complete the for loop to iterate 5 times (from 0 to 4).",
    code: `public class Main {
    public static void main(String[] args) {
        for (int i = 0; ___; i++) {
            System.out.println(i);
        }
    }
}`,
    language: "java",
    answers: ["i < 5"],
    expectedOutput: `0
1
2
3
4`,
    hint: "The loop should continue as long as 'i' is less than 5.",
  },
  {
    title: "Python Dictionary Value",
    text: "Complete the code to access the value associated with the key 'city'.",
    code: `person = {"name": "John", "city": "New York"}
print(person[___])`,
    language: "python",
    answers: [`"city"`, `'city'`],
    expectedOutput: `New York`,
    hint: "Use the key as a string to get the corresponding value from the dictionary.",
  },
];