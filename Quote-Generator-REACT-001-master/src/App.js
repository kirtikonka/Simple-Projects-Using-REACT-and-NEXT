import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = { advice: '' };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = async () => { // Use async/await for cleaner error handling
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const { advice } = response.data.slip;
      this.setState({ advice });
      console.log(advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    } finally {
      // No need for logic here in most cases,
      // but can be used for cleanup tasks if necessary
    }
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Get Advice!</span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;