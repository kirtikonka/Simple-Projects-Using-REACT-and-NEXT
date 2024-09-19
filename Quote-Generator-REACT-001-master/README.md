# APP.JS EXPLANATION

**Imports:**

* `React`: The core React library for building user interfaces.
* `axios`: A popular library for making HTTP requests in JavaScript applications.
* `./App.css`: Imports styles from a CSS file named App.css (likely containing styles for the application's appearance).

**App Component:**

* `class App extends React.Component { ... }`: Defines a React component class named `App`. This class represents the main component of the application.
* `state = { advice: '' };`: Sets up the initial state of the component. The state object has a property named `advice` initialized with an empty string, which will hold the fetched advice text.

**Fetching Advice:**

* `componentDidMount() { ... }`: This lifecycle method is called after the component is mounted (inserted) into the DOM. It's a good place to fetch data from external sources.
  * `this.fetchAdvice();`: Calls the `fetchAdvice` function to retrieve advice.

* `fetchAdvice = async () => { ... }`: Defines an asynchronous function named `fetchAdvice` that uses `async/await` syntax for cleaner error handling.
  * `try { ... }`: Wraps the code that might throw errors in a try block.
    * `const response = await axios.get('https://api.adviceslip.com/advice');`: Makes a GET request to the provided API endpoint using Axios and waits for the response asynchronously.
    * `const { advice } = response.data.slip;`: Destructures the response data to extract the `advice` property from the nested `slip` object within the response data.
    * `this.setState({ advice });`: Updates the component's state by setting the `advice` property to the retrieved advice text.
    * `console.log(advice);`: Logs the fetched advice to the console for debugging purposes.
  * `catch (error) { ... }`: Catches any errors that might occur during the data fetching process.
    * `console.error('Error fetching advice:', error);`: Logs the error message to the console for debugging.
    * You can add logic here to handle errors gracefully, such as displaying an error message to the user.
  * `finally { ... }`: This block is executed regardless of whether there's an error (after try or catch) but is typically left empty. You can use it for cleanup tasks if necessary.

**Rendering Advice:**

* `render() { ... }`: This method defines how the component should be rendered on the screen.
  * `const { advice } = this.state;`: Destructures the `advice` property from the component's state.
  * `return ( ... )`: Returns the JSX code that represents the UI structure of the component.
    * `<div className="app"> ... </div>`: The main container element with the class "app".
      * `<div className="card"> ... </div>`: A card element with the class "card" likely containing the advice and button.
        * `<h1 className="heading">{advice}</h1>`: Displays the fetched advice text within a heading element with the class "heading".
        * `<button className="button" onClick={this.fetchAdvice}> ... </button>`: A button element with the class "button" that triggers the `fetchAdvice` function when clicked.
          * `<span>Get Advice!</span>`: The text displayed on the button.

**Exporting the App:**

* `export default App;`: Exports the `App` component as the default export from this module. This allows other parts of your application to import and use the `App` component.

# APP.CSS EXPLANATION

**Global Styles:**

* `#root, html, body { ... }`: Resets default browser margins and paddings, sets the height to 100% viewport height, and enables consistent sizing behavior using `box-sizing: border-box`.

**App Container:**

* `.app { ... }`:
  * Sets the height to 100%.
  * Sets a background image (`url('./image/city.jpg')`) with `cover` size (covering the entire area) and centered position.
  * Uses flexbox for layout with `justify-content: center` (centering content horizontally) and `align-items: center` (centering content vertically).
  * Centers text content using `text-align: center`.

**Card Element:**

* `.card { ... }`:
  * Sets a white smoke background (`background: whitesmoke`).
  * Defines width (40%) and height (20%) for the card.
  * Uses flexbox for layout with `align-items: center` (centering content vertically) and `flex-direction: column` (stacking content vertically).
  * Applies rounded corners with `border-radius: 25px`.
  * Adds some padding (`padding: 2%`).
  * Creates a subtle shadow effect using `box-shadow: 10px 10px`.

**Heading Element:**

* `.heading { ... }`:
  * Uses flexbox for layout with `align-items: center` (centering content vertically).
  * Sets a specific height (582px) which might be adjusted based on content.

**Button Element:**

* `.button { ... }`:
  * Removes default button styles with `outline: none` and `text-decoration: none`.
  * Sets rounded corners with `border-radius: 50px`.
  * Uses flexbox for layout with `justify-content: center` (centering content horizontally) and `align-items: center` (centering content vertically).
  * Defines cursor as pointer on hover (`cursor: pointer`).
  * Adjusts font size using `text-size-adjust: 30px`.
  * Converts text to uppercase (`text-transform: uppercase`).
  * Sets specific dimensions (height: 400px, width: 210px).
  * Sets initial opacity to 1 (`opacity: 1`).
  * Sets background color to white (`background-color: #ffffff`).
  * Defines a solid border with some transparency (`border: 2px solid rgba(22, 76, 167, 0.6)`).

* `.button span { ... }`: Styles the text within the button:
  * Sets color to a blue shade (`color: #164ca7`).
  * Sets font size to 12px.
  * Sets font weight to 500 (slightly bold).
  * Adjusts letter spacing slightly (`letter-spacing: 0.7px`).

* `.button:hover { ... }`: Applies styles when hovering over the button:
  * Animates the button with the `rotate` animation (defined later).

* `.button:hover span { ... }`: Applies styles to the text within the button on hover:
  * Animates the text with the `storm` animation (defined later), with a slight delay using `animation-delay: 0.06s`.

**Animations:**

* `@keyframes rotate { ... }`: Defines a rotation animation named `rotate` with a duration of 0.7 seconds and easing function (`ease-in-out`).
  * Rotates the element by a few degrees back and forth at different intervals.

* `@keyframes storm { ... }`: Defines a subtle movement animation named `storm` with a duration of 0.7 seconds and easing function (`ease-in-out`).
  * Moves the element slightly back and forth horizontally at different intervals.

**Media Query:**

* `@media only screen and (max-width: 600px) { ... }`: Defines styles specifically for screens with a maximum width of 600px.
  * Adjusts the card size (`width: 80%`, `height: 30%`) for better responsiveness on smaller screens.
