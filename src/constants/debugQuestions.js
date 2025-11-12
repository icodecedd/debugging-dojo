export const debugChallenges = [
  // --- Original 23 Questions ---
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
      "The expression '1 / 2' performs integer division. Use '1.0 / 2' instead.",
      "The variable `result` should be a `double`.",
      "The `printf` statement is missing a semicolon.",
    ],
    hint: "When you divide two integers in C, the result is also an integer (the fractional part is discarded).",
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
    hint: "When you remove an item, the indices of the next items shift, causing the loop to skip.",
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
    title: "Python: Dictionary KeyError",
    text: "This code crashes with a 'KeyError'. What is the problem?",
    code: `user = {"name": "Alice", "level": 10}
print(user["age"])`,
    language: "python",
    correctAnswer: 1,
    options: [
      "The dictionary `user` is defined incorrectly.",
      "The key 'age' does not exist in the dictionary.",
      "The `print` function cannot be used for dictionary values.",
      "The string quotes should be single quotes.",
    ],
    hint: "You can only access keys that are present in the dictionary.",
  },

  // --- NEWLY ADDED 27 QUESTIONS ---
  {
    title: "C: Format Specifier Mismatch",
    text: "This code prints a strange number, not 'Hello'. Why?",
    code: `#include <stdio.h>
int main() {
    char *message = "Hello";
    printf("Message: %d\n", message);
    return 0;
}`,
    language: "c",
    correctAnswer: 0,
    options: [
      "The `%d` format specifier is for integers, but `message` is a string (char*). Use `%s`.",
      "The variable `message` was not initialized.",
      "The `printf` function is missing a header.",
      "The `main` function should return 1.",
    ],
    hint: "The format specifier in `printf` must match the data type of the variable you are printing.",
  },
  {
    title: "Java: Integer Object Comparison",
    text: "This code prints 'Not equal', which is confusing. Why?",
    code: `public class Main {
    public static void main(String[] args) {
        Integer a = 1000;
        Integer b = 1000;
        if (a == b) {
            System.out.println("Equal");
        } else {
            System.out.println("Not equal");
        }
    }
}`,
    language: "java",
    correctAnswer: 2,
    options: [
      "The `else` block is incorrect.",
      "The variables `a` and `b` are not integers.",
      "`==` compares object references. For values above 127, Java creates new `Integer` objects. Use `.equals()`.",
      "The values are too large for an `Integer` type.",
    ],
    hint: "This is a tricky bug! Java caches small Integer objects, but not large ones.",
  },
  {
    title: "Python: Assignment vs. Comparison",
    text: "This code prints 'You win!' but the score is only 5. What is the logical error?",
    code: `score = 5
if score = 10:
    print("You win!")`,
    language: "python",
    correctAnswer: 1,
    options: [
      "The `if` statement needs a colon.",
      "Assignment operator `=` was used instead of comparison operator `==`.",
      "The `print` statement is not indented.",
      "This code will not run; it is a syntax error in Python.",
    ],
    hint: "A single equals sign assigns a value. A double equals sign checks for equality.",
  },
  {
    title: "C: Assignment vs. Comparison",
    text: "This code prints 'x is 10' even though x is 5. Why?",
    code: `#include <stdio.h>
int main() {
    int x = 5;
    if (x = 10) {
        printf("x is 10\n");
    }
    return 0;
}`,
    language: "c",
    correctAnswer: 3,
    options: [
      "The `if` statement is missing a semicolon.",
      "The `printf` function is incorrect.",
      "The variable `x` was not initialized.",
      "Assignment operator `=` was used. The expression `(x = 10)` evaluates to 10, which is 'true'.",
    ],
    hint: "In C, `==` is for comparison. An assignment `(x = 10)` is an expression with the value 10.",
  },
  {
    title: "Java: Integer Division",
    text: "The program prints 'Result: 2.0' instead of 2.5. Why?",
    code: `public class Main {
    public static void main(String[] args) {
        double result = 5 / 2;
        System.out.println("Result: " + result);
    }
}`,
    language: "java",
    correctAnswer: 0,
    options: [
      "The expression '5 / 2' performs integer division first. Use '5.0 / 2' instead.",
      "The `result` variable should be an `int`.",
      "The `System.out.println` method cannot print doubles.",
      "A semicolon is missing.",
    ],
    hint: "When you divide two integers in Java, the result is also an integer.",
  },
  {
    title: "Python: Variable Scope Error",
    text: "This code crashes with a NameError. Why?",
    code: `def set_score():
    player_score = 100

set_score()
print(player_score)`,
    language: "python",
    correctAnswer: 2,
    options: [
      "The function `set_score` was not called correctly.",
      "The `print` function is spelled wrong.",
      "The variable 'player_score' was defined inside the function and is not accessible outside it.",
      "The function needs a `return` statement.",
    ],
    hint: "Variables created inside a function are local to that function.",
  },
  {
    title: "C: Variable Scope Error",
    text: "This code fails to compile. What is the scope issue?",
    code: `#include <stdio.h>
int main() {
    if (1) {
        int x = 10;
    }
    printf("x = %d\n", x);
    return 0;
}`,
    language: "c",
    correctAnswer: 1,
    options: [
      "The `printf` statement is missing a semicolon.",
      "The variable 'x' is only defined inside the `if` block's curly braces and cannot be accessed outside.",
      "The `if (1)` condition is invalid.",
      "The variable `x` was not initialized.",
    ],
    hint: "In C, variables are scoped to the nearest enclosing curly braces `{}`.",
  },
  {
    title: "Java: Uninitialized Array",
    text: "This code throws a NullPointerException. What was forgotten?",
    code: `public class Main {
    public static void main(String[] args) {
        int[] scores;
        scores[0] = 10;
        System.out.println(scores[0]);
    }
}`,
    language: "java",
    correctAnswer: 3,
    options: [
      "The variable `scores` should be `String[]`.",
      "The index `0` is out of bounds.",
      "The `System.out.println` call is incorrect.",
      "The array was declared but never initialized with `new int[size]`.",
    ],
    hint: "Declaring an array variable doesn't create the array itself; it just creates a null reference.",
  },
  {
    title: "Python: Forgetting to Return",
    text: "The program prints 'Score: None'. Why?",
    code: `def get_score(a, b):
    total = a + b

print("Score:", get_score(10, 20))`,
    language: "python",
    correctAnswer: 0,
    options: [
      "The function is missing the `return total` statement, so it returns `None` by default.",
      "The `print` function cannot call another function.",
      "The variables `a` and `b` are not defined.",
      "The `total` variable is out of scope.",
    ],
    hint: "If a Python function doesn't explicitly return a value, it automatically returns `None`.",
  },
  {
    title: "C: Wrong `scanf` for Array",
    text: "This code may crash or behave weirdly. What is wrong with the `scanf` call?",
    code: `#include <stdio.h>
int main() {
    char name[20];
    printf("Enter name: ");
    scanf("%s", &name);
    printf("Hello, %s\n", name);
    return 0;
}`,
    language: "c",
    correctAnswer: 2,
    options: [
      "The `%s` specifier is for strings, not char arrays.",
      "The `name` array is too small.",
      "The `&` is not needed. `name` by itself is already a pointer to the start of the array.",
      "The `printf` call is incorrect.",
    ],
    hint: "For `scanf` with `%d` or `%f`, you need `&variable`. For a string (char array), the array name is the address.",
  },
  {
    title: "Java: `this` Keyword Shadowing",
    text: "The program prints 'Player: null'. Why didn't the name get set?",
    code: `public class Player {
    String name;
    public Player(String name) {
        name = name; // This is the bug
    }
    public static void main(String[] args) {
        Player p = new Player("Alice");
        System.out.println("Player: " + p.name);
    }
}`,
    language: "java",
    correctAnswer: 1,
    options: [
      "The `main` method cannot access `p.name`.",
      "The constructor parameter `name` 'shadowed' the class field `name`. It should be `this.name = name;`.",
      "The `Player` object `p` was not created correctly.",
      "The `name` field should be `static`.",
    ],
    hint: "`this.name` refers to the class field, while `name` refers to the constructor's parameter.",
  },
  {
    title: "Python: Misspelled `__init__`",
    text: "This code crashes with an AttributeError. What is wrong with the class?",
    code: `class Player:
    def __int__(self, name):
        self.name = name

p = Player("Bob")
print(p.name)`,
    language: "python",
    correctAnswer: 0,
    options: [
      "The constructor method is misspelled. It should be `__init__`, not `__int__`.",
      "The `self` parameter is incorrect.",
      "You cannot create an object named `p`.",
      "The `print` statement is wrong.",
    ],
    hint: "The special method for initializing a new object in Python is called `__init__`.",
  },
  {
    title: "C: Missing Null Terminator",
    text: "This code prints 'abc' followed by garbage characters. Why?",
    code: `#include <stdio.h>
int main() {
    char word[3] = {'a', 'b', 'c'};
    printf("%s\n", word);
    return 0;
}`,
    language: "c",
    correctAnswer: 3,
    options: [
      "The array `word` is too small.",
      "The `%s` format specifier is incorrect.",
      "The `printf` function is broken.",
      "The string is missing a null terminator `\\0`. `printf` doesn't know where the string ends.",
    ],
    hint: "In C, strings must end with a `\\0` character. An array of size 4 is needed for 'abc\\0'.",
  },
  {
    title: "Java: Static Context Error",
    text: "This code will not compile. Why can't `main` call `printScore`?",
    code: `public class Game {
    public void printScore() {
        System.out.println("Score: 100");
    }

    public static void main(String[] args) {
        printScore();
    }
}`,
    language: "java",
    correctAnswer: 1,
    options: [
      "The `printScore` method has a typo.",
      "Cannot make a static reference to the non-static method `printScore`. `main` is static.",
      "The `main` method must be `void`.",
      "The `printScore` method should be `private`.",
    ],
    hint: "A `static` method (like `main`) belongs to the class, but `printScore` belongs to an *object*.",
  },
  {
    title: "Python: Read After Close",
    text: "This code crashes with a ValueError. What is the logical error?",
    code: `f = open("test.txt", "w")
f.write("hello")
f.close()
print(f.read())`,
    language: "python",
    correctAnswer: 2,
    options: [
      "The file `test.txt` does not exist.",
      "The file was opened in write mode (`w`), not read mode.",
      "The `f.read()` operation is on a file that has already been closed.",
      "The `print` function cannot be used with `f.read()`.",
    ],
    hint: "You cannot perform I/O operations on a file stream that has been closed.",
  },
  {
    title: "C: Semicolon on For Loop",
    text: "This code only prints 'Loop finished' once, not 5 times. Why?",
    code: `#include <stdio.h>
int main() {
    for (int i = 0; i < 5; i++);
    {
        printf("Loop finished\n");
    }
    return 0;
}`,
    language: "c",
    correctAnswer: 0,
    options: [
      "A semicolon `;` after the `for` statement makes it an empty loop. The `{}` block after it is separate.",
      "The `printf` function is incorrect.",
      "The variable `i` is not initialized.",
      "The `{}` braces are in the wrong place.",
    ],
    hint: "The semicolon `for(...);` means the loop's body is empty. The code block after it runs only once.",
  },
  {
    title: "Java: Missing Import",
    text: "This code fails to compile, saying 'cannot find symbol'. What is missing?",
    code: `public class Main {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
    }
}`,
    language: "java",
    correctAnswer: 3,
    options: [
      "The `main` method is incorrect.",
      "The `ArrayList` should be an `int[]`.",
      "The `names.add` method is wrong.",
      "The code is missing `import java.util.ArrayList;` at the top.",
    ],
    hint: "`ArrayList` is not part of the core Java language; it must be imported from the `java.util` package.",
  },
  {
    title: "Python: Import Namespace Error",
    text: "This code crashes with a NameError for 'pi'. What's the bug?",
    code: `import math

def circle_area(radius):
    return pi * (radius ** 2)

print(circle_area(10))`,
    language: "python",
    correctAnswer: 1,
    options: [
      "The `math` module does not have `pi`.",
      "The function should call `math.pi`, not just `pi`.",
      "The `circle_area` function is defined incorrectly.",
      "The `**` operator is invalid.",
    ],
    hint: "When you `import math`, you must access its contents using the `math.` prefix.",
  },
  {
    title: "C: `strcmp` Logic Error",
    text: "The user typed 'admin' but the code printed 'Invalid'. Why?",
    code: `#include <stdio.h>
#include <string.h>
int main() {
    char pass[10] = "admin";
    if (strcmp(pass, "admin")) {
        printf("Invalid\n");
    } else {
        printf("Success\n");
    }
    return 0;
}`,
    language: "c",
    correctAnswer: 0,
    options: [
      "The `strcmp` function returns 0 (which is 'false') when strings are equal.",
      "The `pass` variable is not initialized correctly.",
      "The `<string.h>` header is missing.",
      "The `else` block is incorrect.",
    ],
    hint: "`strcmp` returns 0 for equality, a negative value if s1<s2, and a positive value if s1>s2.",
  },
  {
    title: "Java: `switch` Fall-Through",
    text: "If `day` is 1, this code prints 'Monday' and 'Tuesday'. What's missing?",
    code: `public class Main {
    public static void main(String[] args) {
        int day = 1;
        switch (day) {
            case 1:
                System.out.println("Monday");
            case 2:
                System.out.println("Tuesday");
            default:
                System.out.println("Other day");
        }
    }
}`,
    language: "java",
    correctAnswer: 2,
    options: [
      "The `default` case is incorrect.",
      "The `switch` variable `day` is the wrong type.",
      "Missing `break;` statements after each `case` block.",
      "The `case 1` label is wrong.",
    ],
    hint: "Without a `break`, a `switch` statement will \"fall through\" and execute the next case's code.",
  },
  {
    title: "Python: Dictionary by Index",
    text: "This code crashes with a 'KeyError: 0'. Why?",
    code: `my_dict = {"name": "Eve", "id": 1}
print(my_dict[0])`,
    language: "python",
    correctAnswer: 1,
    options: [
      "The `print` function is incorrect.",
      "Dictionaries are accessed by keys (e.g., 'name'), not by integer index.",
      "The dictionary `my_dict` is defined incorrectly.",
      "The key `0` does not exist.",
    ],
    hint: "Only lists and tuples are accessed by numerical index. Dictionaries use keys.",
  },
  {
    title: "C: `char` vs String Literal",
    text: "This code fails to compile. What is the type mismatch?",
    code: `#include <stdio.h>
int main() {
    char letter = "A";
    printf("%c\n", letter);
    return 0;
}`,
    language: "c",
    correctAnswer: 3,
    options: [
      "The `printf` specifier `%c` is wrong.",
      "The variable `letter` is a bad name.",
      "The `stdio.h` header is not needed.",
      "A `char` variable uses single quotes `'A'`, while double quotes `\"A\"` are for a string (char*).",
    ],
    hint: "In C, single quotes are for a single character, double quotes are for a C-style string.",
  },
  {
    title: "Java: String Immutability",
    text: "The code prints 'hello' instead of 'HELLO'. Why?",
    code: `public class Main {
    public static void main(String[] args) {
        String greeting = "hello";
        greeting.toUpperCase();
        System.out.println(greeting);
    }
}`,
    language: "java",
    correctAnswer: 0,
    options: [
      "Strings in Java are immutable. `toUpperCase` returns a new string, but the result wasn't reassigned.",
      "The `toUpperCase` method is spelled incorrectly.",
      "The `System.out.println` method cannot print uppercase.",
      "The `greeting` variable was not initialized.",
    ],
    hint: "The fix is `greeting = greeting.toUpperCase();`.",
  },
  {
    title: "Python: Loop Range Logic",
    text: "This loop is supposed to print 1, 2, 3, 4, 5 but it stops at 4. Why?",
    code: `for i in range(1, 5):
    print(i)`,
    language: "python",
    correctAnswer: 1,
    options: [
      "The `print` function is indented wrong.",
      "The `range(a, b)` function goes up to *but not including* `b`. It should be `range(1, 6)`.",
      "The loop variable `i` is invalid.",
      "The loop should be a `while` loop.",
    ],
    hint: "`range(stop)` or `range(start, stop)` always stops one number before `stop`.",
  },
  {
    title: "Java: Using `[]` on `ArrayList`",
    text: "This code will not compile. What is the correct way to get an item from an `ArrayList`?",
    code: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        System.out.println(list[0]);
    }
}`,
    language: "java",
    correctAnswer: 2,
    options: [
      "The `ArrayList` was not initialized.",
      "The `import` statement is wrong.",
      "Array syntax `[0]` cannot be used. You must use the `.get(0)` method.",
      "The `list.add` method is incorrect.",
    ],
    hint: "`[]` is for arrays (like `int[]`), `.get()` is for `ArrayList`.",
  },
  {
    title: "Python: String Method on List",
    text: "This code crashes with an 'AttributeError'. What's wrong?",
    code: `inventory = ["sword", "shield"]
print(inventory.split(","))`,
    language: "python",
    correctAnswer: 0,
    options: [
      "The `.split()` method is for strings, not for lists.",
      "The `print` function is incorrect.",
      "The `inventory` list is defined wrong.",
      "The comma `\",\"` is an invalid argument.",
    ],
    hint: "You can `.split()` a string *into* a list, but you can't `.split()` a list that already exists.",
  },
];
