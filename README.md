# React Treasure Hunt Game

### Remember:
- Pseudocode!!
- Ask clarifying questions

### SetUp
- Got our repo from GitHub classroom
- Cloned, cd, yarn, yarn start


### User Stories
- (DONE) As a user, I can see a page with a 3 by 3 grid board game with a question mark in each square.
  - Created a div in Square
  - Gave it className
  - Put some styling on the square to have width, height, boarder
  - Imported the square component
  - Mapped over the array in state, returned the Square component call
  - Styled the game board
  - Passed the question mark into each square with props
- (DONE) As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
  - Set up an onClick on the square div
  - Created a handleClick method in the Square component
  - Created a handleGamePlay method in App
  - Passed the handleGamePlay method into the component call
  - Called the handleGamePlay method and passed in the index
- (DONE) As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
  - Destructure the array out of state
  - Use the index to reassign a value using the emoji keyboard (control + command + space)
- (DONE) As a user, if I select the winning square the question mark will become a treasure emoji.
  - Create a treasureLocation key in state with the initial value of null
  - Added a componentDidMount lifecycle method to update state with a random location of the treasure
  - Added an if statement looking for the match of the square that is currently clicked and the square that holds the treasure
  - Assigns an emoji and sets state
- (DONE) As a user, if I select the losing square the question mark will become a bomb emoji.
  - Create a bombLocation key in state with the initial value of null
  - Added a bomb variable that holds a random number in the componentDidMount
  - Updated the setState method to set the treasure and bomb
  - Added an else if statement looking for the match of the square that is currently clicked and the square that holds the bomb
  - Assigns an emoji and sets state
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at 5 and decrements one every time I click on a square that is not the treasure nor the bomb.
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- (DONE) As a user, I cannot continue to play the game after I win or lose.
  - Added a gameOver key in state with an initial value of false
  - Added a check to each condition in the handleGamePlay method to only continue if the gameOver value is false
  - Set state in each conditional output to update the gameOver value to true
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).
- As a user, I can click on a “Play Again” button that will restart the game.
