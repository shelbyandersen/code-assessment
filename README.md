# Multiple Choice Code Quiz with Highscores

## Description

This application features a welcome screen that asks the user to begin the quiz. When the user clicks "Start Quiz" the timer begins (75 seconds) and the first question appears on the screen. When the user selects their answer, it is validated and "right" or "wrong" appears on the screen. This continues until all the questions are answered. If the user gets a question wrong, 15 seconds are deducted from their time. The game is over either when the time runs out (gets to 0) or when the user finishes answering their question -- whatever comes first.

When the game is over, a new section will appear on the page that asks the user to enter their initials and submit their score. The users score is the time remaining on the timer. When the user clicks submit, they are taken to the Highscore page where a list of highscores are displayed from largest to smallest. From here the user may clear the highscores, or they may begin the quiz again.

![Code Quiz](./assets/homepage.png)
![Code Quiz](./assets/enterscore.png)
![Code Quiz](./assets/highscore.png)

Final Website Link: https://shelbyandersen.github.io/code-assessment/

## Overview

---HOME PAGE

Start Quiz - this button will begin the timed coding quiz. The total time is 75 seconds. If a user gets a question wrong, 15 seconds are deducted from the time.

View Highscores - this button will take the user to the highscore page

Timer - the timer says "0" on the homepage, but will begin once the quiz begins. The user has 75 seconds to complete the quiz.

---END QUIZ

Enter Initials at Quiz End - the user will enter their initials at the end of the quiz. Their initials are saved along with their quiz score.

Submit - When the user clicks "Submit" after entering their initials and ending the code quiz they are taken to the highscore page.

---HIGHSCORE PAGE

Play Again - the code quiz will begin

Clear Highscores - this will delete all of the highscores from the chart

Highscores are in numerical order from highest to lowest. The user's score is equivalent to the time remaining on the timer.

## Installation

The code for the Code Quiz can be found on github using the following link:
https://github.com/shelbyandersen/code-assessment

## Usage

The Code Quiz Application has an index.html file, a highscores.js file, a style.css file, a script.js file, and a highscores.js file.

DOM Manipulation was used to render most elements on the screen.

Code will need to be taken from the repo on github and changes can be made:

https://github.com/shelbyandersen/code-assessment

## Credits

The initial design of this application was provided by Trilogy Educational Services.

The application was completed by Shelby Andersen

## License

At this time there is no license associated with this project.

---

© 2020 Shelby Andersen in Collaboration with Georgia Tech Coding Boot Camp. All Rights Reserved.
