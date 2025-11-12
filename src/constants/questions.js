export const challenges = [
  // --- Original 30 Questions ---
  {
    title: "Python: Define a Function",
    text: "Complete the code to *define* a function named 'start_game'.",
    code: `___ start_game():
  print("Game is starting!")

start_game()`,
    language: "python",
    answers: ["def"],
    expectedOutput: `Game is starting!`,
    hint: "What keyword do you use to start a function definition in Python?",
  },
  {
    title: "Python: Variable Assignment",
    text: "A player has 100 health. Assign the value 100 to the variable 'player_health'.",
    code: `___ = 100
print(player_health)`,
    language: "python",
    answers: ["player_health"],
    expectedOutput: `100`,
    hint: "Use the variable name followed by the assignment operator `=`.",
  },
  {
    title: "Python: Simple Addition",
    text: "You have 10 gold coins and find 5 more. Complete the code to calculate the total.",
    code: `gold = 10
found = 5
total = gold ___ found
print(total)`,
    language: "python",
    answers: ["+"],
    expectedOutput: `15`,
    hint: "Use the arithmetic operator for addition.",
  },
  {
    title: "Python: List Indexing",
    text: "A list contains your inventory. Access the *first* item, 'sword', from the list.",
    code: `inventory = ["sword", "shield", "potion"]
print(inventory[___])`,
    language: "python",
    answers: ["0"],
    expectedOutput: `sword`,
    hint: "List indexing in Python starts at 0.",
  },
  {
    title: "Python: Simple For Loop",
    text: "You need to print 'Loading...' 3 times. Complete the 'range' function to loop 3 times.",
    code: `for i in range(___):
  print("Loading...")`,
    language: "python",
    answers: ["3"],
    expectedOutput: `Loading...
Loading...
Loading...`,
    hint: "`range(n)` will run the loop `n` times, from 0 up to n-1.",
  },
  {
    title: "Python: Dictionary Access",
    text: "A dictionary stores a user's settings. Access the value associated with the key 'username'.",
    code: `user = {
  "username": "coder123",
  "level": 5
}
print(user[___])`,
    language: "python",
    answers: [`"username"`, `'username'`],
    expectedOutput: `coder123`,
    hint: "To get a value, use the dictionary key (as a string) inside square brackets.",
  },
  {
    title: "Python: If-Statement Operator",
    text: "Check if the 'score' (50) is *greater than* the 'high_score' (45).",
    code: `score = 50
high_score = 45
if score ___ high_score:
  print("New high score!")`,
    language: "python",
    answers: [">"],
    expectedOutput: `New high score!`,
    hint: "Use the correct comparison operator for 'greater than'.",
  },
  {
    title: "C: Print an Integer (Format Specifier)",
    text: "You have an integer variable 'score'. What format specifier is needed in 'printf' to print this integer?",
    code: `#include <stdio.h>
int main() {
    int score = 95;
    printf("Your score is: ___\n", score);
    return 0;
}`,
    language: "c",
    answers: ["%d"],
    expectedOutput: `Your score is: 95`,
    hint: "The format specifier for a standard integer (int) starts with a '%'.",
  },
  {
    title: "C: Print a Character (Format Specifier)",
    text: "You have a char variable 'grade'. What format specifier is used to print a single character?",
    code: `#include <stdio.h>
int main() {
    char grade = 'A';
    printf("Your grade is: ___\n", grade);
    return 0;
}`,
    language: "c",
    answers: ["%c"],
    expectedOutput: `Your grade is: A`,
    hint: "The format specifier for a single character (char) starts with a '%'.",
  },
  {
    title: "C: Print a Float (Format Specifier)",
    text: "You have a float variable 'price'. What format specifier is used to print a floating-point number?",
    code: `#include <stdio.h>
int main() {
    float price = 19.99;
    printf("The price is: $___\n", price);
    return 0;
}`,
    language: "c",
    answers: ["%f"],
    expectedOutput: `The price is: $19.990000`, // Default float precision
    hint: "The format specifier for a floating-point number (float) starts with a '%'.",
  },
  {
    title: "C: Include Header for Strings",
    text: "You need to use the 'strlen' function to find a string's length. Which header file must you include?",
    code: `#include <stdio.h>
#include <___>

int main() {
    char name[] = "Link";
    printf("Length: %d\n", strlen(name));
    return 0;
}`,
    language: "c",
    answers: ["string.h"],
    expectedOutput: `Length: 4`,
    hint: "This header file contains many useful string manipulation functions.",
  },
  {
    title: "C: Declare an Integer Variable",
    text: "Declare an integer variable named 'health' and initialize it to 100.",
    code: `#include <stdio.h>
int main() {
    ___ health = 100;
    printf("Health: %d\n", health);
    return 0;
}`,
    language: "c",
    answers: ["int"],
    expectedOutput: `Health: 100`,
    hint: "Use the C keyword for a whole number.",
  },
  {
    title: "C: Array Indexing",
    text: "An array holds level codes. Complete the code to print the *second* level code (102).",
    code: `#include <stdio.h>
int main() {
    int levels[] = {101, 102, 103};
    printf("Level 2: %d\n", levels[___]);
    return 0;
}`,
    language: "c",
    answers: ["1"],
    expectedOutput: `Level 2: 102`,
    hint: "Array indexing in C starts at 0.",
  },
  {
    title: "C: Read User Input (scanf)",
    text: "You want to read an integer from the user. Complete the 'scanf' function to store the input in the 'age' variable.",
    code: `#include <stdio.h>
int main() {
    int age;
    printf("Enter your age: ");
    scanf("%d", ___);
    printf("You are %d years old.\n", age);
    return 0;
}`,
    language: "c",
    answers: ["&age"],
    expectedOutput: `Enter your age: (user input)
You are (user input) years old.`,
    hint: "The 'scanf' function needs the *memory address* of the variable. Use the `&` operator.",
  },
  {
    title: "Java: Integer Variable Type",
    text: "Declare an integer variable 'playerScore' and assign it the value 85.",
    code: `public class Main {
    public static void main(String[] args) {
        ___ playerScore = 85;
        System.out.println(playerScore);
    }
}`,
    language: "java",
    answers: ["int"],
    expectedOutput: `85`,
    hint: "In Java, you must specify the type for whole numbers.",
  },
  {
    title: "Java: String Variable Type",
    text: "Declare a String variable 'greeting' and assign it the text 'Welcome!'.",
    code: `public class Main {
    public static void main(String[] args) {
        ___ greeting = "Welcome!";
        System.out.println(greeting);
    }
}`,
    language: "java",
    answers: ["String"],
    expectedOutput: `Welcome!`,
    hint: "The type for text in Java is 'String' (with a capital 'S').",
  },
  {
    title: "Java: For Loop Condition",
    text: "Complete the for loop to print numbers from 0 up to (but not including) 5.",
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
    title: "Java: Call a Method",
    text: "Inside the 'main' method, *call* the 'displayMenu' method.",
    code: `public class Main {
    public static void displayMenu() {
        System.out.println("1. Start Game");
        System.out.println("2. Exit");
    }

    public static void main(String[] args) {
        ___;
    }
}`,
    language: "java",
    answers: ["displayMenu()"],
    expectedOutput: `1. Start Game
2. Exit`,
    hint: "To call a method, use its name followed by parentheses and a semicolon.",
  },
  {
    title: "Java: String Concatenation",
    text: "Combine the string 'Level: ' with the integer 'currentLevel' to print 'Level: 3'.",
    code: `public class Main {
    public static void main(String[] args) {
        int currentLevel = 3;
        System.out.println("Level: " ___ currentLevel);
    }
}`,
    language: "java",
    answers: ["+"],
    expectedOutput: `Level: 3`,
    hint: "Java uses the `+` operator to combine strings and other data types.",
  },
  {
    title: "Java: Boolean Variable Type",
    text: "Declare a variable 'isGameOver' that can hold a true/false value, and set it to false.",
    code: `public class Main {
    public static void main(String[] args) {
        ___ isGameOver = false;
        System.out.println(isGameOver);
    }
}`,
    language: "java",
    answers: ["boolean"],
    expectedOutput: `false`,
    hint: "Use the Java keyword for true/false values.",
  },
  {
    title: "Java: Class Definition",
    text: "Complete the code to define a public *class* named 'Player'.",
    code: `public ___ Player {
    String name;
    int score;
}`,
    language: "java",
    answers: ["class"],
    expectedOutput: `(No output, this is a class definition)`,
    hint: "Use the keyword that signifies the start of a class blueprint.",
  },
  {
    title: "Python: Logical 'and' Operator",
    text: "You can only open the chest if you have the 'key' AND the 'map'. Complete the if-statement.",
    code: `has_key = True
has_map = True
if has_key ___ has_map:
  print("Chest Unlocked!")`,
    language: "python",
    answers: ["and"],
    expectedOutput: `Chest Unlocked!`,
    hint: "Use the Python keyword that checks if *both* conditions are true.",
  },
  {
    title: "Python: Logical 'or' Operator",
    text: "You can enter the guild if you are an 'admin' OR a 'member'. Complete the if-statement.",
    code: `is_admin = False
is_member = True
if is_admin ___ is_member:
  print("Access Granted.")`,
    language: "python",
    answers: ["or"],
    expectedOutput: `Access Granted.`,
    hint: "Use the Python keyword that checks if *at least one* condition is true.",
  },
  {
    title: "Python: Logical 'not' Operator",
    text: "You can move if the 'game_is_paused' variable is False. Complete the code to check if the game is *not* paused.",
    code: `game_is_paused = False
if ___ game_is_paused:
  print("Player is moving...")`,
    language: "python",
    answers: ["not"],
    expectedOutput: `Player is moving...`,
    hint: "Use the Python keyword that reverses a boolean value.",
  },
  {
    title: "Java: Logical '&&' (AND) Operator",
    text: "A player can sprint only if 'stamina' is greater than 0 AND 'health' is greater than 20.",
    code: `public class Main {
    public static void main(String[] args) {
        int stamina = 50;
        int health = 80;
        if (stamina > 0 ___ health > 20) {
            System.out.println("Player is sprinting!");
        }
    }
}`,
    language: "java",
    answers: ["&&"],
    expectedOutput: `Player is sprinting!`,
    hint: "Use the Java operator that checks if *both* conditions are true.",
  },
  {
    title: "Java: Logical '||' (OR) Operator",
    text: "You win the level if 'score' is 100 OR you found the 'secretExit'. Complete the if-statement.",
    code: `public class Main {
    public static void main(String[] args) {
        int score = 85;
        boolean secretExit = true;
        if (score == 100 ___ secretExit == true) {
            System.out.println("Level Complete!");
        }
    }
}`,
    language: "java",
    answers: ["||"],
    expectedOutput: `Level Complete!`,
    hint: "Use the Java operator that checks if *at least one* condition is true.",
  },
  {
    title: "Java: Logical '!' (NOT) Operator",
    text: "Print 'Safe to enter' if the 'isDanger' variable is false. Use the logical NOT operator.",
    code: `public class Main {
    public static void main(String[] args) {
        boolean isDanger = false;
        if (___isDanger) {
            System.out.println("Safe to enter.");
        }
    }
}`,
    language: "java",
    answers: ["!"],
    expectedOutput: `Safe to enter.`,
    hint: "Use the Java operator that reverses the value of a boolean.",
  },
  {
    title: "C: Logical '&&' (AND) Operator",
    text: "In C, 1 is true. Check if the player 'has_ammo' (1) AND 'is_reloaded' (1).",
    code: `#include <stdio.h>
int main() {
    int has_ammo = 1;
    int is_reloaded = 1;
    if (has_ammo ___ is_reloaded) {
        printf("Ready to fire!\\n");
    }
    return 0;
}`,
    language: "c",
    answers: ["&&"],
    expectedOutput: `Ready to fire!`,
    hint: "Use the C operator that checks if *both* sides are true (non-zero).",
  },
  {
    title: "C: Logical '||' (OR) Operator",
    text: "In C, 0 is false. Check if the player 'has_sword' (0) OR 'has_magic' (1).",
    code: `#include <stdio.h>
int main() {
    int has_sword = 0;
    int has_magic = 1;
    if (has_sword ___ has_magic) {
        printf("Player can fight!\\n");
    }
    return 0;
}`,
    language: "c",
    answers: ["||"],
    expectedOutput: `Player can fight!`,
    hint: "Use the C operator that checks if *at least one* side is true (non-zero).",
  },
  {
    title: "C: Logical '!' (NOT) Operator",
    text: "Check if the 'is_locked' variable (which is 0, or false) is NOT true.",
    code: `#include <stdio.h>
int main() {
    int is_locked = 0; // 0 is false
    if (___is_locked) {
        printf("The door is open.\\n");
    }
    return 0;
}`,
    language: "c",
    answers: ["!"],
    expectedOutput: `The door is open.`,
    hint: "Use the C operator for logical NOT. It turns a false (0) value into a true (1) value.",
  },

  // --- NEWLY ADDED 20 QUESTIONS ---
  {
    title: "Python: Function Parameter",
    text: "Complete the function definition so it accepts one parameter named 'username'.",
    code: `def greet_user(___):
  print("Hello, " + username)

greet_user("Alice")`,
    language: "python",
    answers: ["username"],
    expectedOutput: `Hello, Alice`,
    hint: "The variable name for the input goes inside the parentheses.",
  },
  {
    title: "Python: Function Return",
    text: "Complete the function to *return* the sum of 'a' and 'b'.",
    code: `def add(a, b):
  ___ a + b

print(add(5, 10))`,
    language: "python",
    answers: ["return"],
    expectedOutput: `15`,
    hint: "Use the keyword that sends a value back from a function.",
  },
  {
    title: "Python: List Append Method",
    text: "Add the string 'shield' to the end of the 'inventory' list.",
    code: `inventory = ["sword", "potion"]
inventory.___("shield")
print(inventory)`,
    language: "python",
    answers: ["append"],
    expectedOutput: `['sword', 'potion', 'shield']`,
    hint: "Use the list method that adds an item to the end.",
  },
  {
    title: "Python: 'elif' Statement",
    text: "Complete the 'else if' part of this conditional statement.",
    code: `score = 85
if score > 90:
  print("A")
___ score > 80:
  print("B")
else:
  print("C")`,
    language: "python",
    answers: ["elif"],
    expectedOutput: `B`,
    hint: "The keyword for 'else if' in Python is a shortened form.",
  },
  {
    title: "Python: Check for Item in List",
    text: "Complete the code to check if 'key' is *in* the 'inventory' list.",
    code: `inventory = ["coin", "key", "map"]
if "key" ___ inventory:
  print("You have the key!")`,
    language: "python",
    answers: ["in"],
    expectedOutput: `You have the key!`,
    hint: "Python uses a simple keyword to check for membership in a sequence.",
  },
  {
    title: "Python: String f-string",
    text: "Complete the f-string to print the value of the 'score' variable.",
    code: `score = 100
print(f"Your score is {___}")`,
    language: "python",
    answers: ["score"],
    expectedOutput: `Your score is 100`,
    hint: "To insert a variable into an f-string, place its name inside the curly braces.",
  },
  {
    title: "C: Print a String (Format Specifier)",
    text: "You have a string (char array) 'name'. What format specifier is needed to print it?",
    code: `#include <stdio.h>
int main() {
    char name[] = "Player One";
    printf("Welcome, ___\n", name);
    return 0;
}`,
    language: "c",
    answers: ["%s"],
    expectedOutput: `Welcome, Player One`,
    hint: "The format specifier for a C-style string starts with a '%'.",
  },
  {
    title: "C: Comparison Operator",
    text: "Complete the if-statement to check if 'lives' is *equal to* 0.",
    code: `#include <stdio.h>
int main() {
    int lives = 0;
    if (lives ___ 0) {
        printf("Game Over\n");
    }
    return 0;
}`,
    language: "c",
    answers: ["=="],
    expectedOutput: `Game Over`,
    hint: "The comparison operator (`==`) is different from the assignment operator (`=`).",
  },
  {
    title: "C: 'while' Loop",
    text: "Complete the 'while' loop to run as long as 'health' is greater than 0.",
    code: `#include <stdio.h>
int main() {
    int health = 3;
    ___ (health > 0) {
        printf("Health: %d\n", health);
        health = health - 1;
    }
    return 0;
}`,
    language: "c",
    answers: ["while"],
    expectedOutput: `Health: 3
Health: 2
Health: 1`,
    hint: "Use the keyword that creates a loop based on a condition.",
  },
  {
    title: "C: Modulo Operator",
    text: "Complete the code to find the remainder of 10 divided by 3.",
    code: `#include <stdio.h>
int main() {
    int remainder = 10 ___ 3;
    printf("Remainder: %d\n", remainder);
    return 0;
}`,
    language: "c",
    answers: ["%"],
    expectedOutput: `Remainder: 1`,
    hint: "The modulo operator finds the remainder after division.",
  },
  {
    title: "C: Constant Definition",
    text: "Complete the preprocessor directive to define a constant 'MAX_PLAYERS'.",
    code: `#include <stdio.h>
___ MAX_PLAYERS 10

int main() {
    printf("Max players: %d\n", MAX_PLAYERS);
    return 0;
}`,
    language: "c",
    answers: ["#define"],
    expectedOutput: `Max players: 10`,
    hint: "This directive is used to define macros or constants before compilation.",
  },
  {
    title: "Java: Comparison Operator",
    text: "Complete the if-statement to check if 'score' is *equal to* 100.",
    code: `public class Main {
    public static void main(String[] args) {
        int score = 100;
        if (score ___ 100) {
            System.out.println("You win!");
        }
    }
}`,
    language: "java",
    answers: ["=="],
    expectedOutput: `You win!`,
    hint: "The operator for checking equality is two equals signs.",
  },
  {
    title: "Java: 'else if' Statement",
    text: "Complete the 'else if' part of this conditional statement.",
    code: `public class Main {
    public static void main(String[] args) {
        int temp = 25;
        if (temp > 30) {
            System.out.println("Hot");
        } ___ (temp > 20) {
            System.out.println("Warm");
        } else {
            System.out.println("Cool");
        }
    }
}`,
    language: "java",
    answers: ["else if"],
    expectedOutput: `Warm`,
    hint: "Use the two keywords that check a secondary condition.",
  },
  {
    title: "Java: 'while' Loop",
    text: "Complete the 'while' loop to run as long as 'count' is less than 3.",
    code: `public class Main {
    public static void main(String[] args) {
        int count = 0;
        ___ (count < 3) {
            System.out.println("Loading...");
            count++;
        }
    }
}`,
    language: "java",
    answers: ["while"],
    expectedOutput: `Loading...
Loading...
Loading...`,
    hint: "This loop keyword checks a condition *before* each iteration.",
  },
  {
    title: "Java: Class Constructor",
    text: "Complete the constructor for the 'Player' class.",
    code: `public class Player {
    String name;

    public ___(String newName) {
        name = newName;
    }
}`,
    language: "java",
    answers: ["Player"],
    expectedOutput: `(No output, this is a class definition)`,
    hint: "A constructor method has the exact same name as the class and no return type.",
  },
  {
    title: "Java: 'this' Keyword",
    text: "Complete the code to assign the constructor parameter 'name' to the class's 'name' field.",
    code: `public class User {
    String name;

    public User(String name) {
        ___.___ = name;
    }
}`,
    language: "java",
    answers: ["this", "this."],
    expectedOutput: `(No output, this is a class definition)`,
    hint: "Use the keyword that refers to the current object instance.",
  },
  {
    title: "Java: Array Length",
    text: "Complete the code to print the *number of elements* in the 'scores' array.",
    code: `public class Main {
    public static void main(String[] args) {
        int[] scores = {90, 85, 95, 100};
        System.out.println(scores.___);
    }
}`,
    language: "java",
    answers: ["length"],
    expectedOutput: `4`,
    hint: "Arrays have a property (not a method) to get their size.",
  },
  {
    title: "Java: String `.equals` Method",
    text: "Complete the code to correctly compare the two strings for equality.",
    code: `public class Main {
    public static void main(String[] args) {
        String s1 = "hello";
        String s2 = "hello";
        if (s1.___("hello")) {
            System.out.println("They are equal.");
        }
    }
}`,
    language: "java",
    answers: [".equals"],
    expectedOutput: `They are equal.`,
    hint: "To compare the *content* of strings in Java, use this method instead of `==`.",
  },
  {
    title: "Python: 'None' Keyword",
    text: "Initialize the 'player' variable to a null or empty value.",
    code: `player = ___
# ... later
player = "Alice"
print(player)`,
    language: "python",
    answers: ["None"],
    expectedOutput: `Alice`,
    hint: "Python's keyword for a null value (with a capital 'N').",
  },
  {
    title: "C: Function Prototype",
    text: "Declare a *prototype* for the 'add' function before it is used in 'main'.",
    code: `#include <stdio.h>

// Function prototype
int ___(int a, int b);

int main() {
    printf("Sum: %d\n", add(5, 3));
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`,
    language: "c",
    answers: ["add"],
    expectedOutput: `Sum: 8`,
    hint: "The prototype must match the function's name and types.",
  },
];
