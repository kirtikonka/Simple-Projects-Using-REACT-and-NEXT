Do check the `instructions.txt` file 

./src/Components/TicTacToe

# TicTacToe.JSX EXPLANATION

**Imports:**

* `useState` and `useRef` hooks from React for managing component state and DOM element references.
* `TicTacToe.css` for styling the game.
* Image imports for the "X" and "O" icons.

**Initial State:**

* `data`: An array representing the game board state, initially empty (9 empty strings).
* `count`: Tracks the number of turns played (starts at 0).
* `lock`: A boolean flag to prevent further clicks after a win (starts as false).
* Multiple `useRef` hooks are used to create references to each individual box element on the board (box1, box2, etc.) and the title element (`titleRef`).

**`toggle` Function:**

* Handles clicks on each box.
* It checks the `lock` state to prevent clicks after a win.
* Based on the current turn (`count` being even or odd), it adds the appropriate image (X or O) to the clicked box's content using innerHTML.
* It updates the `data` array with the corresponding symbol ("X" or "O") at the clicked box's index.
* It increments the `count` to track turns.
* It sets `lock` to true to prevent further clicks until the next turn is processed.
* It calls the `checkWin` function to check for a winner after each turn.

**`checkWin` Function:**

* It checks all eight winning conditions (rows, columns, and diagonals) using the `data` array.
* If a winning condition is met (three matching symbols in a row, column, or diagonal), it calls the `won` function with the winning symbol ("X" or "O").

**`won` Function:**

* Sets the `lock` to true to prevent further clicks.
* Updates the title element's content to display a congratulations message with the winning symbol's image ("X Won" or "O Won").

**`reset` Function:**

* Resets the game by:
    * Setting `lock` to false.
    * Resetting the `data` array to empty strings.
    * Resetting the title to "Tic Tac Toe In React".
    * Looping through the `box_array` (containing references to all box elements) and clearing their innerHTML content.
    * Setting `count` back to 0.

**JSX Return:**

* The function returns the JSX code for the Tic Tac Toe component:
    * A container element with the class `container`.
    * A title element with the class `title` and a reference set using `ref={titleRef}`. The title displays "Tic Tac Toe In React" with "React" in a `<span>` tag.
    * A `board` element containing three rows (`row1`, `row2`, `row3`).
        * Each row contains three `boxes` elements with the class `boxes`.
        * Each `boxes` element has a reference set using the corresponding `useRef` hook (e.g., `ref={box1}`) and an `onClick` event handler that calls the `toggle` function with the box's index as an argument.
    * A reset button element with the class `reset` that calls the `reset` function on click.

# TicTacToe.css EXPLANATION

This code defines the styles for the Tic Tac Toe game using CSS selectors. Here's a breakdown of each class and its styles:

**`.container`**

* `text-align: center;`: This centers the content horizontally within the container element.

**`.title`**

* `margin-top: 50px;`: Adds a 50px margin from the top for the title element.
* `color: white;`: Sets the text color of the title to white.
* `font-size: 60px;`: Sets the font size of the title to 60px.
* `display: flex;`: Sets the display property to flex for the title element. This allows for centering the content within the title using the following properties.
* `justify-content: center;`: Horizontally centers the content within the title element.
* `align-items: center;`: Vertically centers the content within the title element.

**`.title span`**

* Targets the `span` element nested within the `.title` element.
* `color: aqua;`: Sets the text color of the content within the `<span>` tag to aqua.
* `padding-left: 15px;`: Adds a left padding of 15px to the content within the `<span>` tag.

**`.reset`**

* Styles the reset button element.
* `width: 250px; height: 100px;`: Sets the width and height of the reset button.
* `border: none; outline: none;`: Removes the default border and outline from the button.
* `cursor: pointer;`: Sets the cursor to "pointer" on hover, indicating interactivity.
* `border-radius: 50px;`: Creates a rounded border for the button with a radius of 50px (circular shape).
* `background: #1f3540;`: Sets the background color of the button to a dark shade of blue (#1f3540).
* `font-size: 26px;`: Sets the font size of the text on the button to 26px.
* `color: #26ffcb;`: Sets the text color of the button to a light blue (#26ffcb).
* `margin-top: 25px; margin-bottom: 50px;`: Adds margins to the top and bottom of the button for spacing.

**`.board`**

* Styles the game board element.
* `height: 600px; width: 564px;`: Sets the height and width of the game board.
* `display: flex;`: Sets the display property to flex for the board element. This allows for positioning the rows within the board.
* `margin: auto;`: Applies margins automatically to ensure the board is centered horizontally within the container.

**`.boxes`**

* Styles the individual boxes on the game board.
* `display: flex;`: Sets the display property to flex for the boxes. This allows for centering the "X" or "O" image within the box.
* `height: 180px; width: 180px;`: Sets the height and width of each box.
* `background-color: #1f3540;`: Sets the background color of the boxes to a dark shade of blue (#1f3540).
* `border: 4px solid #0f1b21;`: Adds a solid border to the boxes with a width of 4px and a darker shade of blue (#0f1b21) color.
* `border-radius: 12px;`: Creates rounded corners for the boxes with a radius of 12px.
* `cursor: pointer;`: Sets the cursor to "pointer" on hover, indicating interactivity.

**`.boxes img`**

* Targets the `img` element (the "X" or "O" image) placed within the `.boxes` element.
* `margin: 50px;`: Adds a margin of 50px around the image, centering it within the box.

**`.title img`**

* Targets the `img` element (likely the React logo) placed within the `.title` element.
* `padding: 20px 20px;`: Adds padding of 20px around the image for spacing.
* `height: 50px;`: Sets the height of the image to 50px.

