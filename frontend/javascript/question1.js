/* const questions = {
  programming: {
    HTML: [ { question: "", options: [], correctAnswer: 0 }, ... ],
    C++: [ { ... }, ... ],
    Python: [ ... ],
    JavaScript: [ ... ]
  },
  sports: {
    Cricket: [ ... ],
    Badminton: [ ... ],
    Olympics: [ ... ],
    Football: [ ... ]
  },
  travel: {
    Traveltrivia: [ ... ],
    Countries: [ ... ],
    Nationalparks: [ ... ],
    Geography: [ ... ]
  },
  film: {
    Bollywood: [ ... ],
    Hollywood: [ ... ],
    Animation: [ ... ],
    Trivia: [ ... ]
  }
}; */

const questions = {

    programming:{
    HTML : [
            {
                question: "What does HTML stand for?",
                options: [ "Hyper Text Markup Language","Hyperlinks and Text Markup Language","Home Tool Markup Language","Hyper Tool Multi Language"],
                correctAnswer: 0
            },
            {
                question: "Which HTML tag is used to define an internal style sheet?",
                options: ["<style>", "<script>", "<css>", "<link>"],
                correctAnswer: 0
            },
            {
                question: "Which tag is used to insert a line break in HTML?",
                options: ["<break>", "<lb>", "<br>", "<line>"],
                correctAnswer: 2
            },
            {
                question: "Which tag is used to display an image?",
                options: ["<pic>", "<img>", "<image>", "<src>"],
                correctAnswer: 1
            },
            {
                question: "How can you make a numbered list?",
                options: ["<ul>", "<ol>", "<list>", "<dl>"],
                correctAnswer: 1
            },
            {
                question: "Choose the correct HTML tag for the largest heading:",
                options: ["<heading>", "<h6>", "<h1>", "<head>"],
                correctAnswer: 2
            },
            {
                question: "Which tag is used to create a hyperlink?",
                options: ["<link>", "<a>", "<href>", "<hyperlink>"],
                correctAnswer: 1
            },
            {
                question: "What is the correct HTML for inserting a background image?",
                options: ["<body background='bg.jpg'>","<background img='bg.jpg'>","<body bg='bg.jpg'>","<img background='bg.jpg'>"],
                correctAnswer: 0
            },
            {
                question: "What is the correct way to create an e-mail link?",
                options: ["<a href='email'>someone@example.com</a>","<a href='mailto:someone@example.com'>Email</a>","<mail>someone@example.com</mail>","<a mail='someone@example.com'>"],
                correctAnswer: 1
            },
            {
                question: "Which input type defines a slider control?",
                options: ["range", "slider", "scroll", "input"],
                correctAnswer: 0
            },
            {
                question: "Which attribute is used to provide an alternate text for an image?",
                options: ["alt", "title", "src", "description"],
                correctAnswer: 0
            },
            {
                question: "HTML tags are surrounded by:",
                options: ["{} brackets", "[] brackets", "<> angle brackets", "() parentheses"],
                correctAnswer: 2
            },
            {
                question: "Which element defines a table row?",
                options: ["<tr>", "<td>", "<th>", "<table>"],
                correctAnswer: 0
            },
            {
                question: "Which HTML attribute is used to define inline styles?",
                options: ["style", "css", "class", "font"],
                correctAnswer: 0
            },
            {
                question: "Which tag is used to define a list item?",
                options: ["<li>", "<item>", "<list>", "<ul>"],
                correctAnswer: 0
            },
            {
                question: "How do you make a checkbox in HTML?",
                options: ["<input type='check'>","<check>","<input type='checkbox'>","<checkbox>"],
                correctAnswer: 2
            },
            {
                question: "What is the correct HTML for making a text input field?",
                options: ["<input type='text'>","<textfield>","<input text='field'>","<textinput>"],
                correctAnswer: 0
            },
            {
                question: "How can you make a bulleted list?",
                options: ["<ol>", "<ul>", "<dl>", "<list>"],
                correctAnswer: 1
            },
            {
                question: "Which tag is used to create a dropdown list?",
                options: ["<list>", "<select>", "<dropdown>", "<input type='list'>"],
                correctAnswer: 1
            },
            {
                question: "Which tag defines a form in HTML?",
                options: ["<form>", "<input>", "<label>", "<fieldset>"],
                correctAnswer: 0
            },
            {
                question: "Which HTML tag is used to define italic text?",
                options: ["<italic>", "<em>", "<i>", "<it>"],
                correctAnswer: 2
            },
            {
                question: "What is the correct HTML for adding a comment?",
                options: ["// This is a comment","<!-- This is a comment -->","** This is a comment **","## This is a comment ##"],
                correctAnswer: 1
            },
            {
                question: "Which HTML element defines the title of a document?",
                options: ["<title>", "<meta>", "<head>", "<heading>"],
                correctAnswer: 0
            },
            {
                question: "What is the purpose of the <fieldset> tag?",
                options: ["To group related data in a form","To create a checkbox","To create text fields","To add a label"],
                correctAnswer: 0
            },
            {
                question: "What does the <hr> tag do?",
                options: ["Adds a horizontal line","Inserts a hard return","Creates a heading row","Creates a hyperlink"],
                correctAnswer: 0
            }
            ],

    PLSQL: [
            {
                question: "What does PL/SQL stand for?",
                options: ["Procedural Language/Structured Query Language","Programming Language/SQL","Primary Language/SQL","Procedural List/SQL"],
                correctAnswer: 0
            },
            {
                question: "Which of the following is a valid PL/SQL block structure?",
                options: ["DECLARE - BEGIN - END","START - RUN - END","IF - ELSE - END","BEGIN - RUN - STOP"],
                correctAnswer: 0
            },
            {
                question: "Which keyword is used to handle exceptions in PL/SQL?",
                options: ["CATCH", "EXCEPTION", "HANDLE", "ERROR"],
                correctAnswer: 1
            },
            {
                question: "What is a cursor in PL/SQL?",
                options: ["A pointer to a row","A temporary table","A pointer to the context area","A data file"],
                correctAnswer: 2
            },
            {
                question: "Which type of cursor is created automatically?",
                options: ["Explicit", "Dynamic", "Static", "Implicit"],
                correctAnswer: 3
            },
            {
                question: "Which command is used to execute a PL/SQL block?",
                options: ["EXEC", "RUN", "/", "GO"],
                correctAnswer: 2
            },
            {
                question: "What is the default exception in PL/SQL?",
                options: ["VALUE_ERROR", "ZERO_DIVIDE", "NO_DATA_FOUND", "OTHERS"],
                correctAnswer: 3
            },
            {
                question: "Which datatype is used to store characters in PL/SQL?",
                options: ["CHAR", "VARCHAR", "STRING", "TEXT"],
                correctAnswer: 1
            },
            {
                question: "Which of the following is not a valid PL/SQL datatype?",
                options: ["NUMBER", "DATE", "BOOLEAN", "FLOATING"],
                correctAnswer: 3
            },
            {
                question: "How do you assign a value to a variable in PL/SQL?",
                options: [":=", "==", "=", "::"],
                correctAnswer: 0
            },
            {
                question: "Which keyword is used to declare a variable?",
                options: ["LET", "VAR", "DECLARE", "DEFINE"],
                correctAnswer: 2
            },
            {
                question: "Which statement is used to retrieve data in PL/SQL?",
                options: ["FETCH", "SELECT INTO", "GET", "EXTRACT"],
                correctAnswer: 1
            },
            {
                question: "What is the purpose of %TYPE?",
                options: [
                "To define a custom type",
                "To inherit the datatype of a column",
                "To create a temporary variable",
                "None of the above"
                ],
                correctAnswer: 1
            },
            {
                question: "Which part of a PL/SQL block is optional?",
                options: ["DECLARE", "BEGIN", "EXCEPTION", "END"],
                correctAnswer: 0
            },
            {
                question: "Which keyword is used to exit a loop?",
                options: ["LEAVE", "STOP", "EXIT", "BREAK"],
                correctAnswer: 2
            },
            {
                question: "Which one is a valid loop in PL/SQL?",
                options: ["FOR", "DO WHILE", "WHILE DO", "LOOP UNTIL"],
                correctAnswer: 0
            },
            {
                question: "Which exception occurs when a SELECT INTO statement returns no rows?",
                options: ["TOO_MANY_ROWS", "NO_DATA_FOUND", "DATA_NOT_FOUND", "NULL_POINTER"],
                correctAnswer: 1
            },
            {
                question: "How can you comment a single line in PL/SQL?",
                options: ["//", "#", "--", "/* */"],
                correctAnswer: 2
            },
            {
                question: "What is the maximum length of VARCHAR2 in PL/SQL?",
                options: ["2000", "4000", "8000", "32000"],
                correctAnswer: 1
            },
            {
                question: "Which of the following is not a control structure?",
                options: ["IF", "CASE", "FOR", "MERGE"],
                correctAnswer: 3
            },
            {
                question: "What is the use of %ROWTYPE?",
                options: ["It defines a variable with the row structure of a table","It defines multiple variables","It sets the data type of a row","It refers to a custom type"],
                correctAnswer: 0
            },
            {
                question: "What does RAISE_APPLICATION_ERROR do?",
                options: ["Raises a predefined exception","Prints an error","Allows user-defined error messages","Rolls back the transaction"],
                correctAnswer: 2
            },
            {
                question: "Which of these is used to iterate over a cursor?",
                options: ["OPEN-FETCH-CLOSE", "LOOP-FETCH-EXIT", "READ-NEXT-CLOSE", "STEP-GET-CLOSE"],
                correctAnswer: 0
            },
            {
                question: "Which keyword is used to define procedures in PL/SQL?",
                options: ["DEFINE", "CREATE", "BEGIN", "PROCEDURE"],
                correctAnswer: 1
            },
            {
                question: "Which clause is used to check a condition in a loop?",
                options: ["WHILE", "DO", "WHEN", "IF"],
                correctAnswer: 0
            }
                ],

    Python: 
         [
            {
                question: "What is the output of print(2 ** 3)?",
                options: ["5", "6", "8", "9"],
                correctAnswer: 2
            },
            {
                question: "Which keyword is used to create a function in Python?",
                options: ["function", "define", "def", "func"],
                correctAnswer: 2
            },
            {
                question: "What is the correct file extension for Python files?",
                options: [".pt", ".pyth", ".pyt", ".py"],
                correctAnswer: 3
            },
            {
                question: "Which of these is a mutable data type in Python?",
                options: ["tuple", "list", "str", "int"],
                correctAnswer: 1
            },
            {
                question: "What does the len() function do?",
                options: ["Returns the last element", "Returns the type", "Returns the length", "Returns the value"],
                correctAnswer: 2
            },
            {
                question: "Which operator is used for floor division?",
                options: ["/", "//", "%", "**"],
                correctAnswer: 1
            },
            {
                question: "How do you start a comment in Python?",
                options: ["//", "#", "/*", "--"],
                correctAnswer: 1
            },
            {
                question: "Which built-in function converts a string to a number?",
                options: ["str()", "int()", "chr()", "ord()"],
                correctAnswer: 1
            },
            {
                question: "What is the output of bool(0)?",
                options: ["True", "False", "None", "Error"],
                correctAnswer: 1
            },
            {
                question: "What is the purpose of the 'pass' statement?",
                options: ["Terminates the loop", "Skips an iteration", "Indicates an empty block", "Continues execution"],
                correctAnswer: 2
            },
            {
                question: "Which one is not a keyword in Python?",
                options: ["if", "elif", "loop", "pass"],
                correctAnswer: 2
            },
            {
                question: "How do you create a dictionary in Python?",
                options: ["[]", "()", "{}", "<>"],
                correctAnswer: 2
            },
            {
                question: "Which function is used to display output in Python?",
                options: ["print()", "echo()", "write()", "show()"],
                correctAnswer: 0
            },
            {
                question: "What is the output of: 'Python'[-1]?",
                options: ["'P'", "'n'", "'o'", "'h'"],
                correctAnswer: 1
            },
            {
                question: "What does the 'in' operator do?",
                options: ["Checks equality", "Performs addition", "Checks membership", "Performs slicing"],
                correctAnswer: 2
            },
            {
                question: "Which of these is a loop structure in Python?",
                options: ["repeat", "for", "iterate", "loop"],
                correctAnswer: 1
            },
            {
                question: "Which statement is used to handle exceptions?",
                options: ["catch", "handle", "try-except", "on error"],
                correctAnswer: 2
            },
            {
                question: "What is the output of type([])?",
                options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
                correctAnswer: 0
            },
            {
                question: "Which keyword is used to create a class in Python?",
                options: ["function", "def", "class", "object"],
                correctAnswer: 2
            },
            {
                question: "Which of the following is not a valid data type in Python?",
                options: ["set", "map", "list", "tuple"],
                correctAnswer: 1
            },
            {
                question: "How do you import a module in Python?",
                options: ["include module", "load module", "require module", "import module"],
                correctAnswer: 3
            },
            {
                question: "Which function is used to get user input in Python 3?",
                options: ["raw_input()", "scan()", "input()", "get()"],
                correctAnswer: 2
            },
            {
                question: "What is the default value of 'None' in Python?",
                options: ["0", "'None'", "None", "''"],
                correctAnswer: 2
            },
            {
                question: "What is the result of 4 + 3 * 2?",
                options: ["14", "10", "11", "16"],
                correctAnswer: 2
            },
            {
                question: "Which of the following creates a tuple?",
                options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
                correctAnswer: 2
            }
        ],

    Javascript: [
        { question: "What does JavaScript primarily run on?", options: ["Server", "Client-side (browser)", "Database", "Operating System"], correctAnswer: 1 },
        { question: "Which symbol is used for comments in JavaScript?", options: ["#", "//", "<!-- -->", "/* */"], correctAnswer: 1 },
        { question: "How do you declare a variable in JavaScript?", options: ["v", "var", "int", "let"], correctAnswer: 1 },
        { question: "Which of these is not a JavaScript data type?", options: ["String", "Number", "Boolean", "Float"], correctAnswer: 3 },
        { question: "How do you write a function in JavaScript?", options: ["def myFunction()", "function = myFunc()", "function myFunction()", "func myFunction()"], correctAnswer: 2 },
        { question: "What is the output of: typeof null?", options: ["'null'", "'object'", "'undefined'", "'number'"], correctAnswer: 1 },
        { question: "Which keyword declares a constant in JavaScript?", options: ["const", "let", "var", "static"], correctAnswer: 0 },
        { question: "What will '2' + 2 evaluate to?", options: ["4", "'4'", "'22'", "NaN"], correctAnswer: 2 },
        { question: "Which method converts JSON text to a JavaScript object?", options: ["JSON.stringify()", "JSON.toObject()", "JSON.parse()", "JSON.convert()"], correctAnswer: 2 },
        { question: "What is NaN in JavaScript?", options: ["Negative Array Number", "Not a Number", "Name as Number", "Not a Name"], correctAnswer: 1 },
        { question: "Which built-in method returns the length of a string?", options: ["length()", "size()", "getLength()", "length"], correctAnswer: 3 },
        { question: "How do you write an array in JavaScript?", options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "<1, 2, 3>"], correctAnswer: 1 },
        { question: "Which loop is guaranteed to run at least once?", options: ["for", "while", "do...while", "foreach"], correctAnswer: 2 },
        { question: "How do you check equality in both value and type?", options: ["==", "===", "!=", "=>"], correctAnswer: 1 },
        { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Management", "Digital Ordinance Model", "Display Object Map"], correctAnswer: 0 },
        { question: "How do you add an element to the end of an array?", options: ["push()", "append()", "add()", "insert()"], correctAnswer: 0 },
        { question: "Which keyword is used to exit a loop?", options: ["end", "exit", "break", "stop"], correctAnswer: 2 },
        { question: "What is the default value of an uninitialized variable?", options: ["null", "0", "undefined", "false"], correctAnswer: 2 },
        { question: "Which of the following is a correct function expression?", options: ["function = myFunc()", "const myFunc = function() {}", "const = function myFunc() {}", "myFunc := function()"], correctAnswer: 1 },
        { question: "Which method adds elements to the beginning of an array?", options: ["append()", "unshift()", "push()", "shift()"], correctAnswer: 1 },
        { question: "Which operator is used to spread elements?", options: ["++", "...", "**", "==="], correctAnswer: 1 },
        { question: "What does the setTimeout function do?", options: ["Delays code execution", "Stops script", "Repeats code continuously", "Waits for event"], correctAnswer: 0 },
        { question: "Which method is used to select an element by ID?", options: ["document.querySelector()", "document.getElementByClass()", "document.getElementById()", "document.select()"], correctAnswer: 2 },
        { question: "Which of the following is not a valid loop keyword?", options: ["for", "loop", "while", "do...while"], correctAnswer: 1 },
        { question: "What does 'this' refer to in a method?", options: ["The parent class", "The global object", "The object the method is called on", "The prototype"], correctAnswer: 2 }
    ],
  },

    sports: { 
        
        Cricket: [
            {
            question: "Who is known as the 'God of Cricket'?",
            options: ["Rahul Dravid", "Virat Kohli", "Sachin Tendulkar", "MS Dhoni"],
            correctAnswer: 2
        },
        {
            question: "Which country won the first ever Cricket World Cup in 1975?",
            options: ["England", "India", "Australia", "West Indies"],
            correctAnswer: 3
        },
        {
            question: "Who was the captain of India when they won the 1983 World Cup?",
            options: ["MS Dhoni", "Sunil Gavaskar", "Kapil Dev", "Sachin Tendulkar"],
            correctAnswer: 2
        },
        {
            question: "How many players are there in a cricket team?",
            options: ["11", "12", "10", "9"],
            correctAnswer: 0
        },
        {
            question: "What is the maximum number of overs allowed per bowler in a One Day International?",
            options: ["20", "10", "5", "15"],
            correctAnswer: 1
        },
        {
            question: "Who has scored the most international centuries in cricket?",
            options: ["Brian Lara", "Ricky Ponting", "Virat Kohli", "Sachin Tendulkar"],
            correctAnswer: 3
        },
        {
            question: "Which format of cricket is known as T20?",
            options: ["Test Match", "Super Over", "One Day", "Twenty20"],
            correctAnswer: 3
        },
        {
            question: "Which Indian bowler took a hat-trick in a World Cup match?",
            options: ["Zaheer Khan", "Chetan Sharma", "Jasprit Bumrah", "Anil Kumble"],
            correctAnswer: 1
        },
        {
            question: "Which country has won the most ICC Cricket World Cups?",
            options: ["India", "West Indies", "Australia", "England"],
            correctAnswer: 2
        },
        {
            question: "Who hit six sixes in an over in a T20 international?",
            options: ["Chris Gayle", "David Warner", "AB de Villiers", "Yuvraj Singh"],
            correctAnswer: 3
        },
        {
            question: "What is the name of the cricket ground also known as the 'Mecca of Cricket'?",
            options: ["Eden Gardens", "Wankhede", "Lord's", "MCG"],
            correctAnswer: 2
        },
        {
            question: "Which cricketer is famous for the helicopter shot?",
            options: ["Suresh Raina", "MS Dhoni", "Virat Kohli", "Yuvraj Singh"],
            correctAnswer: 1
        },
        {
            question: "Who holds the record for the fastest century in ODI cricket?",
            options: ["Chris Gayle", "AB de Villiers", "Virat Kohli", "Glenn Maxwell"],
            correctAnswer: 1
        },
        {
            question: "What does LBW stand for in cricket?",
            options: ["Leg Bat Wrap", "Leg Before Wicket", "Long Ball Win", "Leg Behind Wicket"],
            correctAnswer: 1
        },
        {
            question: "Which Indian player has taken the most wickets in Tests?",
            options: ["Harbhajan Singh", "Kapil Dev", "Ravichandran Ashwin", "Anil Kumble"],
            correctAnswer: 3
        },
        {
            question: "Which city hosted the final of the 2011 ICC World Cup?",
            options: ["Delhi", "Chennai", "Mumbai", "Kolkata"],
            correctAnswer: 2
        },
        {
            question: "Who was the first cricketer to score 10,000 runs in ODIs?",
            options: ["Sunil Gavaskar", "Ricky Ponting", "Steve Waugh", "Sachin Tendulkar"],
            correctAnswer: 3
        },
        {
            question: "In which year was the first official Test match played?",
            options: ["1880", "1869", "1877", "1901"],
            correctAnswer: 2
        },
        {
            question: "Who won the Orange Cap in IPL 2023?",
            options: ["Faf du Plessis", "Shubman Gill", "Virat Kohli", "Devdutt Padikkal"],
            correctAnswer: 1
        },
        {
            question: "How many runs are awarded for hitting the ball over the boundary without touching the ground?",
            options: ["4", "2", "1", "6"],
            correctAnswer: 3
        },
        {
            question: "What is the term for a bowler taking 5 wickets in an innings?",
            options: ["Full toss", "Five-wicket haul", "Hattrick", "Maiden"],
            correctAnswer: 1
        },
        {
            question: "Which team won the 2023 ICC Cricket World Cup?",
            options: ["India", "England", "New Zealand", "Australia"],
            correctAnswer: 3
        },
        {
            question: "What is a 'duck' in cricket?",
            options: ["Getting bowled", "Scoring 100", "Scoring zero runs", "Missing the match"],
            correctAnswer: 2
        },
        {
            question: "Which Indian player is nicknamed 'Hitman'?",
            options: ["Shikhar Dhawan", "KL Rahul", "Virat Kohli", "Rohit Sharma"],
            correctAnswer: 3
        },
        {
            question: "Which IPL team has won the most titles as of 2024?",
            options: ["Kolkata Knight Riders", "Mumbai Indians", "Rajasthan Royals", "Chennai Super Kings"],
            correctAnswer: 1
        }
        ],

        Badminton: [
                {
            question: "What is the official name for the object hit back and forth in badminton?",
            options: ["Featherball", "Smashball", "Birdie", "Shuttlecock"],
            correctAnswer: 3
        },
        {
            question: "How many points are needed to win a badminton game?",
            options: ["15", "11", "21", "25"],
            correctAnswer: 2
        },
        {
            question: "What is the maximum number of games in a standard badminton match?",
            options: ["7", "3", "5", "1"],
            correctAnswer: 1
        },
        {
            question: "Which country has won the most Olympic gold medals in badminton?",
            options: ["Indonesia", "India", "South Korea", "China"],
            correctAnswer: 3
        },
        {
            question: "What is it called when a player wins a rally after the shuttle hits the ground on the opponent’s side?",
            options: ["Point", "Set", "Drop", "Shot"],
            correctAnswer: 0
        },
        {
            question: "Which Indian female player won silver at the 2016 Rio Olympics?",
            options: ["Saina Nehwal", "P.V. Sindhu", "Ashwini Ponnappa", "Tanvi Lad"],
            correctAnswer: 1
        },
        {
            question: "What is the term for a soft shot just over the net?",
            options: ["Drop shot", "Clear", "Drive", "Smash"],
            correctAnswer: 0
        },
        {
            question: "Who is known as the 'Badminton Queen' of India?",
            options: ["Ashwini Ponnappa", "P.V. Sindhu", "Saina Nehwal", "Jwala Gutta"],
            correctAnswer: 2
        },
        {
            question: "What is the standard height of a badminton net at the center?",
            options: ["1.75 meters", "1.524 meters", "1.60 meters", "1.22 meters"],
            correctAnswer: 1
        },
        {
            question: "Which badminton stroke is considered the most powerful?",
            options: ["Clear", "Drop", "Drive", "Smash"],
            correctAnswer: 3
        },
        {
            question: "Which country hosts the All England Badminton Championships?",
            options: ["India", "China", "Denmark", "England"],
            correctAnswer: 3
        },
        {
            question: "How many players are on court in a mixed doubles badminton match?",
            options: ["2", "3", "4", "6"],
            correctAnswer: 2
        },
        {
            question: "What is the area behind the short service line called?",
            options: ["Smash zone", "Service court", "Backcourt", "Midcourt"],
            correctAnswer: 1
        },
        {
            question: "Which Indian player won the bronze at London 2012 Olympics?",
            options: ["Saina Nehwal", "Ashwini Ponnappa", "P.V. Sindhu", "Jwala Gutta"],
            correctAnswer: 0
        },
        {
            question: "What is the name of the international governing body for badminton?",
            options: ["FIFA", "BWF", "IBA", "ITF"],
            correctAnswer: 1
        },
        {
            question: "What is the maximum number of points a player can reach in a game before winning by a two-point margin is no longer required?",
            options: ["25", "30", "27", "28"],
            correctAnswer: 1
        },
        {
            question: "Which Indian male shuttler won the BWF World Championships in 2021?",
            options: ["Kidambi Srikanth", "Lakshya Sen", "Parupalli Kashyap", "Prannoy H.S."],
            correctAnswer: 0
        },
        {
            question: "What happens if the shuttle touches the net but lands in the correct service court?",
            options: ["It is a fault", "It is a let", "It is replayed", "Point to server"],
            correctAnswer: 1
        },
        {
            question: "Who won the gold medal in women's singles at Tokyo 2020 Olympics?",
            options: ["Chen Yufei", "P.V. Sindhu", "Carolina Marin", "Nozomi Okuhara"],
            correctAnswer: 0
        },
        {
            question: "What is the term for an illegal hit where the shuttle is carried or held on the racket?",
            options: ["Scoop", "Drive", "Push", "Fault"],
            correctAnswer: 3
        },
        {
            question: "What is the name of the Indian badminton league?",
            options: ["Premier Badminton League", "Badminton Super Series", "Indian Smash League", "Shuttler's League"],
            correctAnswer: 0
        },
        {
            question: "Which of these is NOT a type of badminton grip?",
            options: ["Forehand grip", "Panhandle grip", "Power grip", "Backhand grip"],
            correctAnswer: 2
        },
        {
            question: "What color are the lines on a standard badminton court?",
            options: ["Red", "Yellow", "White", "Blue"],
            correctAnswer: 2
        },
        {
            question: "Which Indian city has produced many top badminton players like Gopichand and Sindhu?",
            options: ["Hyderabad", "Delhi", "Bangalore", "Chennai"],
            correctAnswer: 0
        },
        {
            question: "In which year was badminton introduced in the Olympics?",
            options: ["1996", "1988", "1992", "2000"],
            correctAnswer: 2
        }
        ],

        Olympics : [
                    {
                question: "In which year were the first modern Olympic Games held?",
                options: ["1912", "1896", "1888", "1900"],
                correctAnswer: 1
            },
            {
                question: "Which country has won the most Olympic gold medals overall?",
                options: ["Germany", "Russia", "United States", "China"],
                correctAnswer: 2
            },
            {
                question: "Where were the 2020 Summer Olympics held?",
                options: ["London", "Tokyo", "Beijing", "Rio de Janeiro"],
                correctAnswer: 1
            },
            {
                question: "What does the Olympic motto 'Citius, Altius, Fortius' mean?",
                options: ["Run, Jump, Throw", "Brave, Bold, Bright", "Speed, Strength, Spirit", "Faster, Higher, Stronger"],
                correctAnswer: 3
            },
            {
                question: "How often are the Olympic Games held?",
                options: ["Every 4 years", "Every 2 years", "Every year", "Every 5 years"],
                correctAnswer: 0
            },
            {
                question: "Which city hosted the 2012 Summer Olympics?",
                options: ["Beijing", "London", "Sydney", "Athens"],
                correctAnswer: 1
            },
            {
                question: "How many rings are there on the Olympic flag?",
                options: ["7", "4", "6", "5"],
                correctAnswer: 3
            },
            {
                question: "Which of these sports is NOT in the Summer Olympics?",
                options: ["Swimming", "Tennis", "Skiing", "Basketball"],
                correctAnswer: 2
            },
            {
                question: "Who is the most decorated Olympian of all time?",
                options: ["Usain Bolt", "Michael Phelps", "Mark Spitz", "Larisa Latynina"],
                correctAnswer: 1
            },
            {
                question: "Which color is NOT on the Olympic rings?",
                options: ["Orange", "Black", "Green", "Red"],
                correctAnswer: 0
            },
            {
                question: "What is awarded for first place in the Olympics?",
                options: ["Gold medal", "Bronze medal", "Platinum medal", "Silver medal"],
                correctAnswer: 0
            },
            {
                question: "What year were the Olympic Games canceled due to World War II?",
                options: ["1952", "1936", "1948", "1940"],
                correctAnswer: 3
            },
            {
                question: "Which country hosted the Winter Olympics in 2022?",
                options: ["Japan", "France", "Norway", "China"],
                correctAnswer: 3
            },
            {
                question: "What is the Olympic torch a symbol of?",
                options: ["Hope and peace", "The continuity between ancient and modern Games", "Victory", "Teamwork"],
                correctAnswer: 1
            },
            {
                question: "Who was the first Indian to win an individual Olympic gold medal?",
                options: ["Abhinav Bindra", "Neeraj Chopra", "Leander Paes", "K.D. Jadhav"],
                correctAnswer: 0
            },
            {
                question: "Which Olympic sport uses a pommel horse?",
                options: ["Equestrian", "Wrestling", "Judo", "Gymnastics"],
                correctAnswer: 3
            },
            {
                question: "Which athlete is known as the fastest man on earth?",
                options: ["Carl Lewis", "Justin Gatlin", "Tyson Gay", "Usain Bolt"],
                correctAnswer: 3
            },
            {
                question: "Which country hosted the first Winter Olympics?",
                options: ["Canada", "USA", "France", "Norway"],
                correctAnswer: 2
            },
            {
                question: "What is the youngest age someone has competed in the Olympics?",
                options: ["13 years", "10 years", "12 years", "15 years"],
                correctAnswer: 1
            },
            {
                question: "Which sport made its Olympic debut in Tokyo 2020?",
                options: ["Karate", "Softball", "Golf", "Skateboarding"],
                correctAnswer: 3
            },
            {
                question: "What material were Olympic medals once made of?",
                options: ["Bronze only", "Titanium", "Steel", "Pure gold"],
                correctAnswer: 3
            },
            {
                question: "Which city will host the 2028 Summer Olympics?",
                options: ["Tokyo", "Los Angeles", "Brisbane", "Paris"],
                correctAnswer: 1
            },
            {
                question: "Which female gymnast won four golds in Rio 2016?",
                options: ["Nadia Comăneci", "Shannon Miller", "Larisa Latynina", "Simone Biles"],
                correctAnswer: 3
            },
            {
                question: "Which African nation has won the most Olympic medals?",
                options: ["Ethiopia", "South Africa", "Nigeria", "Kenya"],
                correctAnswer: 3
            },
            {
                question: "When was women’s boxing introduced in the Olympics?",
                options: ["2008", "2012", "2004", "2000"],
                correctAnswer: 1
            }
        ],

        Football :[
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Brazil", "Italy", "Argentina"],
                correctAnswer: 1
            },
            {
                question: "Who won the FIFA World Cup in 2022?",
                options: ["Croatia", "France", "Argentina", "Germany"],
                correctAnswer: 2
            },
            {
                question: "Which footballer is known as 'The King of Football'?",
                options: ["Ronaldo", "Pele", "Messi", "Maradona"],
                correctAnswer: 1
            },
            {
                question: "Which country hosted the first FIFA World Cup?",
                options: ["Italy", "Uruguay", "Brazil", "Argentina"],
                correctAnswer: 1
            },
            {
                question: "How many players are on a football team on the field?",
                options: ["12", "10", "9", "11"],
                correctAnswer: 3
            },
            {
                question: "Which footballer has won the most Ballon d'Or titles?",
                options: ["Ronaldo", "Zidane", "Ronaldinho", "Messi"],
                correctAnswer: 3
            },
            {
                question: "Which country won the UEFA Euro 2016?",
                options: ["Germany", "France", "Portugal", "Spain"],
                correctAnswer: 2
            },
            {
                question: "What is the name of the award for the World Cup's top scorer?",
                options: ["Golden Ball", "Golden Glove", "Golden Boot", "Silver Boot"],
                correctAnswer: 2
            },
            {
                question: "Which English club has won the most Premier League titles?",
                options: ["Arsenal", "Manchester United", "Chelsea", "Liverpool"],
                correctAnswer: 1
            },
            {
                question: "Which country has hosted the FIFA World Cup the most times?",
                options: ["France", "Brazil", "Germany", "Mexico"],
                correctAnswer: 3
            },
            {
                question: "What is the full form of FIFA?",
                options: [
                "Famous International Football Association",
                "Federation of International Football Agencies",
                "Fédération Internationale de Football Association",
                "Football International Federation Association"
                ],
                correctAnswer: 2
            },
            {
                question: "Which player scored the 'Hand of God' goal?",
                options: ["Maradona", "Messi", "Klose", "Pele"],
                correctAnswer: 0
            },
            {
                question: "Which country won the Women's World Cup in 2019?",
                options: ["USA", "France", "Germany", "Netherlands"],
                correctAnswer: 0
            },
            {
                question: "Which club is known as 'The Red Devils'?",
                options: ["Arsenal", "Manchester United", "Bayern Munich", "Liverpool"],
                correctAnswer: 1
            },
            {
                question: "Which footballer is famous for wearing jersey number 7 at Manchester United?",
                options: ["Cristiano Ronaldo", "Beckham", "Wayne Rooney", "Eric Cantona"],
                correctAnswer: 0
            },
            {
                question: "Which nation has never won a FIFA World Cup?",
                options: ["France", "England", "Netherlands", "Uruguay"],
                correctAnswer: 2
            },
            {
                question: "What color card means a player is sent off the field?",
                options: ["Red", "Black", "Yellow", "Blue"],
                correctAnswer: 0
            },
            {
                question: "Which African country reached the World Cup semi-final for the first time in 2022?",
                options: ["Morocco", "Ghana", "Nigeria", "Senegal"],
                correctAnswer: 0
            },
            {
                question: "Who is the top goal scorer in World Cup history?",
                options: ["Pelé", "Lionel Messi", "Ronaldo Nazario", "Miroslav Klose"],
                correctAnswer: 3
            },
            {
                question: "Which country has won the Copa América the most times?",
                options: ["Uruguay", "Brazil", "Chile", "Argentina"],
                correctAnswer: 0
            },
            {
                question: "Which position is responsible for preventing goals?",
                options: ["Goalkeeper", "Midfielder", "Defender", "Striker"],
                correctAnswer: 0
            },
            {
                question: "Which tournament is considered the most prestigious club competition in Europe?",
                options: ["Champions League", "Super Cup", "Europa League", "FA Cup"],
                correctAnswer: 0
            },
            {
                question: "What is the maximum number of substitutions allowed in a standard FIFA match (since 2022)?",
                options: ["5", "6", "3", "4"],
                correctAnswer: 0
            },
            {
                question: "Which country has the nickname 'Azzurri' in football?",
                options: ["Germany", "Spain", "Argentina", "Italy"],
                correctAnswer: 3
            },
            {
                question: "What is the duration of a standard football match?",
                options: ["90 minutes", "75 minutes", "80 minutes", "100 minutes"],
                correctAnswer: 0
            }
        ],
        
  },

  travel: {
    Traveltrivia: [
        {
            question: "Which city is known as the City of Love?",
            options: ["Paris", "Rome", "Venice", "Barcelona"],
            correctAnswer: 0
        },
        {
            question: "Which country is home to the Great Barrier Reef?",
            options: ["Australia", "South Africa", "New Zealand", "Indonesia"],
            correctAnswer: 0
        },
        {
            question: "In which city can you visit the Colosseum?",
            options: ["Rome", "Athens", "Paris", "Istanbul"],
            correctAnswer: 0
        },
        {
            question: "Which US state is known for its Grand Canyon?",
            options: ["Nevada", "Arizona", "Utah", "Colorado"],
            correctAnswer: 1
        },
        {
            question: "What is the capital city of Japan?",
            options: ["Seoul", "Osaka", "Kyoto", "Tokyo"],
            correctAnswer: 3
        },
        {
            question: "Which country is famous for tulips and windmills?",
            options: ["Switzerland", "Belgium", "Netherlands", "Denmark"],
            correctAnswer: 2
        },
        {
            question: "Which country has the most UNESCO World Heritage sites?",
            options: ["France", "China", "India", "Italy"],
            correctAnswer: 3
        },
        {
            question: "What is the currency used in the United Kingdom?",
            options: ["Pound", "Euro", "Dollar", "Franc"],
            correctAnswer: 0
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Sahara", "Kalahari", "Gobi", "Atacama"],
            correctAnswer: 0
        },
        {
            question: "Where is the Eiffel Tower located?",
            options: ["Madrid", "Paris", "Rome", "London"],
            correctAnswer: 1
        },
        {
            question: "Which Asian country is known as the Land of Smiles?",
            options: ["Thailand", "Vietnam", "Malaysia", "Philippines"],
            correctAnswer: 0
        },
        {
            question: "What is the capital of Canada?",
            options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            correctAnswer: 2
        },
        {
            question: "Which continent has the most countries?",
            options: ["Europe", "Asia", "Africa", "South America"],
            correctAnswer: 2
        },
        {
            question: "Where would you find the ancient city of Petra?",
            options: ["Jordan", "Iraq", "Iran", "Israel"],
            correctAnswer: 0
        },
        {
            question: "Which is the tallest mountain in the world?",
            options: ["K2", "Mount Everest", "Lhotse", "Kangchenjunga"],
            correctAnswer: 1
        },
        {
            question: "Which country is famous for the Taj Mahal?",
            options: ["India", "Pakistan", "Bangladesh", "Sri Lanka"],
            correctAnswer: 0
        },
        {
            question: "Which famous island is part of Indonesia?",
            options: ["Phuket", "Bali", "Langkawi", "Fiji"],
            correctAnswer: 1
        },
        {
            question: "Which city is known for its canals and gondolas?",
            options: ["Venice", "Amsterdam", "Bruges", "Bangkok"],
            correctAnswer: 0
        },
        {
            question: "What is the capital of Egypt?",
            options: ["Alexandria", "Luxor", "Cairo", "Giza"],
            correctAnswer: 2
        },
        {
            question: "In which country would you visit Machu Picchu?",
            options: ["Peru", "Ecuador", "Bolivia", "Colombia"],
            correctAnswer: 0
        },
        {
            question: "Which city is home to the famous Christ the Redeemer statue?",
            options: ["Rio de Janeiro", "Buenos Aires", "Lima", "São Paulo"],
            correctAnswer: 0
        },
        {
            question: "Which country is known for its maple syrup?",
            options: ["Sweden", "USA", "Canada", "Norway"],
            correctAnswer: 2
        },
        {
            question: "What is the busiest airport in the world by passenger traffic?",
            options: ["Dubai", "Atlanta", "London Heathrow", "Beijing"],
            correctAnswer: 1
        },
        {
            question: "Which country has a city called 'Cape Town'?",
            options: ["Australia", "South Africa", "USA", "UK"],
            correctAnswer: 1
        },
        {
            question: "Which European city is famous for Oktoberfest?",
            options: ["Berlin", "Vienna", "Munich", "Zurich"],
            correctAnswer: 2
        }

    ],


    Countries: [

            {
        question: "What is the capital of France?",
        options: ["Paris", "Lyon", "Marseille", "Nice"],
        correctAnswer: 0
    },
    {
        question: "Which city is the capital of Japan?",
        options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
        correctAnswer: 2
    },
    {
        question: "Canberra is the capital of which country?",
        options: ["Australia", "New Zealand", "Canada", "UK"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correctAnswer: 1
    },
    {
        question: "Which country has Berlin as its capital?",
        options: ["Germany", "Austria", "Poland", "Netherlands"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Seoul", "Busan", "Daegu", "Incheon"],
        correctAnswer: 0
    },
    {
        question: "Cairo is the capital of which country?",
        options: ["Algeria", "Egypt", "Morocco", "Tunisia"],
        correctAnswer: 1
    },
    {
        question: "Which country has Madrid as its capital?",
        options: ["Portugal", "Spain", "Italy", "Greece"],
        correctAnswer: 1
    },
    {
        question: "Helsinki is the capital of which country?",
        options: ["Sweden", "Norway", "Finland", "Denmark"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
        correctAnswer: 0
    },
    {
        question: "Which country has Rome as its capital?",
        options: ["Spain", "Italy", "France", "Greece"],
        correctAnswer: 1
    },
    {
        question: "What is the capital of the United Kingdom?",
        options: ["Manchester", "Edinburgh", "London", "Birmingham"],
        correctAnswer: 2
    },
    {
        question: "Bangkok is the capital of which country?",
        options: ["Malaysia", "Thailand", "Vietnam", "Indonesia"],
        correctAnswer: 1
    },
    {
        question: "Which country's capital is Nairobi?",
        options: ["Kenya", "Uganda", "Ethiopia", "Tanzania"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Russia?",
        options: ["St. Petersburg", "Moscow", "Kazan", "Novosibirsk"],
        correctAnswer: 1
    },
    {
        question: "Which country has Oslo as its capital?",
        options: ["Sweden", "Finland", "Norway", "Iceland"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of the United States?",
        options: ["Washington D.C.", "New York", "Los Angeles", "Chicago"],
        correctAnswer: 0
    },
    {
        question: "Which country has Ankara as its capital?",
        options: ["Turkey", "Greece", "Iran", "Syria"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Rosario", "Buenos Aires", "Córdoba", "Mendoza"],
        correctAnswer: 1
    },
    {
        question: "Which country's capital is Islamabad?",
        options: ["Pakistan", "Afghanistan", "Bangladesh", "India"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of China?",
        options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
        correctAnswer: 1
    },
    {
        question: "Which country has Athens as its capital?",
        options: ["Italy", "Greece", "Cyprus", "Albania"],
        correctAnswer: 1
    },
    {
        question: "Kuala Lumpur is the capital of which country?",
        options: ["Indonesia", "Singapore", "Malaysia", "Thailand"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Nigeria?",
        options: ["Lagos", "Kano", "Abuja", "Ibadan"],
        correctAnswer: 2
    },
    {
        question: "Which country has Bern as its capital?",
        options: ["Austria", "Switzerland", "Germany", "Luxembourg"],
        correctAnswer: 1
    }
    ],

    Nationalparks: [
            {
        question: "Which is the first national park in the world?",
        options: ["Yellowstone", "Serengeti", "Banff", "Yosemite"],
        correctAnswer: 0
    },
    {
        question: "Which is the largest national park in India?",
        options: ["Jim Corbett", "Ranthambore", "Hemis", "Sundarbans"],
        correctAnswer: 2
    },
    {
        question: "Kaziranga National Park is famous for which animal?",
        options: ["Asiatic Lion", "One-horned Rhinoceros", "Tiger", "Elephant"],
        correctAnswer: 1
    },
    {
        question: "Which country is home to Kruger National Park?",
        options: ["South Africa", "Kenya", "Namibia", "Tanzania"],
        correctAnswer: 0
    },
    {
        question: "Where is Yellowstone National Park located?",
        options: ["USA", "Canada", "Australia", "Brazil"],
        correctAnswer: 0
    },
    {
        question: "Which animal is found in Gir National Park?",
        options: ["Leopard", "Asiatic Lion", "Elephant", "Bengal Tiger"],
        correctAnswer: 1
    },
    {
        question: "In which Indian state is Periyar National Park located?",
        options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
        correctAnswer: 1
    },
    {
        question: "Which is the only floating national park in the world?",
        options: ["Keibul Lamjao", "Namdapha", "Valley of Flowers", "Bhitarkanika"],
        correctAnswer: 0
    },
    {
        question: "The Amazon Rainforest is primarily located in which country?",
        options: ["Colombia", "Brazil", "Peru", "Ecuador"],
        correctAnswer: 1
    },
    {
        question: "Which Indian national park is known for snow leopards?",
        options: ["Bandipur", "Hemis", "Manas", "Silent Valley"],
        correctAnswer: 1
    },
    {
        question: "Ranthambore National Park is located in which state?",
        options: ["Madhya Pradesh", "Rajasthan", "Uttar Pradesh", "Gujarat"],
        correctAnswer: 1
    },
    {
        question: "Which African country is home to Serengeti National Park?",
        options: ["Tanzania", "Kenya", "Zambia", "South Africa"],
        correctAnswer: 0
    },
    {
        question: "The Bengal Tiger is primarily found in which national park?",
        options: ["Sundarbans", "Kaziranga", "Gir", "Manas"],
        correctAnswer: 0
    },
    {
        question: "Which animal is protected in Dachigam National Park?",
        options: ["Red Panda", "Kashmir Stag", "Snow Leopard", "Asiatic Lion"],
        correctAnswer: 1
    },
    {
        question: "Jim Corbett National Park is in which Indian state?",
        options: ["Uttarakhand", "Himachal Pradesh", "Jharkhand", "Punjab"],
        correctAnswer: 0
    },
    {
        question: "Which country has Banff National Park?",
        options: ["USA", "New Zealand", "Canada", "UK"],
        correctAnswer: 2
    },
    {
        question: "Which bird is the Keoladeo National Park famous for?",
        options: ["Hornbill", "Peacock", "Siberian Crane", "Flamingo"],
        correctAnswer: 2
    },
    {
        question: "Sundarbans is a UNESCO World Heritage Site located in?",
        options: ["Odisha", "West Bengal", "Assam", "Tripura"],
        correctAnswer: 1
    },
    {
        question: "Great Barrier Reef Marine Park is in which country?",
        options: ["Indonesia", "Australia", "Philippines", "Thailand"],
        correctAnswer: 1
    },
    {
        question: "Which is the smallest national park in India?",
        options: ["South Button Island", "Valley of Flowers", "Silent Valley", "Nokrek"],
        correctAnswer: 0
    },
    {
        question: "Manas National Park is in which Indian state?",
        options: ["Meghalaya", "Assam", "Sikkim", "Nagaland"],
        correctAnswer: 1
    },
    {
        question: "Which species is protected in Nokrek National Park?",
        options: ["Red Panda", "Hoolock Gibbon", "Lion-tailed Macaque", "Western Hoolock Gibbon"],
        correctAnswer: 3
    },
    {
        question: "Which national park is known for the Valley of Flowers?",
        options: ["Khangchendzonga", "Eravikulam", "Nanda Devi", "Namdapha"],
        correctAnswer: 2
    },
    {
        question: "Which wildlife sanctuary is famous for flamingos?",
        options: ["Chilka", "Rann of Kutch", "Pulicat", "Bharatpur"],
        correctAnswer: 1
    },
    {
        question: "Which Indian national park has the highest density of Royal Bengal Tigers?",
        options: ["Kanha", "Bandhavgarh", "Panna", "Pench"],
        correctAnswer: 1
    }

    ],

    Geography: [
        {
            question: "Which is the largest continent by area?",
            options: ["Asia", "Africa", "Europe", "Antarctica"],
            correctAnswer: 0
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
            correctAnswer: 2
        },
        {
            question: "Which country has the most natural lakes?",
            options: ["Canada", "Russia", "USA", "India"],
            correctAnswer: 0
        },
        {
            question: "What is the highest mountain peak in the world?",
            options: ["Mount Everest", "K2", "Lhotse", "Kangchenjunga"],
            correctAnswer: 0
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Sahara", "Gobi", "Kalahari", "Atacama"],
            correctAnswer: 0
        },
        {
            question: "Which country spans the most time zones?",
            options: ["USA", "France", "Russia", "China"],
            correctAnswer: 1
        },
        {
            question: "Which ocean is the deepest?",
            options: ["Atlantic", "Indian", "Southern", "Pacific"],
            correctAnswer: 3
        },
        {
            question: "What is the capital of Iceland?",
            options: ["Reykjavik", "Oslo", "Helsinki", "Stockholm"],
            correctAnswer: 0
        },
        {
            question: "The equator passes through how many continents?",
            options: ["Three", "Four", "Two", "Five"],
            correctAnswer: 1
        },
        {
            question: "Which African lake is the world's second largest freshwater lake?",
            options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Turkana"],
            correctAnswer: 0
        },
        {
            question: "Which is the smallest country in the world?",
            options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
            correctAnswer: 0
        },
        {
            question: "Which continent has the highest number of countries?",
            options: ["Asia", "Africa", "Europe", "South America"],
            correctAnswer: 1
        },
        {
            question: "Which river flows through Paris?",
            options: ["Seine", "Thames", "Danube", "Rhine"],
            correctAnswer: 0
        },
        {
            question: "What is the capital of New Zealand?",
            options: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
            correctAnswer: 1
        },
        {
            question: "Which is the longest river in Asia?",
            options: ["Yangtze", "Ganges", "Mekong", "Indus"],
            correctAnswer: 0
        },
        {
            question: "What is the name of the sea between Saudi Arabia and Africa?",
            options: ["Red Sea", "Arabian Sea", "Mediterranean Sea", "Black Sea"],
            correctAnswer: 0
        },
        {
            question: "Mount Kilimanjaro is located in which country?",
            options: ["Tanzania", "Kenya", "Uganda", "Ethiopia"],
            correctAnswer: 0
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "Thailand", "Vietnam"],
            correctAnswer: 1
        },
        {
            question: "Which continent is completely in the Southern Hemisphere?",
            options: ["Africa", "Australia", "South America", "Asia"],
            correctAnswer: 1
        },
        {
            question: "Which mountain range separates Europe and Asia?",
            options: ["Himalayas", "Ural", "Andes", "Alps"],
            correctAnswer: 1
        },
        {
            question: "Which is the saltiest body of water in the world?",
            options: ["Dead Sea", "Great Salt Lake", "Red Sea", "Caspian Sea"],
            correctAnswer: 0
        },
        {
            question: "Which strait separates India and Sri Lanka?",
            options: ["Palk Strait", "Malacca Strait", "Bering Strait", "Hormuz Strait"],
            correctAnswer: 0
        },
        {
            question: "What is the world's largest island?",
            options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
            correctAnswer: 0
        },
        {
            question: "Which ocean lies between Africa and Australia?",
            options: ["Indian", "Pacific", "Atlantic", "Southern"],
            correctAnswer: 0
        },
        {
            question: "Which U.S. state has the most volcanoes?",
            options: ["Alaska", "Hawaii", "California", "Washington"],
            correctAnswer: 0
        }

    ]
  }
};

